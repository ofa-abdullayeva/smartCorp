import { Component } from 'react/cjs/react.production.min';
import './App.css';
import AppForm from './components/app_form';
import AppInfo from './components/app_info';
import AppSearch from './components/app_search';
import { data } from './components/data/data';
import EmployeeList from './components/employee_list';


class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      data: data
    }

    
  }
  
   //------ Arrow function --------//
    // onIncrease = () => {
    //   this.setState(prevState =>{
    //     return{increase : !this.state.increase}
    //   })
    // }
    //------  onIncrease  Arrow function short form--------//
    onToggleIncrease = (id) => {
      this.setState(({data})=>({
        data: data.map(item =>{
          if (item.id === id) {
            return{...item, increase: !item.increase}
          }
          return item;
        })
      }))
      // console.log(id)
      // this.setState(({increase}) =>({increase : !increase}))

    }

    // onLike = () =>{
    //   this.setState(prevState =>{
    //     return{like : !this.state.like}
    //   })
    // }

    // onToggleLike = (id) =>{
    //   console.log(id)
    //   this.setState(({data }) => ({like : !like}))
      
    // }

  
  // deleteItem = (id) =>{
  //   this.setState(prevstate => ({
  //     data:this.state.data.filter(item =>item.id !== id)
  //   }))
  // }

  onToggleLike = (id) => {
    this.setState(({data})=>({
      data: data.map(item =>{
        if (item.id === id) {
          return{...item, like: !item.like}
        }
        return item;
      })
    }))
    // console.log(id)
    // this.setState(({increase}) =>({increase : !increase}))

  }

  deleteItem = (id) =>{
    this.setState(({data}) => ({
      data:data.filter(item =>item.id !== id)
    }))
  }
  
 
  render(){
    const {data} = this.state
    const employeesNumber = data.length
    const increasedEmployee = data.filter(item=>item.increase).length;
    console.log(increasedEmployee)
    return (
      <div className="App">
      <AppInfo employeesNumber={employeesNumber} increasedEmployee={increasedEmployee}/>
      <AppForm/>
      <AppSearch/>
      <EmployeeList 
      data={this.state.data}
      onDelete = {this.deleteItem}
      onToggleIncrease = {this.onToggleIncrease}
      onToggleLike = {this.onToggleLike}
      />
      </div>
    );
  }
}

export default App;
