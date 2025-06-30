import React from 'react';

interface PermissionSectionProps {
  title: string;
  children: React.ReactNode;
}

const PermissionSection = ({ title, children }: PermissionSectionProps) => {
  return (
    <section className="mb-7">
      <h2 className="title3 mb-3">{title}</h2>
      {children}
    </section>
  );
};

export default PermissionSection;
