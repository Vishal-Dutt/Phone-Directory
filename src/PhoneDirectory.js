import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class PhoneDirectory extends Component{

	constructor() {
		super();
		this.state = {
			subscribersList: [{
				id: 1,
				name: 'vishal',
				phone: '9999999999'
			}]
		}
	}

	deleteSubscriberHandler = (subscriberId) => {
		let subscribersList = this.state.subscribersList;
		let subscriberIndex = 0;
		subscribersList.forEach(function (subscriber, index){
			if(subscriber.id == subscriberId){
				subscriberIndex = index;
			}
		}, this);
		let newSubscirbers = subscribersList;
		newSubscirbers.splice(subscriberIndex, 1);
		this.setState({subscribers: newSubscirbers});
	} 

	addSubscriberHandler = (newSubscirber) => {
		let subscribersList = this.state.subscribersList;
		if(subscribersList.length > 0) {
			newSubscirber.id = subscribersList[subscribersList.length-1].id +1;
		}
		else {
			newSubscirber.id = 1
		}

		subscribersList.push(newSubscirber);
		this.setState({subscribersList : subscribersList});
		// console.log(this.state.subscribersList);
	}

	render() {
		return(
			// <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
			// <App subscribersList={this.state.subscribersList}/>
			<Router>
				<div className="main-container">
					<Route exact path='/' render={(props) => <App {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
					<Route exact path='/add' render={({history}, props) => <AddSubscriber history={history}{...props} addSubscriberHandler={this.addSubscriberHandler} />} />
				</div>
			</Router>
		)
	}
}

export default PhoneDirectory; 