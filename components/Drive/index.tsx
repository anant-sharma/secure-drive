import styles from "./index.module.css";

export interface IDrive {
	id: string;
	icon: string;
	name: string;
	capacity: {
		total: string;
		used: string;
	};
}

export function Drive(props: IDrive) {
	return (
		<div className={styles.root}>
			<div className={styles.icon}>
				<img src={props.icon} />
			</div>
			<div className={styles.info}>
				<div className={styles.title}>{props.name}</div>
				<div className={styles.capacity}>
					{props.capacity.used} of {props.capacity.total} used
				</div>
			</div>
		</div>
	);
}
