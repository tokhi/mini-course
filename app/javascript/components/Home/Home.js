import React, {Component} from 'react'
import Jumbotron from './Jumbotron'
class Home extends Component{
	constructor(){
		super()

		this.state = {
			course_modules: [
				{id: 1, title: '1. Getting Started with Rails 6 and react', description: 'lorem test 12e', active: false},
				{id: 2, title: '2. Rails 6 React trouble shooting ', description: 'lorem test 12e', active: false},
				{id: 3, title: '3. Building a simple React app', description: 'lorem test 12e', active: false},
				{id: 4, title: '4. Adding React Router DOM to your App ', description: 'lorem test 12e', active: false}
			]
		}
	}
	render(){
		return(
			<div> 
				<Jumbotron/>
			</div>
			)
	}
}

export default Home