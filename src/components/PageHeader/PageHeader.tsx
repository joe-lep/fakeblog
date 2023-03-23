import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const PageHeader : React.FC<Props> = ({ title, children }) => {
  return (
    <header>
      <h2>{title}</h2>
      {children}
    </header>
  );
};
