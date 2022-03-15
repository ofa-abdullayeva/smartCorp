import React from 'react'
import { Component } from 'react/cjs/react.development'
import './style.css'
// import Button from '../button'

class AddEmployeeForm extends Component {
  constructor(props){
    super(props);

    this.state ={
      name: '',
      salary: ''

    }
  }
  onValueChange = (event)=>{
    this.setState({
      [event.target.name] : event.target.value
     
    })
  }
  onEmployeeSubmit = (event) => {
    event.preventDefault();
    if (this.state.name || this.state.salary){
      this.props.onAdd(this.state.name,this.state.salary);
      this.setState({
        name:'',
        salary:''
      })

    }
   
  }
  render(){
    return (
      <div className='appform'>
          <h3>Yeni işçi əlavə edin </h3>
          <form 
          onSubmit={this.onEmployeeSubmit}
          >
            <input 
              type="text" 
              className='mr-3'
              placeholder='işçinin adı'
              name="name"
              value = {this.state.name}
              onChange={this.onValueChange}
            />
            <input 
              type="number"
              placeholder='Maaş Azn-lə' 
              name="salary"
              value = {this.state.salary}
              onChange={this.onValueChange}
            />
            <button 
              type='submit'
              className='btn btn-outline-light ml-3'
            >əlavə et</button>
            {/* <Button classNames='btn btn-outline-info ml-3' value='Əlavə et'/> */}
          </form>
       
      </div>
    )
  }
 
}

export default AddEmployeeForm