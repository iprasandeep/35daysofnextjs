import styles from './style.module.css';

export default function AboutLayout({
    children,
}:{
    children: React.ReactNode
}){
  return (
   <>
   <head />
    <nav>About NavBar</nav>
    <main className={styles.main}>
        {children}
    </main>
   </>
  )
}
