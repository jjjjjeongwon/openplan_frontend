'use client';

import { ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
}

export const Button = ({ children, disabled }: ButtonProps) => {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={() => alert('클릭 테스트!')}
    >
      {children}
    </button>
  );
};
