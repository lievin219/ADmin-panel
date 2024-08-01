import React, { useState } from 'react'
import './Addproduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'

const Addproduct = () => {
    // this hook  below is used in adding a picture once a an admin uploaded a picture else an upload picture will remain the one which is static
     const [image,setImage]=useState(false)
      
     const imgaeHandler=(e)=>{
     setImage(e.target.files[0])
         
      }
      //this is a hook used to add product details with in database
       const [productDetails,setproductDetails]=useState({
         name:"",
         image:"",
         category:"",
         new_price:"",
         old_price:""
       })
        const producthandler=(e)=>{
             setproductDetails({...productDetails,[e.target.name]:e.target.value})
             
        }
  return (
    <div className='addproduct'>
         <div className='addproduct-itemfield'>
            <p>
                Product Title
            </p>
            <input value={productDetails} onChange={producthandler} type="text"   name='name' placeholder='Type Here'/>


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
                <img src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumnail-img'/>
               
            </label>
            <input onChange={imgaeHandler} type="file" id='file-input' name='image' hidden/>

          
         </div>
         <button className='addproduct-btn'>ADD</button>       
      
    </div>
  )
}

export default Addproduct
