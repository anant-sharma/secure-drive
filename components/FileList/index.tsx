import styles from "./index.module.css";

export interface IFile {
	id: string;
	name: string;
	createdAt: string;
	size: string;
	updatedAt: string;
	connectedServices: string[];
}

export function FileList(props) {
	return (
		<>
			<table className={styles.table}>
				<thead>
					<tr className={styles.header}>
						<th className={styles.nameHeader}>Name</th>
						<th>Date Created</th>
						<th>Size</th>
						<th>Last Modified</th>
						<th>Services</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className={styles.tableBodyCell}>Task Report</td>
						<td className={styles.tableBodyCell}>2020-06-04</td>
						<td className={styles.tableBodyCell}>40 MB</td>
						<td className={styles.tableBodyCell}>2020-06-04</td>
						<td className={styles.tableBodyCell}>Google, OneDrive</td>
					</tr>
					<tr>
						<td className={styles.tableBodyCell}>Task Report</td>
						<td className={styles.tableBodyCell}>2020-06-04</td>
						<td className={styles.tableBodyCell}>40 MB</td>
						<td className={styles.tableBodyCell}>2020-06-04</td>
						<td className={styles.tableBodyCell}>Google, OneDrive</td>
					</tr>
					<tr>
						<td className={styles.tableBodyCell}>Task Report</td>
						<td className={styles.tableBodyCell}>2020-06-04</td>
						<td className={styles.tableBodyCell}>40 MB</td>
						<td className={styles.tableBodyCell}>2020-06-04</td>
						<td className={styles.tableBodyCell}>Google, OneDrive</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
