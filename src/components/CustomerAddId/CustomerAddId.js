import React from 'react';
import { useForm } from 'react-hook-form';
import './CustomerAddId.css'



const CustomerAddId = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{
    //  console.log(data);
      const customerDetails = data;

      fetch('http://localhost:4200/addCustomer',{
        method:'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(customerDetails)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
      
      })

    }

        
      
      

  
  return (
    <div className="top">
          <div className="primary">
            <form className="display" onSubmit={handleSubmit(onSubmit)}>

                {errors.bill && <span className="error">Bill is required</span>}
                <input name="bill" ref={register({ required: true })} placeholder="Bill NO" />
                {errors.name && <span className="error">Name is required</span>}


                <input name="name" ref={register({ required: true })} placeholder="Your Name" />
                {errors.mobile && <span className="error">Mobile is required</span>}


                <input name="mobile" ref={register({ required: true })} placeholder="Mobile NO" />
                {errors.month && <span className="error">Month is required</span>}


                <input name="month" ref={register({ required: true })} placeholder="Month" />
                {errors.amount && <span className="error">Amount is required</span>}


                <input name="amount" ref={register({ required: true })} placeholder="Total-Amount" />


                <input type="submit" />
            </form>
          </div>
        </div>  
      )
  };

export default CustomerAddId;