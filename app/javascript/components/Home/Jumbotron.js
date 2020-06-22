import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'
import '../css/style.css';

const Section = styled.section`
	background-color: #d74234;
	min-height: 558px;
	padding: 100px 0;
	color: #fff;
	background-image: url("/meditation.jpg");
	background-size: cover;
`


const Header = styled.h1`
	color: #fff;
	font-weight: 700;
	font-size: 40px;
	line-height: 52px;
`

const SubHead = styled.p`
	font-size: 18px;
	font-weight: 500;
`

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


const Jumbotron = () => {
	return (
		<Section className="home-section--1">
			<div className="container">
			  <div className="row">
			    <div className="col-sm-12 col-md-5">
			      <div className="pt-4 mt-4">
			      	<Header> Find Your Peace </Header>
			      	<SubHead>Sleep more. Stress less. Live better.</SubHead>
			      	<div className="cta-wrapper">
			      		<Link className="btn fancy-btn" to="mainPart" smooth={true} duration={1000}>Get Started</Link>
			      	</div>
			      </div>
			    </div>
			    <div className="col-sm-12 col-md-7">
			      <div className="pt-4 mt-4 text-center">
					  {/* <img with="500" height="315" src="/meditation.jpg" /> */}
			      	 {/* <iframe width="500" height="315" src="https://www.youtube.com/embed/dpYPLUO3QcI"></iframe>  */}
			      </div>
			    </div>
			  </div>
			</div>
		</Section>
	)
}

export default Jumbotron