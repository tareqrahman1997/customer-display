import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useState } from 'react';
import CustomerAddId from '../CustomerAddId/CustomerAddId';

firebase.initializeApp(firebaseConfig);

const Login = (props) => {
    console.log(props);
    const [user,setUser] = useState({
        isSignedIn:false,
        name: '',
        email: '',
        photo: ''
    })



    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res =>{
            const {displayName,photoURL,email}= res.user;
            const signedInUser ={
                isSignedIn:true,
                name:displayName,
                email:email,
                photo:photoURL
            }
            setUser(signedInUser);
        })
        .catch(err =>{
            // console.log(err);
            // console.log(err.message);
        })
    }

    const handleSignOut = () =>{
        firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn:false,
                name: '',
                email:'',
                password:"",
                error: '',
                isValid :false,
                existingUser :false
            }
            setUser(signedOutUser);
          //  console.log(res);

        })
        .catch( err => {

        })
    }

    const is_valid_email = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    const hasNumber = input => /\d/.test(input);
    const switchForm = e => {
        const createdUser = {...user};
        createdUser.existingUser = e.target.checked;
        setUser(createdUser);
        

    }

    const handleChange = e => {
        const newUserInfo = {
          ...user
        };

        let isValid = true;
        if(e.target.name === 'email'){
            isValid = is_valid_email(e.target.value);
        }
        if(e.target.name === "password"){
            isValid = e.target.value.length > 8 && hasNumber(e.target.value);
        }

        newUserInfo[e.target.name]= e.target.value;
        newUserInfo.isValid = isValid;
        setUser(newUserInfo);

    }

    const createAccount = (event) =>{
        if(user.isValid){
            firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
            .then(res => {
             //   console.log(res);
                const createdUser = {...user};
                createdUser.isSignedIn = true;
                createdUser.error ='';
                setUser(createdUser);
            })
            .catch(err =>{
             //   console.log(err.message);
                const createdUser = {...user};
                createdUser.isSignedIn = false;
                createdUser.error = err.message;
                setUser(createdUser);
            })

        }
        
        event.preventDefault();
        event.target.reset();  

    }

    const signInUser = event => {
        if(user.isValid){
            firebase.auth().signInWithEmailAndPassword(user.email,user.password)
            .then(res => {
              //  console.log(res);
                const createdUser = {...user};
                createdUser.isSignedIn = true;
                createdUser.error ='';
                setUser(createdUser);
                window.location="/customerAddId"
            })
            .catch(err =>{
             //   console.log(err.message);
                const createdUser = {...user};
                createdUser.isSignedIn = false;
                createdUser.error = err.message;
                setUser(createdUser);
            })

        }
        event.preventDefault();
        event.target.reset();
    }


    return (
        <div className="container-sm" >
                    {/* {
                        user.isSignedIn ? <button type="button" class="btn btn-primary" onClick={handleSignOut}>Sing out</button> :
                        <button onClick={handleSignIn} >Sign in</button>
                        
                    }
                    {
                        user.isSignedIn && <div>
                            <p>welcome:{user.name}</p>
                            <p>Your email:{user.email}</p>
                        </div>
                    }
                    <h1>our information</h1>
                    <input type="checkbox" name="switchForm" onChange={switchForm}/>
                    <label htmlFor="switchForm">Returning user</label> */}
            
                        <form style={{display:user.existingUser ? 'none':'block'}} onSubmit={signInUser}>
                                <input type="text" onBlur={handleChange} name="email" placeholder="Your email" required />
                                <br/>
                                <br/>
                                <input type="password" onBlur={handleChange} name="password" placeholder="Your password" required />
                                <br/>
                                <br/>
                                <input type="submit" class="btn btn-primary" value=" SignIn"/>
                        </form>
        

                    {/* <form style={{display:user.existingUser ? 'block':'none'}} onSubmit={createAccount}>
                            <input type="text" onBlur={handleChange} name="name" placeholder="Your name" required />
                            <br/>
                            <input type="text" onBlur={handleChange} name="email" placeholder="Your email" required />
                            <br/>
                            <input type="password" onBlur={handleChange} name="password" placeholder="Your password" required />
                            <br/>
                            <br/>
                            <input type="submit" class="btn btn-primary" value=" Create Account"/>
                    </form> */}
                    {
                        user.error && <p style={{color:'red'}}>{user.error}</p>
                    }
            
        </div>
    );
};

export default Login;