import React, { Component } from 'react';

/* 
 */
export default class ResultTable extends Component {

constructor(props) {
	super(props);
	alert("RESULT TABLE PROPS="+JSON.stringify(props));
}

render() {

	return <div> 
			Results!!<br/>
			{ JSON.stringify(this.props.results) }
		</div>

}

}

