import React, { Component } from 'react';
import SearchInput from './SearchInput';
import ListComponent from './ListComponent';

import data_all from '../data/search-list.json'

/* 
 * User search input.
 */
export default class Search extends Component {

constructor() {
	super();
	this.searchCallback = this.searchCallback.bind(this);
	this.state = { myResults : []};

	this.state.data_all = data_all;
	//alert("Search: data_all = " + JSON.stringify(data_all));
}


searchCallback(newInputTxt) {
	//alert("in Search : searchCallback text is "+newInputTxt);

	let results = this.doSearch(newInputTxt);
	this.setState({myResults: results});
}

render() {

	return (<div> <SearchInput searchCallback={this.searchCallback}/>
		Results for Input = {this.state.myText}
		<ListComponent results={this.state.myResults}/>
		</div>);

}

doSearch(newInputTxt) {

let results = [];
	//alert("Search for "+newInputTxt+": data_all = " + JSON.stringify(data_all));
	for (let item of data_all) {
		if (item._id.search(newInputTxt) != -1 ||
			item.name.search(newInputTxt) != -1 ||
			item.gender.search(newInputTxt) != -1) {
		  results.push(item);
		  alert("MATCHED: "+JSON.stringify(item));
		}
		//alert("DID NOT MATCH: "+JSON.stringify(item));
	}

	return results;
}

}
