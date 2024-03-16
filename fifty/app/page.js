import Styles from "./page.module.css";
import Image from "next/image";
import Background from '../public/Background.svg'
import CardImage from '../public/Card.png'

export default function Home() {
  return (
		<main>
			<Image src={Background} alt="background" className={Styles['backgroundImage']} />
			<div className={Styles['pageContainer']}>
				<h1 className={Styles["pageTitle"]}>Get your black card now</h1>
				<Image src={CardImage} className={Styles["cardImage"]} alt="Card image" />
				<button className={Styles['order']}>Mint</button>
				<p className={Styles["text"]}>Supply: 50</p>
			</div>
		</main>
  )
}
