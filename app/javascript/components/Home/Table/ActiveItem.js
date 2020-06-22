import React, {Component, useState} from 'react'
import Audio from './Audio'
// import styled from 'styled-components'

// const Button = styled.a`
// 	display: inlinie-block;
// 	text-decoration: none;
// 	font-weight: bold;
// 	color: #333 !important;
// 	cursoer: pointer;
// 	border-radius: 0;
// 	background: #fff;
// 	padding: 10px 20px;
// 	font-size: 18px;
// 	// width: 100%;
// 	box-shadow: 0px 0px 0px 3px #473228,
// 		-6px 6px #ef5f17,
// 		-6px 6px 0px 3px #473228;
// `

const ActiveItem = (props) => {
	const [enableScreensaver] = useState(props.enableScreensaver);
	return(
		<div className="row pt-4 pb-4">
		  <div className="col-md-10 offset-md-1">
		  	<div>
		  		<div className="card px-5">
		  			<div className="row">
		  				<div className="col-md-10 offset-md-1">
						  {enableScreensaver && (
		  					<div className="pt-4 pb-4">
		  						<h4>{props.title}</h4>
								<p>by: {props.author}</p>
		  						<p>{props.description}</p>
								<Audio key={props.id} url={props.url}/>
		  						{/* <div className="cta-wrapper">
		  							<Button className="cta-btn">Start</Button>
		  						</div> */}
		  					</div>
							  )}
                        </div>
		  			</div>
		  		</div>
		  	</div>
		  </div>
		</div>

	)
}

export default ActiveItem