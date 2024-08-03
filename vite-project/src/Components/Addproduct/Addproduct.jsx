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
         category:"women",
         new_price:"",
         old_price:""
       })
        const producthandler=(e)=>{
             setproductDetails({...productDetails,[e.target.name]:e.target.value})
             
        }
        const AddProduct=async(e)=>{
            // console.log(productDetails)       
             let responseData;
              let product=productDetails;
              let formData=new FormData()
              formData.append("product",image)
              await fetch('http://localhost:4000/upload',{
                    method:'Post',
                    // headers:{
                    //     Accept:"application/json"
                    // },
                    body:formData,
              }).then((resp)=>
                  resp.json()
              ).then((data)=>{
                 responseData=data

              })
               if(responseData.success){
                 product.image=responseData.image_Url
               
                await fetch('http://localhost:4000/addproduct',{
                    method:"Post",
                    headers:{
                        'Content-Type':'application/json'
                    },
                     body:JSON.stringify(product)
            }).then((response)=>response.json()).then((data)=>{
                     data.message?alert('product added succes'):'product failed to be uploaded'
            })
               }
               else if(responseData.err){
                  alert('data failed to be linked to database')
               }
              
}
  return (
    <div className='addproduct'>
         <div className='addproduct-itemfield'>
            <p>
                Product Title
            </p>
            <input value={productDetails.name} onChange={producthandler} type="text"   name='name' placeholder='Type Here'/>


         </div>
         <div className='addproduct-price'>
            <div className='addproduct-itemfield'>
                <p>Price</p>
                <input value={productDetails.old_price} onChange={producthandler} type="text" name='old_price' placeholder='Type Here'/>

            </div>
            <div className='addproduct-itemfield'>
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={producthandler} type="text" name='new_price' placeholder='Type Here'/>

            </div>

         </div>
         <div className="addproduct-itemmfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={producthandler} name="category"  className='addproduct-selector'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kids</option>
            </select>
         </div>
         <div className='addproduct-itemfield'>
            <label htmlFor="file-input">
                <img  src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumnail-img'/>
               
            </label>
            <input onChange={imgaeHandler} type="file" id='file-input' name='image' hidden/>

          
         </div>
         <button onClick={()=>{
             AddProduct()
         }} className='addproduct-btn'>ADD</button>       
      
    </div>
  )
}

export default Addproduct
