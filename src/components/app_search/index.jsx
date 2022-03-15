import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import '../app_search/style.css'

class AppSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:""
    }
  }

  onHandleSearchInput = (e) =>{
    const inputText = (e.target.value)
    this.setState({ text:inputText })
    this.props.onUpdateSearch(inputText)
  }

  render(){
    console.log(this.state.text)

    return (
      <div className='search'>
          <input 
          type="text"
          className='search_input'
          placeholder='işçi axtarın'
          value={this.state.text}
          onChange = {this.onHandleSearchInput}
          />
          <div className="btn-group">
               <button type="button" className="btn btn-light">Bütün işçilər</button>
               <button type="button" className="btn btn-outline-light">Bonus alan</button>
               <button type="button" className="btn btn-outline-light">Maaş 1500 AZN -dan yüksək</button>
          </div>
      </div>
    )
  }

}

export default AppSearch