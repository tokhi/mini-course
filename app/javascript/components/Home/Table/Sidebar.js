import React, {Component} from 'react'
// import Thumbnail from './Thumbnail'
import styled from 'styled-components'

// const Section = styled.section`
// 	background-color: #d74234;
// 	// min-height: 558px;
// 	// padding: 100px 0;
// 	color: #fff;
// `

const Button = styled.a`
	display: inlinie-block;
	text-decoration: none;
	font-weight: bold;
	color: #333 !important;
	// cursoer: pointer;
	border-radius: 0;
	background: #fff;
	padding: 10px 20px;
	font-size: 18px;
	width: 95%;
	word-wrap: break-word;
	box-shadow: 0px 0px 0px 3px #473228,
		-6px 6px #ef5f17,
		-6px 6px 0px 3px #473228;
`

const Sidebar = (props) => {
	return(
        
        <div className="pt-3 pb-3 ml-4">
            <div className="cta-wrapper">
                <Button onClick={props.handleMenuItem} className="btn cta-btn">{props.title}</Button>
            </div>
        </div>

        
		

	)
}

export default Sidebar