import React, { Component } from 'react';

class Results extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
voteAngularInPercent() {
	if (this.store.getState().angular) {
		return (this.store.getState().angular / (this.store.getState().angular + this.store.getState().react + this.store.getState().vue)*100)
	} else {
		return 0
	}
}

voteReactInPercent() {
	if (this.store.getState().react) {
		return (this.store.getState().react / (this.store.getState().angular + this.store.getState().react + this.store.getState().vue)*100)
	} else {
		return 0
	}
}

voteVueInPercent() {
	if (this.store.getState().vue) {
		return (this.store.getState().vue / (this.store.getState().angular + this.store.getState().react + this.store.getState().vue)*100)
	} else {
		return 0
	}
}

voteAngularInPercentStyle() {
	return {
		width: this.voteAngularInPercent() + '%'
	}
}
voteReactInPercentStyle() {
	return {
		width: this.voteReactInPercent() + '%'
	}
}
voteVueInPercentStyle() {
	return {
		width: this.voteVueInPercent() + '%'
	}
}
	render() {
		return (
				<div>
					<span className="font-weight-bold">Angular : </span>
					<span className="badge badge-primary"> {this.voteAngularInPercent().toFixed(2) + '%'}</span> 
					<div className="progress progress-striped active">
						 <div className="progress-bar progress-bar-danger" style={this.voteAngularInPercentStyle()} >
						</div>
					</div>
					<br />
					<span className="font-weight-bold" >React : </span>
					<span className="badge badge-primary"> {this.voteReactInPercent().toFixed(2) + '%'} </span>
					<div className="progress progress-striped active">
						 <div className="progress-bar progress-bar-info" style={this.voteReactInPercentStyle()}>
						</div>
					</div>
					<br />
					<span className="font-weight-bold" >Vue : </span>
					<span className="badge badge-primary"> {this.voteVueInPercent().toFixed(2) + '%'} </span>
					<div className="progress progress-striped active">
						 <div className="progress-bar progress-bar-warning" style={this.voteVueInPercentStyle()}>
						</div>
					</div>
					<br />

				</div>
			);
	}
}

export default Results;