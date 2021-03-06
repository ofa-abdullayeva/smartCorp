import { Component } from 'react/cjs/react.production.min';
import './App.css';
import AddEmployeeForm from './components/addEmployeeForm';
import AppInfo from './components/app_info';
import AppSearch from './components/app_search';
import { data } from './components/data/data';
import EmployeeList from './components/employee_list';


class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      data: data,
      searchValue: "",
      filter: "bonus"
    }
    this.maxId = 10
  }
  
  addItem = (name, salary ) =>{
    const newEmployee = {
      name :name,
      salary:salary,
      like:false,
      increase: false,
      id: ++this.maxId
    }
    this.setState(state=>({data: [...this.state.data, newEmployee]}))
  }

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


  }

  onToggleLike = (id) => {
    this.setState(({data})=>({
      data: data.map(item =>{
        if (item.id === id) {
          return{...item, like: !item.like}
        }
        return item;
      })
    }))


  }

  deleteItem = (id) =>{
    this.setState(({data}) => ({
      data:data.filter(item =>item.id !== id)
    }))
  }

  searchEmployee = (arr,text) =>{
    if(text.length === 0) return arr;
    return arr.filter(item => {
      return item.name.toLowerCase().indexOf(text) > -1
    })

  }
  onUpdateSearch = (text) => {
    this.setState({
      searchValue : text
    })
  }

  filterEmployee = (arr,filter) =>{
    switch (filter) {
      case "bonus" :
        return arr.filter(item=>item.like) ;
      case "moreThan1500":
        return arr.filter(item => item.salary >= 1500) ;
      default :
        return arr;
    
    }

  }

  onFilterSelect = (filter =>{
    this.setState({ filter: filter })
  })
  
 
  render(){
    const { data, searchValue,filter } = this.state
    const employeesNumber = data.length
    const increasedEmployee = data.filter(item=>item.increase).length;
    const visibleData = this.searchEmployee(data,searchValue);
    const filteredData = this.filterEmployee(visibleData,filter);
    //  bu setrin izahin sorusmaq
    
    return (
      <div className="App">
      <AppInfo employeesNumber={employeesNumber} increasedEmployee={increasedEmployee}/>
      <AddEmployeeForm
      onAdd={this.addItem}/>
      <AppSearch 
      onUpdateSearch={this.onUpdateSearch}
      />
      <EmployeeList 
      data={filteredData}
      onDelete = {this.deleteItem}
      onToggleIncrease = {this.onToggleIncrease}
      onToggleLike = {this.onToggleLike}
      />
      </div>
    );
  }
}

export default App;
