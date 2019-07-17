import React, { Component } from 'react';

/* 
 * User search input.
 */
export default class SearchInput extends Component {

constructor(props) {
	super(props);
	this.searchBtnHandler = this.searchBtnHandler.bind(this);
	this.searchTxtHandler = this.searchTxtHandler.bind(this);
	this.state = { mySrchTxt : "" };
}

searchTxtHandler(event) {
	this.setState({mySrchTxt : event.target.value})
}

searchBtnHandler() {
	alert("Search Text = "+this.state.mySrchTxt);
	this.props.searchCallback(this.state.mySrchTxt);
}

render() {

	return ( <div> 
			<input onChange={this.searchTxtHandler}/>
			<button onClick={this.searchBtnHandler}>
				Search Now!
			</button>
		 </div>
               );

}

}
