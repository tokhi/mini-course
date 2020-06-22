import React from 'react'

// a dumb component
const Thumbnail = (props) => {
	return(
		<div className="pt-4 pb-4">
			<img width='100%' src={props.thumbnail} />
			{/* <iframe width="100%" height="100%" src={props.url}></iframe> */}
		</div>
	)
}

export default Thumbnail