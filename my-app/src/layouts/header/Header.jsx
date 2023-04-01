import React from 'react'
//  import custom style
import styles from "./Header.module.css";

const Header = () => {
	return (
		<>
			<header>
				<div className='logo'>Logo</div>
				<nav>
					<ul className={styles.header__menu}>
						<li>test</li>
						<li>test</li>
						<li>test</li>
						<li>test</li>
						<li>test</li>
						<li>test</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header