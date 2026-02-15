'use client';

import { useRouter } from 'next/navigation';
import styles from './not-found.module.css';
import { Button } from '@repo/ui/button';

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 ERROR</h1>
      <p className={styles.description}>
        페이지를 찾을 수 없습니다.
        <br />
        존재하지 않는 주소를 입력하셨거나
        <br />
        요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
      </p>
      <footer className={styles.footer}>
        <Button onClick={() => router.push('/')}>메인으로 돌아가기</Button>
      </footer>
    </div>
  );
}
