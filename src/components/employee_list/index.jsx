import React from 'react';
import EmployeeListItem from '../employee_list_item';
import {data} from '../data/data';
import '../employee_list';


console.log(data)
const EmployeeList = () => {
  return (
    <ul className='app-list list-group'>

        {
            data.map(item =>{
                return(
                    <EmployeeListItem name={item.name} salary= {item.salary}/>
                )
            })
        }
      
  
    </ul>
  )
}

export default EmployeeList;