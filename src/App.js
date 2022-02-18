import './App.css';
import AppForm from './components/app_form';
import AppInfo from './components/app_info';
import AppSearch from './components/app_search';
import EmployeeList from './components/employee_list';


function App() {
  return (
    <div className="App">
    <AppInfo/>
    <AppForm/>
    <AppSearch/>
    <EmployeeList/>
    </div>
  );
}

export default App;
