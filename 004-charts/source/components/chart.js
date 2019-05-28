import React from 'react';
import ChartJS from 'Chart.js';

ChartJS.defaults.global.defaultFontSize = 20;


export default class Chart extends React.Component{
	componentDidMount(){
		this.createChart();
	}
	componentWillUnmount(){
		this.killChart();
	}

	componentDidUpdate(prevProps, prevState){
		this.killChart();
		this.createChart();
	}

	createChart(){
		const ctx = this.refs['chart'].getContext('2d');
		let {type, data, options} = this.props;

		this.chart = new ChartJS(ctx,{
			type:type,
			data:data,
			options:options
		});
	}

	killChart(){
		this.chart && this.chart.destroy();
	}


	render(){
		let canvasProps = {width:this.props.width , height:this.props.height};

		return <canvas ref="chart" {...canvasProps} ></canvas>;
	}
}