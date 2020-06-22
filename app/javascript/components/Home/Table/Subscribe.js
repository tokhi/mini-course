import React, {Component} from 'react'
import axios from 'axios'

class Subscribe extends Component {
    constructor(props) {
      super(props);
      this.state = {value: '', submit: false};
        
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
	    let response = axios({
            method: 'post',
            url: '/subscribe',
            data: {
                email:  this.state.value
            }
          });
         
        this.setState({value: '', submit: true});
    }
  
    render() {

      return (
       
       this.state.submit?
       <div className="alert alert-warning">
            Thanks You!
        </div>:
        <form onSubmit={this.handleSubmit}>
          <div className="form-now">
              
          </div>
          <div className="form-row">
          <div className="alert alert-info">
            Sign up to get the new daily calm meditations
          </div>
          </div>
          <div className="form-row">
          <div className="input-group mb-3">
              <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit" >Subscribe</button>
              </div>
            </div>
          </div>
        </form>
        
        

      );
    }
  }

  export default Subscribe