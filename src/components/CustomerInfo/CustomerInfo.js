import React, { useEffect } from 'react';
//import fakeData from '../../fakeData';
import { useState } from 'react';
import CustomerEnter from '../CustomerEnter/CustomerEnter';
import { removeFromDatabase } from '../../utilities/databaseManager';
import "./CustomerInfo.css"


const CustomerInfo = (props) => {
 //  const first10 = fakeData.slice(0,10);
    const [customers, setCustomers] = useState([]);

    useEffect(() =>{
        fetch('https://guarded-fortress-16569.herokuapp.com/customerInfo')
        .then(res => res.json())
        .then(data =>{
          //  console.log('data',data);
            setCustomers(data);
        })
    },[]);

    const handleRemoveCustomer = (customerId) =>{
        const newCustomer = customers.filter(cm => cm.id !== customerId);
        setCustomers(newCustomer);
        removeFromDatabase(customerId);
    }

    


    return (
        <div className="customerInfo">
                {
                    customers.map(cm => <CustomerEnter
                    handleRemoveCustomer = {handleRemoveCustomer}
                    customer={cm}></CustomerEnter>)
                }
            
        </div>
    );
};

export default CustomerInfo;