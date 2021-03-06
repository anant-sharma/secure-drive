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
			backgroundColor: "#5500a9",
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
				fontSize: "12px",
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
					outerRadius: "115%",
					innerRadius: "95%",
					backgroundColor: "#430098",
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
						color: "#00c4da",
						radius: "115%",
						innerRadius: "93%",
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
