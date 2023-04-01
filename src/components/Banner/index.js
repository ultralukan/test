import Navbar from "@/components/Banner/Navbar";
import Logo from "@/components/Banner/Logo";
import styles from './styles.module.scss'
import Image from 'next/image';

export default function Banner() {
  return (
    <header className={styles.banner}>
      <div className={styles.banner_image}>
        <img
          src="/banner.jpg"
          alt="Banner Image"
        />
      </div>
      <Logo/>
      <Navbar/>
    </header>
  )
}