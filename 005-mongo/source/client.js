import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import $ from 'jquery';

$.getJSON('http://localhost:3001/chart.json', function(json){
	const data = {
		type:"radar", //bar, horizontalBar,line
		data:json,
		options:null
	};

	ReactDOM.render(<Chart width="800" height="150" {...data} />, document.getElementById("react"));

});












