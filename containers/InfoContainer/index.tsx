import { Drive, IDrive } from "../../components/Drive";
import { StorageChart } from "../../components/StorageChart";

export function InfoContainer() {
	const drives: IDrive[] = [
		{
			id: "gdrive1",
			icon: "/images/gdrive-icon.png",
			name: "Google Drive",
			capacity: {
				used: "240GB",
				total: "500GB",
			},
		},
		{
			id: "dropbox1",
			icon: "/images/dropbox-icon.png",
			name: "Dropbox",
			capacity: {
				used: "240GB",
				total: "500GB",
			},
		},
		{
			id: "onedrive1",
			icon: "/images/onedrive-icon.png",
			name: "OneDrive",
			capacity: {
				used: "240GB",
				total: "500GB",
			},
		},
	];

	return (
		<>
			<StorageChart />
			{drives.map((drive) => (
				<Drive {...drive} key={drive.id} />
			))}
		</>
	);
}
