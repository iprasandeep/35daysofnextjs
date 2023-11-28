import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>About</h1>
        <Link href="/about">Link To About Page</Link>
      </div>
    </main>
  )
}
