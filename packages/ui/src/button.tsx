'use client';

import { ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  appName: string;
}

export const Button = ({ children, disabled, appName }: ButtonProps) => {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={() => alert(`Hello from your ${appName}테스트!!!! app!`)}
    >
      {children}
    </button>
  );
};
