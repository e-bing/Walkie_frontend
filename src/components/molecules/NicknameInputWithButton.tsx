import React from 'react';
import { Input, Button } from '@heroui/react';

interface NicknameInputWithButtonProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheck: () => void;
  isChecking: boolean;
  disabled?: boolean;
  status?: 'default' | 'success' | 'error';
}

const underlineColorMap = {
  default: 'border-[#D9D9D9]',
  success: 'border-[#2750E0]',
  error: 'border-[#FB1D1D]',
};

const NicknameInputWithButton: React.FC<NicknameInputWithButtonProps> = ({
  value,
  onChange,
  onCheck,
  isChecking,
  disabled,
  status = 'default',
}) => (
  <div>
    <Input
      value={value}
      onChange={onChange}
      placeholder="닉네임을 입력해주세요"
      disabled={disabled}
      maxLength={12}
      size="sm"
      className="w-full !border-none !rounded-none !p-0 bg-transparent focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
      endContent={
        <Button
          onClick={onCheck}
          disabled={isChecking || disabled || !value}
          color="primary"
          size="sm"
          radius="full"
          type="button"
          className="ml-2 text-xs border border-[#ABABAB] text-[#686868] font-normal shadow-none whitespace-nowrap
          py-1"
        >
          {isChecking ? '확인 중' : '중복확인'}
        </Button>
      }
    />
    <div
      className={`w-full h-0.5 mt-2 ${underlineColorMap[status]} transition-colors border-b`}
    ></div>
  </div>
);

export default NicknameInputWithButton;
