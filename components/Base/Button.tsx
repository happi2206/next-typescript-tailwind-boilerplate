import React, { MouseEventHandler } from 'react';

interface Props {
  children: React.ReactNode;
  isSearch?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  full?: boolean;
}

const Button = ({ full, children, isSearch, onClick, disabled }: Props) => {
  return (
    <button
      className={`${isSearch ? 'px-12 py-3' : 'p-4'} ${
        disabled ? 'bg-customgray200 cursor-not-allowed' : 'bg-dark'
      } ${
        full && 'w-full'
      } font-bold md:text-base text-sm text-light hover:opacity-80`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
