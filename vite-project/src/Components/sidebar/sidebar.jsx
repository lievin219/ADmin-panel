import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
// import pixels from '../../assets//Admin_Assets/pixels.jpeg'
import add_product_icon from '../../assets/Admin_Assets/Product_Cart.svg'
import product_list_icon from '../../assets/Admin_Assets/Product_list_icon.svg'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
        <div className='sidebar-item'>
            <img src={add_product_icon} alt="" />
            <p>Add Product</p></div></Link>
            <Link to={'/listproduct'} style={{textDecoration:'none'}}>
        <div className='sidebar-item'>
            <img src={product_list_icon} alt="" />
            <p>List Product</p></div></Link>
      
    </div>        
    
  )
}

export default Sidebar
