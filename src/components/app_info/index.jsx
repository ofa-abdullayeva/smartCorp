import React from 'react'
import '../app_info/index.css'

const AppInfo = ({employeesNumber,increasedEmployee}) => {
  return (
    <div className='app_info'>
        <h1><span className='smart'>SMARTCORP</span> şirkətində işçilərin uçotu</h1>
        <h2>İşçilərin ümumi sayı {employeesNumber}</h2>
        <h2>Mükafat veriləcək işçilərin sayı: {increasedEmployee}</h2>
    </div>
  )
}

export default AppInfo;