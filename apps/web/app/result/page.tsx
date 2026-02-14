import { Button } from '@repo/ui/button';
import styles from '../page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <Button children="결과 페이지 테스트" />
        </div>
      </main>
    </div>
  );
}
