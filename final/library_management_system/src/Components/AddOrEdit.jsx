import React from "react";
import { useState, useEffect}  from "react";
import {useNavigate} from "react-router-dom";


function Add()
{
  const navigate=useNavigate()
    const [bookName,setBookName]=useState({});
    const [authorName,setAuthorName]=useState({});
    const [isbnNumber,setIsbnNumber]=useState({});
    const [added,setAdded]=useState({});
    const [available,setAvailable]=useState({})
    const [genre,setGenre]=useState({});

    let id
    const [num,setNumber]=React.useState();
    useEffect(()=> {
     fetch("http://localhost:8080/bookcount")
     .then(res=>res.json())
     .then((result)=>{
       setNumber(result)
       setIsbnNumber(()=> `BN-${(((num+1)+1000)+"").substring(1)}` )
       console.log(num)
     })
   },[num])



    const handleSubmit=(event)=>{
      let isbn=isbnNumber
        let bookdata={isbn,bookName,authorName,added,available,genre}
        console.log(bookdata)
        event.preventDefault();
        alert ('Book added successfully')

        fetch("http://localhost:8080/addbook",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(bookdata)
      }).then(() => {
        console.log("added")
  
       setNumber(num+1)
       setIsbnNumber(()=> `BN-${(((num+1)+1000)+"").substring(1)}` )
       console.log(num)
       navigate("/admin")
      
      }) 

    }


    return(
        <div>
            <h1>Add A New Book</h1>
            <br></br>
            <br></br>

            <form>
                <label>Book Name</label><br></br>
                <input type='text' name='bookName' onChange={(e)=>{setBookName(e.target.value)}}></input><br></br><br></br>
                <label>Author Name</label><br></br>
                <input type='text' name='authorName' onChange={(e)=>{setAuthorName(e.target.value)}}></input><br></br><br></br>
                <label>Number of copies added</label><br></br>
                <input type='text' name='added' onChange={(e)=>{setAdded(e.target.value)}}></input><br></br><br></br>
                <label>Available copies </label><br></br>
                <input type='text' name='available' onChange={(e)=>{setAvailable(e.target.value)}}></input><br></br><br></br>
                <label>Genre</label><br></br>
                <input type='text' name='genre' onChange={(e)=>{setGenre(e.target.value)}}></input><br></br><br></br>

                <input type='submit' onClick={handleSubmit} ></input>

            </form>
        </div>







    )
}

export default Add;