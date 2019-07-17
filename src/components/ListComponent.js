import React, { Component } from 'react';
import ResultTable from './ResultTable';

/* 
 */
export default class ListComponent extends Component {

constructor(props) {
	super(props);
	alert("LISTCOMPONENT: INPUT="+JSON.stringify(props));
	this.state = { results: this.props.results};
}

componentDidMount() {
	//this.setState();

}

render() {

	return <div> 
		<ResultTable results={this.state.results}/>
		</div>

}

}

