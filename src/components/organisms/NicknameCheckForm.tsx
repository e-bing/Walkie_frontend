import React, { useState } from 'react';
import NicknameInputWithButton from '../molecules/NicknameInputWithButton';
import ValidationMessages from '../molecules/ValidationMessages';

const BAD_WORDS = ['fuck', 'shit', '씨발', '시발', 'ㅅㅂ', '병신', '미친'];

function containsBadWord(nickname: string) {
  return BAD_WORDS.some((word) => nickname.includes(word));
}

interface NicknameCheckFormProps {
  onVerify?: (verified: boolean) => void;
}

const NicknameCheckForm: React.FC<NicknameCheckFormProps> = ({ onVerify }) => {
  const [nickname, setNickname] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [status, setStatus] = useState<'default' | 'success' | 'error'>('default');
  const [messages, setMessages] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length > 12) value = value.slice(0, 12);
    setNickname(value);

    const errors: string[] = [];
    if (!/^[a-zA-Z0-9가-힣]+$/.test(value)) {
      errors.push('한글, 영문, 숫자 조합으로 입력해주세요.');
    }
    if (containsBadWord(value)) {
      errors.push('부적절한 단어가 포함되어 있습니다.');
    }

    if (errors.length > 0) {
      setStatus('error');
      setMessages(errors);
      onVerify?.(false);
    } else {
      setStatus('default');
      setMessages([]);
      onVerify?.(false); // 중복확인 전이므로 false
    }
  };

  const handleCheck = async () => {
    const value = nickname.trim();
    const errors: string[] = [];

    if (!/^[a-zA-Z0-9가-힣]+$/.test(value)) {
      errors.push('한글, 영문, 숫자 조합으로 입력해주세요.');
    }
    if (value.length < 2 || value.length > 12) {
      errors.push('2자 이상 12자 이하로 입력해주세요.');
    }
    if (containsBadWord(value)) {
      errors.push('부적절한 단어가 포함되어 있습니다.');
    }

    if (errors.length > 0) {
      setStatus('error');
      setMessages(errors);
      onVerify?.(false);
      return;
    }

    setIsChecking(true);
    setStatus('default');
    setMessages([]);

    try {
      const isAvailable = await checkNicknameAPI(value);
      if (isAvailable) {
        setStatus('success');
        setMessages(['사용 가능한 닉네임입니다.']);
        onVerify?.(true);
      } else {
        setStatus('error');
        setMessages(['중복된 닉네임입니다.']);
        onVerify?.(false);
      }
    } catch {
      setStatus('error');
      setMessages(['오류가 발생했습니다. 다시 시도해 주세요.']);
      onVerify?.(false);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div>
      <NicknameInputWithButton
        value={nickname}
        onChange={handleChange}
        onCheck={handleCheck}
        isChecking={isChecking}
        status={status}
      />
      <ValidationMessages messages={messages} status={status} />
    </div>
  );
};

// 임시 API
async function checkNicknameAPI(nickname: string): Promise<boolean> {
  await new Promise((r) => setTimeout(r, 700));
  return nickname !== 'taken'; // 'taken'만 중복 처리
}

// async function checkNicknameAPI(nickname: string): Promise<boolean> {
//   const response = await fetch(`${API_URL}/nickname/check`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ nickname }),
//   });
//   if (!response.ok) throw new Error('API 오류');
//   const data = await response.json();
//   return data.available;
// }

export default NicknameCheckForm;
