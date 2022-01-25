import React, { Component } from 'react';

export default class Textarea extends Component {
    
    state ={
        value: "textarea"
    };
    handlechange =e=> {
        this.setState({value: e.target.value})
    }
  render() {
    return <div> 
        <textarea className="form-control" value={this.state.value} onChange={this.handlechange} rows={8} cols={100}/>
  

</div>
  }
}
