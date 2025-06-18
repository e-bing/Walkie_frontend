// 임시 버튼 (ui 라이브러리 사용 시 삭제)
import React from 'react';

export interface ButtonProps {
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 버튼 타입 */
  type?: 'button' | 'submit' | 'reset';
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 버튼 색상 변형 */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** 버튼 크기 */
  size?: 'sm' | 'md' | 'lg';
  /** 추가 클래스네임 */
  className?: string;
  children: React.ReactNode;
}

// Tailwind 기본 색상으로 명확한 클래스 지정
const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-[#2750E0] text-white ',
  secondary: 'bg-[#D9D9D9] text-white ',
  tertiary: 'bg-transparent text-blue-600 ',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full inline-flex items-center justify-center
        font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variantClasses[variant]} ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
