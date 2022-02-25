import React  from 'react';

import '../employee_list_item/style.css';

class EmployeeListItem extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        increase :false,
        like :false 
      }
    }
    //------ Arrow function --------//
    // onIncrease = () => {
    //   this.setState(prevState =>{
    //     return{increase : !this.state.increase}
    //   })
    // }
    //------  onIncrease  Arrow function short form--------//
    onIncrease = () => {

      this.setState(({increase}) =>({increase : !increase}))

    }

    // onLike = () =>{
    //   this.setState(prevState =>{
    //     return{like : !this.state.like}
    //   })
    // }

    onLike = () =>{
      this.setState(({like }) => ({like : !like}))
      
    }

  


  render() {
    //----props----//
    const { name, salary, onDelete } = this.props;
    
    //----state----//
    const {increase , like }= this.state

    let classNames = 'list-group-item d-flex justify-content-between';

    if (increase) {
      classNames += ' increase'
    }

    if (like) {
      classNames +=' like'
    }

    return (
      <li className={classNames}>
        <span 
        className='list-group-item-label'
        onClick={this.onLike}
        >{name}</span>
        <input type="text"
          className='list-group-item-input'
          defaultValue={`${salary} AZN `} />
        <div className='d-flex justify-content-center align-item-center'>
          <button 
          className='btn-bonus btn-sm'
          onClick={this.onIncrease}>
            <i className="fa-solid fa-coins"></i>
          </button>
          <button
           className='btn-trash btn-sm'
           onClick = {onDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>

          <i className='fa-solid fa-star '></i>
        </div>

      </li>
    )
  }

}

export default EmployeeListItem;