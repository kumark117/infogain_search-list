import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
  dataField: '_id',
  text: 'ID'
}, {
  dataField: 'name',
  text: 'Name'
}, {
  dataField: 'gender',
  text: 'Gender'
}];

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
			{ //this.table_helper(this.props.results) 
  			<BootstrapTable keyField='_id' data={ this.props.results} columns={ columns } bordered={true} />
			}
		</div>);

}

/********************
table_helper(dim2arr) {
 return (
	<Table responsive={true} bordered={true}>
	{dim2arr.map((rowObj) => {return this.row_helper(rowObj)})}
	</Table>
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
*******************/
}

