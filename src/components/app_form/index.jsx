import React from 'react'
import '../app_form/style.css'
import Button from '../button'

const AppForm = () => {
  return (
    <div className='appform'>
        <h3>Yeni işçi əlavə edin </h3>
        <form >
          <input 
            type="text" 
            className='mr-3'
            placeholder='işçinin adı'
          />
          <input 
            type="number"
            placeholder='Maaş Azn-lə' 
          />
          {/* <button 
            type='submit'
            className='btn btn-outline-info ml-3'
          >əlavə et</button> */}
          <Button classNames='btn btn-outline-info ml-3' value='Əlavə et'/>
        </form>
     
    </div>
  )
}

export default AppForm