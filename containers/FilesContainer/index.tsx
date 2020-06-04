import styles from "./index.module.css";

export function FilesContainer(props) {
	const { user: { name = "Anant" } = {} } = props;

	return (
		<div className={styles.root}>
			<div className={styles.welcome}>
				<span className={styles.name}>Hey {name},</span> Welcome to Secure Drive
			</div>

			<div className={styles.container}>
				<div className={styles.recentFilesHeader}>
					<div className={styles.title}>Recent Files</div>
					<div className={styles.allview}>View all</div>
				</div>
			</div>
		</div>
	);
}
