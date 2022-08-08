import React from 'react'
import Table from 'react-bootstrap/Navbar'

const CardsDetail = ()=>{
  return (
    <>
    <div className="container mt-2">
        <h2 className='text-center'>Product Details </h2>

       <section className='container mt-3'>
            <div className='itemsdetails'>
                <div className='item_img'>
                    <img src="https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/family-page-datejust-cover-m126333-0010_1601ac_003.jpg?imwidth=1920" alt=''/>
                </div>

                <div className="details">
                    <Table>
                        <tr>
                            <td>
                            <p><strong>Model Name</strong>  : DATE-JUST</p>
                            <p><strong>price</strong>  : 3,455,000 PKR</p>
                            <p><strong>Total</strong>  : 3,455,000 PKR</p>
                            </td>

                            <td>
                             <p><strong>Rating :</strong> <span style={{background:"green", color:"#fff",padding:"2px 5px ",borderRadius:"5px"}}>4.8 ★</span></p>   
                             <p><strong>Order Review :</strong> <span style={{background:"green"}}> 190 + order placed from here recently</span></p>
                             <p><strong>Remove :</strong> <span><i className='fas fa-trash' style={{color:"red",fontSize:"20",cursor:"pointer"}} ></i> </span></p> 
                            </td>
                         </tr>

                    </Table>


                </div>
            </div> 
        </section>      
    </div>
    </>
  )
}

export default CardsDetail