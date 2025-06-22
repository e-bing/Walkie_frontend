import React from 'react';
import CustomInput from '../atoms/CustomInput';
import SearchIcon from '../atoms/SearchIcon';
import { useRouter } from 'next/navigation';

interface LocationSearchFormProps {
  value: string;
}

const LocationSearchForm: React.FC<LocationSearchFormProps> = ({ value }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/signup/location/search');
  };

  return (
    <CustomInput
      value={value}
      placeholder="주소 검색하기"
      readOnly
      onClick={handleClick}
      endContent={<SearchIcon size={20} />}
      borderColor="border-neutral-300"
      className="font-body1"
      inputClassName="cursor-pointer"
    />
  );
};

export default LocationSearchForm;
