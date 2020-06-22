import React, {Component} from 'react'
import Item from './Item'
import ActiveItem from './ActiveItem'
import Sidebar from './Sidebar'

import Subscribe from './Subscribe'
import styled from 'styled-components'
import '../../css/style.css';
import Screensaver from './Screensaver'

const Section = styled.section`
	background-color: #d74234;
	// min-height: 558px;
	// padding: 100px 0;
	color: #fff;
`

class Table extends Component{
	constructor(props){
		super(props)
	}

	state = {
		screensaverVisible: false
	}

	enableScreensaver = () => {
		// this.setState({screensaverVisible: true})
		// return true;
		this.myInterval = setInterval(() => {
			this.setState({screensaverVisible: true});
			
		}, 5000);
		return true;
	}
	
	
	render(){
		// const handleScreenSaver = () => {
		// 		console.log("handlescreen get called...");
		// 		this.setState({screensaverVisible: !this.state.screensaverVisible})
			
		// }

		const items = this.props.course_modules.map( (data) => {
			let handleVideoChange = this.props.handleVideoChange.bind(this, data)
			// let handleScreenSaver = this.setState({screensaverVisible: true})
			// 
			return (
				data.active ?
				(<ActiveItem enableScreensaver={this.enableScreensaver.bind(this)} key={data.id} title={data.title} description={data.description} url={data.url} thumbnail={data.thumbnail} author={data.author}/>) :
				<Item handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description} thumbnail={data.thumbnail}/>
				
			)
		})

		const sidebar = this.props.main_courses.map( (data) => {
			let handleMenuItem = this.props.handleMenuItem.bind(this, data)

			return (
				// <ModalApp key={data.id} />
				<Sidebar handleMenuItem={handleMenuItem} key={data.id} title={data.title}/>
				// <Sidenavi handleMenuItem={handleMenuItem} key={data.id} title={data.title}/>
	
			)
		})

		const screensaver = this.state.screensaverVisible? (<Screensaver/>) : (console.log("screen saver", this.state.screensaverVisible))

		return(
			<div className="pt-5 pb-5" id="mainPart">
				<div className="full-width">
					<div className="text-center">
						<h2 className="pt-4 pb-4"> Deep Breath In - Long Breath Out</h2>
						
					</div>
					<div className="row p-12">
						<div className="col-4 col-sm-4">
							<div className="btn-group">
								<Section>
								{sidebar}
								</Section>
							</div>
							<div className='mt-4 ml-3'>
								<Subscribe/>
							</div>
						
						</div>
						<div className="mr-6 col-md-8 col-sm-8">	
						{items}
						</div>
					</div>
					
				</div>
				{screensaver}
			</div>
		)
	}
}

export default Table