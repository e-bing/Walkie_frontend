import React from 'react';
import AgreementCheckbox from '@/components/atoms/Checkbox';
import ChevronRightIcon from '@/components/atoms/ChevronRightIcon';

export interface AgreementItemProps {
  checked: boolean;
  label: string;
  required?: boolean;
  showArrow?: boolean;
  onToggle: (newState: boolean) => void;
  onClickArrow?: () => void;
}

const AgreementItem = ({
  checked,
  label,
  required,
  showArrow = false,
  onToggle,
  onClickArrow,
}: AgreementItemProps) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <AgreementCheckbox checked={checked} onChange={() => onToggle(!checked)} />
        <span className="text-sm font-medium text-black">{`
          ${required ? '[필수] ' : ''}${label}`}</span>
      </div>
      {showArrow && (
        <button type="button" onClick={onClickArrow}>
          <ChevronRightIcon />
        </button>
      )}
    </div>
  );
};

export default AgreementItem;
