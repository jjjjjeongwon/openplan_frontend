'use client';

import { MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>; // 선택적 prop으로 만들 수 있음
}

export const Button = ({ children, disabled, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
