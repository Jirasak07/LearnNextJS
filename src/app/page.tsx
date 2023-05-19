import AppHeader from '@/client-components/AppHeader'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <p>{process.env.DB_PASSWORD}</p>
      <p>{process.env.DB_USER}</p>
      {/* <p>{process.env.DB_PASSWORD}</p> */}
      <h2 className={styles.title} >Title</h2>
      <div>
        <Link href='/about' > Go About </Link>
      </div>
      <p style={{color:'red',fontSize:20}} >Hellow React</p>
      <h1 className='header' >Hello Next.js 3</h1>
      <AppHeader />
    </main>
  )
}
