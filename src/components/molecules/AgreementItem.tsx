import React from 'react';
import AgreementCheckbox from '@/components/atoms/Checkbox';
import ChevronRightIcon from '@/components/atoms/ChevronRightIcon';

export interface AgreementItemProps {
  checked: boolean;
  label: string;
  required?: boolean;
  showArrow?: boolean;
  onToggle: (newState: boolean) => void;
}

const AgreementItem = ({
  checked,
  label,
  required,
  showArrow = false,
  onToggle,
}: AgreementItemProps) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <AgreementCheckbox checked={checked} onChange={() => onToggle(!checked)} />
        <span className="text-sm font-medium text-black">{`${
          required ? '[필수] ' : ''
        }${label}`}</span>
      </div>
      {showArrow && <ChevronRightIcon />}
    </div>
  );
};

export default AgreementItem;
