'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import SearchHeader from './components/SearchHeader';
import CurrentPositionButton from './components/CurrentPositionButton';
import { seoulDongs } from '@/constants/seoul-dongs';

// 주소 검색 API
const fetchLocations = async (keyword: string) => {
  if (!keyword) return [];
  const cleanKeyword = keyword.trim().replace(/동$/, '');
  return seoulDongs.filter((dong) => dong.name.includes(cleanKeyword));
};

// 위치 기반 주소 검색 API
const fetchLocationsByCoords = async (lat: number, lng: number) => {
  // 미사용 변수 오류 때문에 임시 코드 작성
  void lat;
  void lng;
  // return await fetch(`/${API_URL}/locations?lat=${lat}&lng=${lng}`).then(res => res.json());
  return [
    { name: '서울시 강남구 개포동', id: 101 },
    { name: '서울시 강남구 논현동', id: 102 },
    { name: '서울시 강남구 대치동', id: 103 },
    { name: '서울시 서초구 서초동', id: 104 },
    { name: '서울시 서초구 잠원동', id: 105 },
    { name: '서울시 서초구 방배동', id: 106 },
  ];
};

const LocationSearchPage: React.FC = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [locations, setLocations] = useState<{ name: string; id: number }[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchMode, setSearchMode] = useState<'keyword' | 'current' | null>(null);

  useEffect(() => {
    if (!keyword) {
      setLocations([]);
      setLoading(false);
      setSearchMode(null);
      return;
    }
    setLoading(true);
    setSearchMode('keyword');

    const timeout = setTimeout(() => {
      fetchLocations(keyword).then((res) => {
        setLocations(res);
        setLoading(false);
      });
    }, 300); // debounce
    return () => clearTimeout(timeout);
  }, [keyword]);

  const handleFindByLocation = useCallback(() => {
    setSearchMode('current');
    if (!navigator.geolocation) {
      alert('위치 정보 사용이 불가합니다.');
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetchLocationsByCoords(pos.coords.latitude, pos.coords.longitude).then((res) => {
          setLocations(res);
          setLoading(false);
        });
      },
      (err) => {
        alert('위치 정보를 가져올 수 없습니다.' + (err?.message || ''));
        setLoading(false);
      },
    );
  }, []);

  // 주소 선택 시 이전 화면으로 이동
  const handleSelectLocation = (name: string) => {
    router.push(`/signup/location?selected=${encodeURIComponent(name)}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="max-w-sm mx-auto py-10">
      <SearchHeader
        inputValue={keyword}
        onInputChange={(e) => setKeyword(e.target.value)}
        onBack={handleBack}
      />
      <CurrentPositionButton onClick={handleFindByLocation} loading={loading} />

      <div className="mt-8">
        {searchMode === 'current' ? (
          <div className="labelL mx-2 mb-3">현재 위치 기반 주소지</div>
        ) : searchMode === 'keyword' && keyword ? (
          <div className="labelL mx-2 mb-3">‘{keyword}’ 검색결과</div>
        ) : null}
        {!loading && locations.length === 0 && keyword && (
          <div className="py-3 px-2 text-neutral-500 body2">검색 결과가 없습니다.</div>
        )}

        <ul>
          {locations.map((loc) => (
            <li
              key={loc.id}
              className="py-3 px-2 border-b body2 border-neutral-300 cursor-pointer hover:bg-neutral-100 transition"
              onClick={() => handleSelectLocation(loc.name)}
            >
              {loc.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationSearchPage;
