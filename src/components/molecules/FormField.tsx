// Atoms를 조합한 컴포넌트
import React from "react";
import InputField from "@/components/atmos/input/index";

interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1 font-medium">
        {label}
      </label>
      <InputField id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default FormField;
