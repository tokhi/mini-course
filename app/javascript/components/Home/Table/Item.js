import React, {Component} from 'react'
import Thumbnail from './Thumbnail'
import styled from 'styled-components'
import Jsonld from './Jsonld'

const Button = styled.a`
	display: inlinie-block;
	text-decoration: none;
	font-weight: bold;
	color: #333 !important;
	cursoer: pointer;
	border-radius: 0;
	background: #fff;
	padding: 10px 20px;
	font-size: 18px;
	// width: 100%;
	box-shadow: 0px 0px 0px 3px #473228,
		-6px 6px #ef5f17,
		-6px 6px 0px 3px #473228;
`

const Item = (props) => {
	return(
		<div className="row pt-4 pb-4">
		  <Jsonld {...props} />
		  <div className="col">
		  	<div>
		  		<div className="card px-5">
		  			<div className="row">
		  				<div className="col-md-4">
		  					<Thumbnail thumbnail={props.thumbnail}/>
		  				</div>
		  				<div className="col-md-8">
		  					<div className="pt-4 pb-4">
		  						<h4>{props.title}</h4>
		  						<p>{props.description}</p>
		  						<div className="cta-wrapper">
		  							<Button onClick={props.handleVideoChange} className="cta-btn">Start</Button>
		  						</div>
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  	</div>
		  </div>
		</div>

	)
}

export default Item