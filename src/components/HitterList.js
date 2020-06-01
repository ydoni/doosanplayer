import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HitterListInfo from './HitterListInfo.js';
import axios from 'axios';


class HitterList extends Component {

	constructor(props) {
		super(props);
		this.state = {isToggleOn : true};
		this.sortOrder = this.sortOrder.bind(this);
	}

	//성적 높은 순 정렬
	sortOrder = (e) => {
		// e.preventDefault();
		const { data, onSortOrder } = this.props;	    
	    const listsort = data.sort(
	    	(a,b) => (a.era - b.era)
	    );
	    console.log("sort후데이터",listsort);
	    onSortOrder(listsort);
	    this.setState(state => ({
	      	isToggleOn: !state.isToggleOn 
	      	// listsort : listsort.sort((a,b) => (a.id - b.id))
	  	}));
	}

	render(){		

		const {data, onRemove, onModify, onSortOrder} = this.props;

		const list = data.map (
			listh => (
				<HitterListInfo
					key={listh.id}
					listh={listh}
					onRemove={onRemove}
					onModify={onModify}
				/>				
			)
		);

		console.log("list.js 데이터",data);

		

		//<button onClick = {this.sortOrder}>
		//		    	{this.state.isToggleOn ? '성적순' : '등록순'} 정렬
		//		    </button>
		

		return(
			
				<div>
				        
					<div className="playerBigbox">
						{list}
					</div>
				</div>

		);
	}
}

export default HitterList;