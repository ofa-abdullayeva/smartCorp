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
  deleteItem = (id) =>{
    console.log(id)
  }

  render(){
    return (
      <div className="App">
      <AppInfo/>
      <AppForm/>
      <AppSearch/>
      <EmployeeList 
      data={this.state.data}
      onDelete = {this.deleteItem}/>
      </div>
    );
  }
}

export default App;
