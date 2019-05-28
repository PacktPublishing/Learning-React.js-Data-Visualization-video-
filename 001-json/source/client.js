import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import data from "./data.json";

//name={data.name} age={data.age}

ReactDOM.render(<App {...data} />, document.getElementById('react') )