import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import rawData from '../data/data.csv';
import {a2c} from './utils/a2chart';


const data = {
	type:"bar", //bar, horizontalBar,line
	data:a2c(rawData),
	options:{
		responsive: false,
		title:{
			display:true,
			text:"People that are in Charts!"
		},
		hover:{
			mode:'label'
		},
		tooltips:{
			mode:'label' //single
		}
	}
};


ReactDOM.render(<Chart width="800" height="150" {...data} />, document.getElementById("react"));






