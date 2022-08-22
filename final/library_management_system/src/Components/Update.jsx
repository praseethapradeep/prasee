import { useState } from "react";
import React from 'react';
import {useNavigate} from "react-router-dom";



function Update() {

  const navigate =useNavigate();

  let upbookdata=localStorage.getItem("upbookdata")
  upbookdata=JSON.parse(upbookdata)

  let bookn=upbookdata.bookName;
  let isbn1=upbookdata.isbn;
  let authorN=upbookdata.authorName;
  let noofcopies=upbookdata.added;
  let availablecopy=upbookdata.available;
  let gn=upbookdata.genre;
    const [bookName,setBookName]=useState(bookn);
    const [authorName,setAuthorName]=useState(authorN);
    const [isbn,setisbn]=useState(isbn1);
    const [added,setAdded]=useState(noofcopies);
    const [available,setAvailable]=useState(availablecopy)
    const [genre,setGenre]=useState(gn);


    
    
  
    const handleSubmit=(event)=>{
        let bookdata={isbn,bookName,authorName,added,available,genre}
        
        event.preventDefault();
        alert ('Updated successfully')
        navigate('/admin')

        

        fetch("http://localhost:8080/update",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(bookdata),
        
      }).then(() => {
        console.log("added")
        localStorage.removeItem("upbookdata")
        navigate('/admin')


    })

    }
  return (
    <div>
        <h1>Edit Book</h1>
            <br></br>
            <br></br>
        <form>
                <label>ISBN Number</label><br></br>
                <input type='text' name='isbn' value={isbn}onChange={(e)=>{setisbn(e.target.value)}}></input><br></br><br></br>
                <label>Book Name</label><br></br>
                <input type='text' name='bookName' value={bookName}onChange={(e)=>{setBookName(e.target.value)}}></input><br></br><br></br>
                <label>Author Name</label><br></br>
                <input type='text' name='authorName' value={authorName}onChange={(e)=>{setAuthorName(e.target.value)}}></input><br></br><br></br>
                <label>Number of copies added</label><br></br>
                <input type='text' name='added' value={added} onChange={(e)=>{setAdded(e.target.value)}}></input><br></br><br></br>
                
                <label>Available Copies</label><br></br>
                <input type='text' name='availableCopy' value={available}onChange={(e)=>{setAvailable(e.target.value)}}></input><br></br><br></br>
                


                <label>Genre</label><br></br>
                <input type='text' name='genre'value={genre} onChange={(e)=>{setGenre(e.target.value)}}></input><br></br><br></br>

                <input type='submit' onClick={handleSubmit} ></input>

            </form>
    </div>
  )
}

export default Update