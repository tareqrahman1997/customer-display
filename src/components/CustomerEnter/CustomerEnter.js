import React from 'react';
import './CustomerEnter.css'

const CustomerEnter = (props) => {
 //   console.log(props);

    const {id, name, phone, month, totalAmount} = props.customer;
    
    return (
        <div className="table">
                <table>
                    <tr>
                      <th>{id}.Name:</th>
                      <td>{name}</td>
                    </tr>
                    <tr>
                      <th>Mobile</th>
                      <td>{phone}</td>
                    </tr>
                    <tr>
                      <th>Month</th>
                      <td>{month}</td>
                    </tr>
                    <tr>
                       <th>Total-Amount</th>
                      <td>{totalAmount}Taka</td>
                    </tr>
                </table>
            
                <button className="remove-btn"
                      onClick={() => props.handleRemoveCustomer(id)}
                >Remove Data</button>
        
            
        </div>
    );
};

export default CustomerEnter;