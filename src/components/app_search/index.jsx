import React from 'react'
import '../app_search/style.css'

const AppSearch = () => {
  return (
    <div className='search'>
        <input 
        type="text"
        className='search_input'
        placeholder='işçi axtarın'/>
        <div className="btn-group">
             <button type="button" className="btn btn-light">Bütün işçilər</button>
             <button type="button" className="btn btn-outline-light">Bonus alan</button>
             <button type="button" className="btn btn-outline-light">Maaş 1500 AZN -dan yüksək</button>
        </div>
    </div>
  )
}

export default AppSearch