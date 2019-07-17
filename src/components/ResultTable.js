import React, { Component } from 'react';
//import { Grid } from 'semantic-ui-react'


/* 
 */
export default class ResultTable extends Component {

constructor(props) {
	super(props);
	alert("RESULT TABLE PROPS="+JSON.stringify(props));
}

render() {

	return (<div> 
			Results!!<br/>
			{ this.table_helper(this.props.results) 
			}
		</div>);

}

table_helper(dim2arr) {
 return (
	<table>
	{dim2arr.map((rowObj) => {return this.row_helper(rowObj)})}
	</table>
);
}

row_helper(rowObj) {

	if (!rowObj)
		return ""; //(JSON.stringify(rowObj));

	return ( 
		<tr>
		<td>{rowObj._id ? rowObj._id: "!!"}</td>
		<td>{rowObj.name ? rowObj.name: "!!"}</td>
		<td>{rowObj.gender ? rowObj.gender : "!!"}</td>
		</tr>
	);
}

}

