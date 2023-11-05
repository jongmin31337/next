import Link from 'next/link';
import styles from './layout.module.css';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className={styles.nav}>
          <Link href="/products/women" className={styles.item}>여성옷</Link>
          <Link href="/products/man" className={styles.item}>남성옷</Link>
      </nav>
      {children}
    </>
  )
}