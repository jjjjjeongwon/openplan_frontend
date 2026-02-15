'use client';

import { Button } from '@repo/ui/button';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type PhotoData = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export default function Home() {
  const router = useRouter();

  const [photo, setPhoto] = useState<PhotoData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('photo-storage');

      if (!stored) {
        const timer = setTimeout(() => router.replace('/'), 1000);
        return () => clearTimeout(timer);
      }

      const parsed = JSON.parse(stored);
      const photoData = parsed?.state?.photo;

      if (!photoData?.id || !photoData?.author) {
        router.replace('/');
        return;
      }

      const timer = setTimeout(() => {
        setPhoto(photoData);
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } catch (error) {
      console.error(error);
      router.replace('/');
    }
  }, []);

  if (!photo) return null;

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: photo?.download_url
          ? `url(${photo.download_url})`
          : undefined,
      }}
    >
      <div className={styles.overlay} />
      <header className={styles.header}>
        <h1 className={styles.title}>박정원</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            {photo.download_url && (
              <img
                src={photo.download_url}
                alt={photo.author}
                className={styles.image}
              />
            )}
          </div>
        </section>

        <section className={styles.infoSection}>
          <ul className={styles.infoList}>
            <li className={styles.infoCard}>
              <div className={styles.infoItem}>
                <dt className={styles.infoLabel}>id</dt>
                <dd className={styles.infoValue}>
                  {loading ? (
                    <div className={styles.skeleton} />
                  ) : (
                    (photo.id ?? '-')
                  )}
                </dd>
              </div>

              <div className={styles.infoItem}>
                <dt className={styles.infoLabel}>author</dt>
                <dd className={styles.infoValue}>
                  {loading ? (
                    <div className={styles.skeleton} />
                  ) : (
                    (photo.author ?? '-')
                  )}
                </dd>
              </div>
            </li>

            <li className={styles.infoCard}>
              <div className={styles.infoItem}>
                <dt className={styles.infoLabel}>width</dt>
                <dd className={styles.infoValue}>
                  {loading ? (
                    <div className={styles.skeleton} />
                  ) : (
                    (photo.width?.toLocaleString() ?? '-')
                  )}
                </dd>
              </div>

              <div className={styles.infoItem}>
                <dt className={styles.infoLabel}>height</dt>
                <dd className={styles.infoValue}>
                  {loading ? (
                    <div className={styles.skeleton} />
                  ) : (
                    (photo.height?.toLocaleString() ?? '-')
                  )}
                </dd>
              </div>
            </li>

            <li className={styles.infoCard}>
              <div className={styles.infoItem}>
                <dt className={styles.infoLabel}>url</dt>
                <dd className={styles.infoValue}>
                  {loading ? (
                    <div className={styles.skeleton} />
                  ) : photo.url ? (
                    <a
                      href={photo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {photo.url}
                    </a>
                  ) : (
                    '-'
                  )}
                </dd>
              </div>

              <div className={styles.infoItem}>
                <dt className={styles.infoLabel}>download_url</dt>
                <dd className={styles.infoValue}>
                  {loading ? (
                    <div className={styles.skeleton} />
                  ) : photo.download_url ? (
                    <a
                      href={photo.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {photo.download_url}
                    </a>
                  ) : (
                    '-'
                  )}
                </dd>
              </div>
            </li>
          </ul>
        </section>
        <footer className={styles.footer}>
          <Button children="이전" onClick={() => router.back()} />
        </footer>
      </main>
    </div>
  );
}
