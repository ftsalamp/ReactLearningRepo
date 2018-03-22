import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import StatefulApp from './StatefulApp.jsx';
import ValidatingPropsApp from "./ValidatingPropsApp.jsx";
import ComponentAPIApp from "./ComponentAPIApp.jsx";
import ComponentLifeCycleApp from "./ComponentLifeCycleApp.jsx";
import FormsApp from "./FormsApp.jsx";

// ReactDOM.render(<StatefulApp headerProp = "Header from props"/>, document.getElementById('app'));
// ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<ValidatingPropsApp/>, document.getElementById('app'));
// ReactDOM.render(<ComponentAPIApp/>, document.getElementById('app'));
// ReactDOM.render(<ComponentLifeCycleApp/>, document.getElementById('app'));
//
// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
ReactDOM.render(<FormsApp/>, document.getElementById('app'));