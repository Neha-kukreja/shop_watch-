import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {DLT, ADD, REMOVE} from '../redux/actions/action'
import "./style.css"

const CardsDetails = () => {

    const [data, setData] = useState([]);
    const { id } = useParams();

    const history = useNavigate();


    const dispatch = useDispatch();

    const getdata = useSelector((state) => state.cartreducer.carts);

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        });
        setData(comparedata);
    }


    const send = (e)=>{
     
        dispatch(ADD(e));
      }


    const dlt = (id) => {
        dispatch(DLT(id))
        history("/");
  
      }

    
    const remove =(item)=>{
        dispatch(REMOVE(item))
    }  
  

    useEffect(() => {
        compare();
    }, [id])

    return (
        <>
            <div className="container mt-2">
                <h2 className='text-center'>Product Details </h2>

                <section className='container mt-3'>
                    <div className='itemsdetails'>
                        {
                            data.map((ele) => {
                                return (
                                    <>

                                        <div className='item_img' style={{marginLeft: "-3rem"}}>
                                            <img src={ele.imgdata} alt="" />
                                        </div>

                                        <div className="details " style={{height: '90%'}}>
                                            <table style={{minWidth: "500px", marginLeft: "-5rem", display:"flex", gap:"2rem", justifyContent:"space-between"}}>
                                                <tr className="tr" style={{ width: "100%"}}>
                                                    <td>
                                                        <p><strong>Model Name</strong>  : {ele.rname}</p>
                                                        <p><strong>price</strong>  : {ele.price} PKR</p>
                                                        <p><strong>Total</strong>  : {ele.price * ele.qnty}  PKR</p>

                                                        
                                                    </td>

                                                    <td style={{marginTop: "-20rem"}}>
                                                        <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px ", borderRadius: "5px" }}>{ele.rating} ★</span></p>
                                                        <p><strong>Order Review :</strong> <span style={{ background: "yellow" }}> {ele.somedata}</span></p>
                                                        <p><strong>Remove :</strong> <span><i className='fas fa-trash' onClick={() => dlt(ele.id)} style={{ color: "red", fontSize: "20", cursor: "pointer" }} ></i> </span></p>
                                                    </td>
                                                </tr>

                                            </table>

                                            <div className='mt-5 d-flex justify-content-between align-items-center w-50' style={{width: '50px', cursor: 'pointer', background:"#ddd", color:"#111"}}>
                                                            <span style={{fontSize:24}} onClick={ele.qnty<=1 ? ()=>dlt(ele.id) : () =>remove(ele)}>-</span>
                                                            <span style={{fontSize:22}} >{ele.qnty}</span>
                                                            <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
       
                                                        </div>


                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>


                </section>
            </div>
        </>
    )
}

export default CardsDetails