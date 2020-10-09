import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { useStateValue } from '../StateProvider';
import Order from './Order';
import '../static/css/Orders.css';


function Orders() {
    const[{user, cart}, dispatch] = useStateValue();
    const[orders, setOrders] =useState([]);

    useEffect(()=>{
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot=>{
                setOrders(snapshot.docs.map(doc=>({
                    id:doc.id,
                    data: doc.data()
                })))
            })
        }else{
            setOrders([])
        }
    
    }, [user])
    return (
        <div className="orders">
            <h2> Your Orders </h2>
            <div className="orders__order">
                {orders?.map(order =>(
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
