import Image from 'next/image'
import styles from '../styles/ActualHome.module.css'

export default function ActualHome() {
  return (
    <div>
        <div className={styles.bgWrap}>
      <Image
        alt="Mountains"
        src="/images/mountains_placehoder.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      </div>
     <p className={styles.bgText}>
      Happy Birthday Suhas!
    </p>
    </div>
  )
} 