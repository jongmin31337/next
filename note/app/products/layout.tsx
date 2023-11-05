import styles from './layout.module.css';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className={styles.nav}>
          <a className={styles.item}>여성옷</a>
          <a className={styles.item}>남성옷</a>
      </nav>
      {children}
    </>
  )
}