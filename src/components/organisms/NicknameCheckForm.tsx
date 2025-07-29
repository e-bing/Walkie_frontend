import React, { useState } from 'react';
import NicknameInputWithButton from '../molecules/NicknameInputWithButton';
import ValidationMessages from '../molecules/ValidationMessages';
import { getNicknameValidationErrors } from '@/utils/nicknameValidation';
import { SWAGGER_API_URL } from '@/constants/api';

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
    if (value.length > 12) {
      value = value.slice(0, 12);
    }
    setNickname(value);

    const errors = getNicknameValidationErrors(value);
    if (errors.length > 0) {
      setStatus('error');
      setMessages(errors);
      onVerify?.(false);
      return;
    }

    setStatus('default');
    setMessages([]);
    onVerify?.(false);
  };

  const handleCheck = async () => {
    const trimmed = nickname.trim();
    const errors = getNicknameValidationErrors(trimmed);

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
      const isAvailable = await checkNicknameAPI(trimmed);
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

// // 임시 API
// async function checkNicknameAPI(nickname: string): Promise<boolean> {
//   await new Promise((r) => setTimeout(r, 700));
//   return nickname !== 'taken'; // 'taken'만 중복 처리
// }

async function checkNicknameAPI(nickname: string): Promise<boolean> {
  const url = new URL(`${SWAGGER_API_URL}/members/nickname/available`);
  url.searchParams.append('nickname', nickname);

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (response.ok && data.code === '200') {
    return data.data === true;
  } else {
    console.error('API 오류:', data.message, data.data);
    throw new Error(data.message || 'API 요청 에러');
  }
}

export default NicknameCheckForm;
