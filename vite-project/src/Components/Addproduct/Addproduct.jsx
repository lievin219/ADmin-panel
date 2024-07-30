import React from 'react'
import './Addproduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'

const Addproduct = () => {
  return (
    <div className='addproduct'>
         <div className='addproduct-itemfield'>
            <p>
                Product Title
            </p>
            <input type="text"   name='name' placeholder='Type Here'/>


         </div>
         <div className='addproduct-price'>
            <div className='addproduct-itemfield'>
                <p>Price</p>
                <input type="text" name='old_rice' placeholder='Type Here'/>

            </div>
            <div className='addproduct-itemfield'>
                <p>Offer Price</p>
                <input type="text" name='new_rice' placeholder='Type Here'/>

            </div>

         </div>
         <div className="addproduct-itemmfield">
            <p>Product Category</p>
            <select name="category"  className='addproduct-selector'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kids</option>
            </select>
         </div>
         <div className='addproduct-itemfield'>
            <label htmlFor="file-input">
                <img src={upload_area} alt="" className='addproduct-thumnail-img'/>
               
            </label>
            <input type="file" id='file-input' name='image' hidden/>

          
         </div>
         <button className='addproduct-btn'>ADD</button>       
      
    </div>
  )
}

export default Addproduct
