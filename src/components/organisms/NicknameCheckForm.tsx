import React, { useState } from 'react';
import NicknameInputWithButton from '../molecules/NicknameInputWithButton';
import ValidationMessages from '../molecules/ValidationMessages';
import { getNicknameValidationErrors } from '@/utils/nicknameValidation';

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
