import React, {Component} from 'react'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'
import axios from 'axios'

class Home extends Component{
	constructor(){
		super()

		this.state = {
			course_modules: [],
			main_courses: []
		}

	}
	

	componentDidMount(){
		axios.get('/api/courses.json')
		.then(data =>{
			let results = []
			data.data.map( (data) => {
				// debugger
				results.push({id: data.id, title: data.title, description: data.description, active: false})
				this.setState({main_courses: results})
			})
		})
		.catch(data =>{
			debugger
		})

		axios.get('/api/1/episodes.json')
		.then(data =>{
			let results = []
			data.data.map( (data) => {
				// debugger
				results.push({id: data.id, title: data.title, description: data.description, premium: data.premium, thumbnail: data.thumbnail, url: data.url, author: data.author, created_at: data.created_at, updated_at: data.updated_at, active: false})
				this.setState({course_modules: results})
			})
		})
		.catch(data =>{
			debugger
		})
	}
	handleVideoChange(item, event){
		event.preventDefault()
		// debugger
		let course_modules = [...this.state.course_modules]
		// debugger
		course_modules.map( data => {
			data.active = false
		})
		item.active = !item.active
		// course_modules[item.id - 1] = item
		this.setState({course_modules})	
	}
	
	handleScreenSaver(){
		this.setState({screensaverVisible: !this.state.screensaverVisible})
	}

	handleMenuItem(course, event){
		event.preventDefault()
		let course_modules = []
		axios.get('/api/'+course.id+'/episodes.json')
		.then(data =>{
			let results = []
			data.data.map( (data) => {
				// debugger
				results.push({id: data.id, title: data.title, description: data.description, premium: data.premium, thumbnail: data.thumbnail, url: data.url, author: data.author, created_at: data.created_at, updated_at: data.updated_at, active: false})
				this.setState({course_modules: results})
			})
		})
		.catch(data =>{
			debugger
		})
	}

	render(){
		return(
			<div> 
				<Jumbotron/>
				<Table handleVideoChange={this.handleVideoChange.bind(this)} handleMenuItem={this.handleMenuItem.bind(this)} course_modules = {this.state.course_modules} main_courses = {this.state.main_courses}/>
			</div>
			)
	}
}



export default Home