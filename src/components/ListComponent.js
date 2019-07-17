import React, { Component } from 'react';
import ResultTable from './ResultTable';

/* 
 */
export default class ListComponent extends Component {

constructor(props) {
	super(props);
	alert("LISTCOMPONENT: INPUT="+JSON.stringify(props));
}

render() {

	return <div> 
		<ResultTable results={this.props.results}/>
		</div>

}

}
