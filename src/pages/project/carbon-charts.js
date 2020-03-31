import React, { Component } from "react"
import { StackedBarChart } from "@carbon/charts-react"
import "@carbon/charts/styles.css";

import ProjectPage from "./../../components/projectPage"
import Label from "./../../components/label"

// styles
import "./../../styles/carbon-charts-page.scss"

// technologies
import d3 from "./../../assets/project-assets/technologies/d3.png";
import typescript from "./../../assets/project-assets/technologies/typescript.png";

// icons
import role from "./../../assets/project-assets/technologies/work.png";
import impact from "./../../assets/project-assets/technologies/impact.png";

// services
import * as services from "./../../services/responsive-service"


const stackedBarOptions = {
	title: "Weekly time spent in quarantine",
	axes: {
		left: {
			scaleType: "labels",
			primary: true
		},
		bottom: {
			stacked: true,
			secondary: true,
			title: "percentage (%) of day"
		}
	},
	// height: "300px",
	width: "100%"
};


// Stacked bar
const stackedBarData = {
	labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
	datasets: [
		{
			label: "Eating",
			data: [
				65,
				42,
				15,
				10,
				20
			]
		},
		{
			label: "Sleeping",
			data: [
				12,
				21,
				16,
				21,
				28
			]
		},
		{
			label: "Self Improvement",
			data: [
				15,
				23,
				35,
				19,
				40
			]
		},
		{
			label: "Checking the fridge",
			data: [
				8,
				14,
				34,
				50,
				12
			]
		}
	]
};

class CCpage extends React.Component {
	render() {
		const isMobile = services.isMobileSize();
		if (isMobile) {
			// mobile view
			return (
				<ProjectPage title="Carbon Charts" heading="Dataviz framework built with IBM's Carbon Design System">
					<div className="chart-container neo">
						<StackedBarChart
							data={stackedBarData}
							options={stackedBarOptions}
						/>
					</div>
					<div className="text-row neo-inner">
						<div className="title">
							<img src={role} style={{ width: "25px" }}></img>
							<h2>roles</h2>
						</div>
						<div className="content labels">
							<Label name="Front End Developer" color="green" styleName="neo"></Label>
						</div>
					</div>
					<div className="text-column neo-inner">
						<div className="title">
							<img src={impact} style={{ width: "50px" }}></img>
							<h2>impact</h2>
						</div>
						<div className="content">
							<ul>
								<li>Decreasing the time to delivery for high quality data visualizations within IBM's product teams.</li>
								<hr></hr>
								<li>Contributing a framework agnostic library to opensource will increase brand awareness for IBM as a leader in data visualizations</li>
							</ul>
						</div>
					</div>
					<div className="text-column neo-inner">
						<div className="title">
							{/* <img src={impact} style={{ width: "50px" }}></img> */}
							<h2>technologies</h2>
						</div>
						<div className="image-row">
							<div className="half neo">
								<img src={d3} />
							</div>
							<div className="half neo">
								<img src={typescript}></img>
							</div>
						</div>
					</div>
				</ProjectPage>
			);
		} else {
			// desktop view
			return (
				<ProjectPage title="Carbon Charts" heading="Dataviz framework built with IBM's Carbon Design System">
					<div className="dashboard-row">
						<div className="col-1">
							<div className="chart-container neo">
								<StackedBarChart
									data={stackedBarData}
									options={stackedBarOptions}
								/>
							</div>
						</div>
						<div className="col-2">
							{/* roles section */}
							<div className="text-row neo-inner">
								<div className="title">
									<img src={role} style={{ width: "25px" }}></img>
									<h2>roles</h2>
								</div>
								<div className="content labels">
									<Label name="Front End Developer" color="green" styleName="neo"></Label>
								</div>
							</div>
							{/* technologies section */}
							<div className="text-column neo-inner" style={{marginBottom: 0}}>
								<div className="title">
									<h2>technologies</h2>
								</div>
								<div className="image-row">
									<div className="half neo">
										<img src={d3} />
									</div>
									<div className="half neo">
										<img src={typescript}></img>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-full">
						<div className="text-column neo-inner">
							<div className="title">
								<img src={impact} style={{ width: "50px" }}></img>
								<h2>impact</h2>
							</div>
							<div className="content">
								<ul>
									<li>Decreasing the time to delivery for high quality data visualizations within IBM's product teams.</li>
									<hr></hr>
									<li>Contributing a framework agnostic library to opensource will increase brand awareness for IBM as a leader in data visualizations</li>
								</ul>
							</div>
						</div>
					</div>
				</ProjectPage>
			);
		}
	}
}

export default CCpage
