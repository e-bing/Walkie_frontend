// 추후 추가 필요
// 1) 욕설 필터 단어 목록
const BAD_WORDS = ['fuck', 'shit', '씨발', '시발', 'ㅅㅂ', '병신', '미친'] as const;

/**
 * 욕설 포함 여부 검사
 */
export const containsBadWord = (value: string): boolean => BAD_WORDS.some((w) => value.includes(w));

/**
 * 형식(한글/영문/숫자) 검사
 */
export const isFormatValid = (value: string): boolean => /^[a-zA-Z0-9가-힣]+$/.test(value);

/**
 * 길이(2~12자) 검사
 */
export const isLengthValid = (value: string): boolean => value.length >= 2 && value.length <= 12;

/**
 * 모든 검증을 돌려보고, 발생한 에러 메시지를 배열로 반환
 */
export function getNicknameValidationErrors(value: string): string[] {
  const errors: string[] = [];

  if (!isFormatValid(value)) {
    errors.push('한글, 영문, 숫자 조합으로 입력해주세요.');
  }
  if (!isLengthValid(value)) {
    errors.push('2자 이상 12자 이하로 입력해주세요.');
  }
  if (containsBadWord(value)) {
    errors.push('부적절한 단어가 포함되어 있습니다.');
  }

  return errors;
}
