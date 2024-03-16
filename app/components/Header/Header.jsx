import Styles from './Header.module.css'
import Image from 'next/image'
import FacebookIcon from '@/public/FacebookIcon.svg'
import TwitterIcon from '@/public/TwitterIcon.svg'

export const Header = function(){
	return(
		<div className={Styles['header']}>
		<p className={Styles["logoText"]}>fifty</p>
		<ul className={Styles['menuContainer']}>
			<li>
				<a href="#" className={Styles["menuElement"]}>Home</a>
			</li>
			<li>
				<a href="#" className={Styles["menuElement"]}>Dashboard</a>
			</li>
			<li>
				<a href="#" className={Styles["menuElement"]}>FAQ</a>
			</li>
		</ul>
		<div className={Styles["loginContainer"]}>
			<button className={Styles["login"]}>Log In</button>
			<a href="#">
			<Image src={FacebookIcon} alt="Facebook icon" className={Styles["linkImg"]} />
			</a>
			<a href="#">
				<Image src={TwitterIcon} alt="Twitter icon" className={Styles["linkImg"]} />
			</a>
		</div>
	</div>
	)

}