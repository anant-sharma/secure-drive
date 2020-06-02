import Grid from "@material-ui/core/Grid";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more.js";
import SolidGauge from "highcharts/modules/solid-gauge.js";
import styles from "./index.module.css";

interface IOpts extends Highcharts.Options {}

export function StorageChart() {
	if (typeof Highcharts === "object") {
		HighchartsMore(Highcharts);
		SolidGauge(Highcharts);
	}

	const options: any = {
		chart: {
			type: "solidgauge",
			height: "60%",
			backgroundColor: "#4631a7",
			borderRadius: "40px",
		},

		credits: {
			enabled: false,
		},

		title: {
			text: "",
		},

		tooltip: {
			enabled: true,
			borderWidth: 0,
			backgroundColor: "none",
			shadow: false,
			style: {
				fontSize: "16px",
			},
			valueSuffix: "%",
			pointFormat: '<span style="font-size:2em; color: {point.color}; font-weight: 400">{point.y}</span>',
			positioner: function (labelWidth) {
				return {
					x: (this.chart.chartWidth - labelWidth) / 2,
					y: this.chart.plotHeight / 2,
				};
			},
		},

		pane: {
			startAngle: 0,
			endAngle: 360,
			background: [
				{
					// Track for Move
					outerRadius: "100%",
					innerRadius: "80%",
					backgroundColor: "#352A96",
					borderWidth: 0,
				},
			],
		},

		yAxis: {
			min: 0,
			max: 100,
			lineWidth: 0,
			tickPositions: [],
		},

		plotOptions: {
			solidgauge: {
				dataLabels: {
					enabled: false,
				},
				linecap: "round",
				stickyTracking: false,
				rounded: true,
			},
		},

		series: [
			{
				name: "Used",
				data: [
					{
						color: "#58C2D7",
						radius: "100%",
						innerRadius: "78%",
						y: 62,
					},
				],
			},
		],

		legend: {
			enabled: true,
		},
	};

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.title}>Cloud Storage</div>
				<HighchartsReact highcharts={Highcharts} options={options} />

				<Grid container spacing={0} className={styles.legendContainer}>
					<Grid item xs={6}>
						<Legend text={"Used"} color={"#58C2D7"} />
					</Grid>
					<Grid item xs={6}>
						<Legend text={"Left"} color={"#352A96"} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export function Legend(props) {
	const { text, color } = props;

	return (
		<div className={styles.legend}>
			<div className={styles.ball} style={{ backgroundColor: color }}></div>
			<span className={styles.legendTitle}>{text}</span>
		</div>
	);
}
