import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

interface IMenuItem {
	name: string;
	icon: any;
	isActive?: boolean;
	href: string;
}

export function SideNav() {
	const menuItems: IMenuItem[] = [
		{
			name: "",
			icon: HomeRoundedIcon,
			isActive: true,
			href: "/",
		},
		{
			name: "",
			icon: SettingsRoundedIcon,
			isActive: true,
			href: "/upload",
		},
	];

	return (
		<div className={styles.root}>
			<Link href="/">
				<div className={styles.logoContainer}>
					<img className={styles.logo} src={"/images/logo.png"} />
				</div>
			</Link>
			{menuItems.map((item, i) => (
				<Link href={item.href} key={i}>
					<item.icon className={styles.menuIcon} />
				</Link>
			))}
		</div>
	);
}
