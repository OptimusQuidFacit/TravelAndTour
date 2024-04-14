"use client"
import { getOrder } from "@/lib/data";
import styles from "./summary.module.css"
import {useFormState} from 'react-dom'
import { useEffect, useState } from "react";
// import { handlePayment } sfrom "@/lib/controllers/orders";
import { PaystackButton } from "react-paystack";
import { updateOrders } from "@/lib/controllers/orders";
const Summary = ({user, id}) => {

    const [order, setOrder] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    // const [state, formAction]= useFormState(handlePayment, undefined);
    // console.log(order);
     useEffect(()=>{
        getOrder(id).then(res=>{
            // console.log(res)
            res.total = res.accommodationFee + res.flight_Fee;
            setOrder(res);
            setisLoading(false)
        }
            );
     }, []);   
    //  useEffect(()=>{
    //    order&&updateOrders(order);
    //  }, [order]);  

     const props= {
        email: user?.email,
        amount: order?.total *1300*100,
        publicKey: 'pk_test_c9581ff6d96b0bf2e026a0960f773fa1e8d4cad1',
        text: "Pay Now",
        onSuccess: () =>{
            updateOrders(order._id, {paid:true});
            alert("Successful Payment");

        },
        onClose: () => {
            alert("Thanks for trying out our service")}

     }
   
    return (
        <div className={`${styles.wrapper} p-4 shadow shadow-1 mx-auto`}>
            <h1 className="text-center fw-bold text-secondary">
                Summary
            </h1>
            <div className="details m-2 p-1 container">
                {
                    isLoading?<div className="text-center p-3 fw-bold">Loading...</div>:
                    order&&Object.entries(order)
                    .map(([key,value]) =>
                        <div className={`${styles.row} d-flex px-1 py-2 justify-content-center`}>
                            <p className={`${styles.col} fw-bold text-primary`}>{key==="accommodationFee"?"ACCOM. FEE":key.toUpperCase()}</p>
                            <p className={`${styles.col}`}>{key==="accommodationFee"||
                            key==="flight_Fee" || key==="total" ?`$${value}`:value}</p>
                        </div>)
                }
                {/* <form action={formAction} className="text-center">
                    <input type="hidden" name="email" value={user.email} />
                    <input type="hidden" name="total" value={order?.total} />
                    <button className="btn btn-dark">
                        Proceed to Payment
                    </button>
                </form> */}
                <div className="text-center ">
                    <PaystackButton className={`${styles.pay} btn btn-success text-center`} {...props}/>
                </div>
            
            </div>
        </div>
    );
}

export default Summary;