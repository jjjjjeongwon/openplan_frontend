'use client';

import { Button } from '@repo/ui/button';
import styles from './page.module.css';
import { useFetchPhoto } from '../src/hooks/useFetchPhoto';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const { fetchPhoto, status } = useFetchPhoto();

  const [throttle, setThrottle] = useState<boolean>(true);

  const handleClick = () => {
    if (throttle) return;
    setThrottle(true);

    fetchPhoto(undefined, {
      onSuccess: () => {
        router.push('/result');
        setThrottle(false);
      },
      onError: () => {
        setThrottle(false);
      },
    });
  };

  const isLoading = status === 'pending' || throttle;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>박정원</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <p className={styles.description}>
            안녕하세요
            <br />
            박정원입니다.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <Button onClick={handleClick}>
          {isLoading ? <div className={styles.spinner} /> : '다음'}
        </Button>
      </footer>
    </div>
  );
}
