'use client';

import { Button } from '@repo/ui/button';
import styles from './page.module.css';
import { useFetchPhoto } from '../src/hooks/useFetchPhoto';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const { fetchPhoto, status } = useFetchPhoto();

  const [throttle, setThrottle] = useState<boolean>(false);

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

  useEffect(() => {
    try {
      const stored = localStorage.getItem('photo-storage');
      if (!stored) return;

      const parsed = JSON.parse(stored);
      const photoData = parsed?.state?.photo;

      if (photoData?.id) {
        router.replace('/result');
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

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
