import Styles from './Footer.module.css'

export const Footer = function(){
	return(
		<footer>
			<div className={Styles["mainSection"]}>
				<p className={Styles['logoText']}>fifty</p>
				<ul className={Styles["menuContainer"]}>
					<li>
						<a href="" className={Styles['menuEl']}>About Us</a>
					</li>
					<li>
						<a href="" className={Styles['menuEl']}>Benefits</a>
					</li>
					<li>
						<a href="" className={Styles['menuEl']}>Statistics</a>
					</li>
					<li>
						<a href="" className={Styles['menuEl']}>FAQ</a>
					</li>
				</ul>
				<ul className={Styles["linksContainer"]}>
					<li>
						<a href="" className={Styles['link']}>support@fiftycapital.com</a>
					</li>
					<li>
						<a href="" className={Styles['link']}>Facebook</a>
					</li>
					<li>
						<a href="" className={Styles['link']}>Twitter</a>
					</li>
				</ul>
			</div>
			<div className={Styles['line']}></div>
			<p className={Styles["copyright"]} align="center">© 2023 — Copyright</p>
		</footer>
	)

}