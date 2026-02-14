'use client';

import { Button } from '@repo/ui/button';
import styles from './page.module.css';
import { useFetchPhoto } from '../src/hooks/useFetchPhoto';

export default function Home() {
  const { fetchPhoto, status } = useFetchPhoto();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <Button
            children={status === 'pending' ? 'Loading...' : '다음'}
            onClick={() => fetchPhoto()}
          />
        </div>
      </main>
    </div>
  );
}
