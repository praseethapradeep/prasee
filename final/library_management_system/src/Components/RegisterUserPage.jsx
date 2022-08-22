import React, { useState } from "react";
import { useEffect } from "react";
import './RegistrationPage.css';
import {useNavigate} from "react-router-dom";



// import { useForm } from "react-hook-form";
// import {yupResolver} from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema= yup.object().shape({
//     name: yup.string().required(),
//     email:yup.string().email().required(),
//     dateOfBirth:yup.number().required(),
//     password:yup.string().min(4).max(15).required()
// })

function Register()
{   


const navigate= useNavigate();

  const [uid, setUid]=useState({});
  const [name,setName]=useState({});
  const [email,setEmail]=useState({});
  const [dateOfBirth,setDateOfBirth]=useState({});
  const [password,setPassword]=useState({});

   // const { register , handleSubmit, errors } = useForm({
      //  resolver: yupResolver(schema),
  //  })
   const [number,setNumber]=React.useState()
   useEffect(()=> {
    fetch("http://localhost:8080/count")
    .then(res=>res.json())
    .then((result)=>{
      setNumber(result)
      setUid(()=> `UN-${(((number+1)+1000)+"").substring(1)}` )
      console.log(number)
    })
  },[number])
    const handleSubmit = (event) => {

      console.log(uid)
    
      let data={uid,name,email,dateOfBirth,password,type:"user"};
        event.preventDefault();
         alert ('your registration have been successful')


        fetch("http://localhost:8080/create",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      }).then(() => {
        setNumber(number+1)
       setUid(()=> `UN-${(((number+1)+1000)+"").substring(1)}` )
       console.log(number)
        console.log("added")
       navigate("/login")

      
      }) 

    }
          
     

   
  return (
    
   

    <div className="App">
     <div>
        <h1>User Registration</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                </label><br></br>
                <input type='text' name="name" onChange={(e)=>{setName(e.target.value)}} required /><br></br>
                


                <label>
                    Email:
                </label><br></br>
                <input type='email' name="email" onChange={(e)=>{setEmail(e.target.value)}} required/><br></br>

                <label>Date Of Birth:</label><br></br>
                <input type='date' name="dateOfBirth" onChange={(e)=>{setDateOfBirth(e.target.value)}} required></input><br></br>
              

                <label>
                  Password:
                </label><br></br>
                <input type='password' name="password" onChange={(e)=>{setPassword(e.target.value)}} required/><br></br><br></br>
                
                <input type='submit' onClick={handleSubmit} />
               

                

                
            </form>


        </div>
       
</div>
  );    

  }

export default Register;


