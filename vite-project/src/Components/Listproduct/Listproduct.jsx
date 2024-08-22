// import React, { useEffect, useState } from 'react'
// import './Listproduct.css'
// import cross_icon from '../../assets/Admin_Assets/cross_icon.png'

// const Listproduct = () => {
//    const [allProducts,setallProducts]=useState([])
//     const ProductInfo=async()=>{
//            await fetch("http://localhost:4000/allproducts")
//            .then((response)=>response.json())
//            .then(data=>{
//              setallProducts(data)})
//            .catch((error)=>{
//             setallProducts(`${error}: had leds to a problem of fetching data`)
//            })
//     }
//     useEffect(()=>{
//       ProductInfo()    
//     },[])
//   return (
//     <div className='listproduct'>
//       <h1>All Product Lists</h1>
//       <div className='listproduct-format-main'>
//         <p>Products </p>
//         <p>Title</p>
//         <p>Old_price</p>
//         <p>New_price</p>
//         <p>Categroy</p>
//         <p>Remove</p>
//       </div>
//       <hr/>
//       <div className='listproduct-allproduct'>
//        {allProducts.map((product,index)=>{
//          return  <div key={index} className='listproduct-format-main listproduct'>
//         <img src={product.image} alt=""  className='listproduct-product-icon'/>
//         <p>{product.title}</p>
//         <p>${product.old_price}</p>
//         <p>${product.new_price}</p>
//         <p>{product.category}</p>
//         <img src={cross_icon} alt="" className='listproduct-remove-icon'/>
//           </div>
//        })}
//       </div>
//     </div>
//   )
// }

// export default Listproduct
import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/Admin_Assets/cross_icon.png'

// const Listproduct = () => {
//   const [allProducts, setAllProducts] = useState([])


//   const ProductInfo = async () => {
//     try {
//       const response = await fetch("http://localhost:4000/allproducts")
//       const result = await response.json()

//       if (result.success && Array.isArray(result.message)) {
//         setAllProducts(result.message)
//       } else {
// setAllProducts(JSON.stringify( result.message))
//       }
//     } catch (error) {
//       setAllProducts("Error fetching products:", error)
//     }
//   }
// // const ProductInfo = async () => {
// //   try {
// //     const response = await fetch("http://localhost:4000/allproducts")
// //     const result = await response.json()

// //     if (result.success && Array.isArray(result.message)) {
// //       setAllProducts(result.message)
// //     } else {
// //       setAllProducts(['nothing here to display'])
// //     }
// //   } catch (error) {
// //     setAllProducts(['none'])
// //   }
// // }


//   useEffect(() => {
//     ProductInfo()
//   }, [])
//    const removeproduct=async(id)=>{
//      await fetch(`http://localhost:4000/removeproduct/${id}`,{
//        method:'DELETE',
//        headers:{
//         Accept:'application/json',
//         'Content-Type':"application/json"
//        },
//        body:JSON.stringify({id:id})
//      }),
//     await ProductInfo()
//    }

//   return (
//     //
    
    
//     <div className='list-product'>
//       <h1>All Product Lists</h1>
//       <div className='listproduct-format-main'>
//         <p>Products</p>
//         <p>Title</p>
//         <p>Old_price</p>
//         <p>New_price</p>
//         <p>Category</p>
//         <p>Remove</p>
//       </div>
//       <div>  </div>
      
//       <div className='listproduct-allproduct'>
//         {allProducts.map((product, index) => {
//         return <> <div key={index} className='listproduct-format-main listproduct-format'>
//             <img src={product.image} alt="" className='listproduct-product-icon' />
//             <p>{product.name}</p>
//             <p>${product.old_price}</p>
//             <p>${product.new_price}</p>
//             <p>{product.category}</p>
//             <img onClick={()=>{removeproduct(product.id)}} src={cross_icon} alt="" className='listproduct-remove-icon' />
//             {/* <hr/> */}
//           </div>
//           <hr/>
//           </> 
        
// })}
//       </div>
//     </div>
  
//   )
  
// }

// export default Listproduct


const Listproduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const ProductInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproducts");
      const result = await response.json();

      if (result.success && Array.isArray(result.message)) {
        setAllProducts(result.message);
      } else {
        setAllProducts("Unexpected response format or error in data");
      }
    } catch (error) {
      setAllProducts(`Error fetching products: ${error.message}`);
    }
  };

  useEffect(() => {
    ProductInfo();
  }, []);

  const removeproduct = async (id) => {
    await fetch(`http://localhost:4000/removeproduct/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ id: id })
    });
    await ProductInfo();
  };

  return (
    <div className='list-product'>
      {typeof allProducts === 'string' ? (
        // Display the error message if allProducts is a string (indicating an error)
        <div className='error-message'>
          <h2>Error</h2>
          <p>{allProducts}</p>
        </div>
      ) : (
        <>
          <h1>All Product Lists</h1>
          <div className='listproduct-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Old_price</p>
            <p>New_price</p>
            <p>Category</p>
            <p>Remove</p>
          </div>
          
          <div className='listproduct-allproduct'>
            {allProducts.map((product, index) => (
              <React.Fragment key={index}>
                <div className='listproduct-format-main listproduct-format'>
                  <img src={product.image} alt="" className='listproduct-product-icon' />
                  <p>{product.name}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.category}</p>
                  <img
                    onClick={() => { removeproduct(product.id); }}
                    src={cross_icon}
                    alt=""
                    className='listproduct-remove-icon'
                  />
                </div>
                <hr />
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Listproduct;

