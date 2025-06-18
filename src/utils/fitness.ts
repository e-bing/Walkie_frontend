/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    google?: any;
  }
}

// Google Identity Services 설정
const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
const SCOPES = 'https://www.googleapis.com/auth/fitness.activity.read';
let tokenClient: any;

/**
 * Google Identity Services 클라이언트 스크립트 로드
 */
async function loadGisClient(): Promise<void> {
  if (window.google?.accounts?.oauth2) return;
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

/**
 * 오늘 걸음 수 조회 (GIS 기반)
 */
export async function fetchTodaySteps(): Promise<number> {
  await loadGisClient();

  // 토큰 요청
  const token: string = await new Promise((resolve, reject) => {
    tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: (resp: any) => {
        if (resp.error) reject(resp.error);
        else resolve(resp.access_token);
      },
    });
    tokenClient.requestAccessToken({ prompt: '' });
  });

  // 오늘 자정부터 현재까지 데이터 집계
  const now = Date.now();
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const response = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      aggregateBy: [{ dataTypeName: 'com.google.step_count.delta' }],
      bucketByTime: { durationMillis: 24 * 60 * 60 * 1000 },
      startTimeMillis: startOfDay.getTime(),
      endTimeMillis: now,
    }),
  });

  if (!response.ok) throw new Error('API 요청 실패');
  const data = await response.json();
  const buckets = data.bucket || [];

  // 총 걸음 수 합산
  return buckets.reduce((total: number, bucket: any) => {
    const points = bucket.dataset[0]?.point || [];
    return total + points.reduce((sum: number, pt: any) => sum + (pt.value[0]?.intVal || 0), 0);
  }, 0);
}
