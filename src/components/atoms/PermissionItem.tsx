import React from 'react';

interface PermissionItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PermissionItem = ({ icon, title, description }: PermissionItemProps) => {
  return (
    <div className="flex gap-3 items-start mb-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100">
        {icon}
      </div>
      <div>
        <p className="labelM">{title}</p>
        <p className="body2 text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

export default PermissionItem;
