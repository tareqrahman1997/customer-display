import React from 'react';
import './CustomerEnter.css'

const CustomerEnter = (props) => {
 //   console.log(props);

    const {id, bill, name, mobile, month, amount, customerDetailsTime} = props.customer;
    
    return (
        <div className="container-sm">
                <table className="table">
                   <tr>
                      <th>S/N:</th>
                      <td>{bill}</td>
                    </tr>
                    <tr>
                      <th>{id}Name:</th>
                      <td>{name}</td>
                    </tr>
                    <tr>
                      <th>Mobile</th>
                      <td>{mobile}</td>
                    </tr>
                    <tr>
                      <th>Month</th>
                      <td>{month}</td>
                    </tr>
                    <tr>
                       <th>Total-Amount</th>
                      <td>{amount}Taka</td>
                    </tr>
                    <tr>
                       <th>customerDetailsTime:</th>
                      <td>{customerDetailsTime}</td>
                    </tr>
                </table>
        
        </div>
    );
};

export default CustomerEnter;