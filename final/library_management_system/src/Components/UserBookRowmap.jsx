import React from 'react'
import { useState ,useEffect} from 'react'

function UserBookRowmap(props) {
    let isbn=props.data.isbn;

    //const[isbn,setIsbn]=new useState(props.data.isbn)
    const[bookName,setBookName]=new useState(props.data.bookName)
    const[authorName,setAuthorName]=new useState(props.data.authorName)
    const[added,setAdded]=new useState(props.data.added)
    const[available,setAvailable]=new useState(props.data.available)
    const[counter,setCounter]=new useState(props.data.available)
    const[disable,setDisable]= React.useState(false);


    const buy=event=>{
        let userInfo=localStorage.getItem("UserInfo");
        userInfo=JSON.parse(userInfo);
        console.log(userInfo.uid)
        let uid=userInfo.uid

        fetch(`http://localhost:8080/getuserbooklimit/${uid}`)
        .then((res) =>
            res.text())

        .then((result) => {
          console.log("LIMIT RESULT")
            console.log(result);

            if(result==="valid")
            {
                 let m=available
                let settle={bookName,authorName,added,available}

if(available!="0")
{
    fetch(`http://localhost:8080/bookbuyupdate/${isbn}`,{
 
      method:"PUT",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(settle)
    })

    .then((res) =>
            res.text())

        .then((response) => {

          alert('Book purchased')
          props.fetchData() 

        })

        let userInfo=localStorage.getItem("UserInfo");
        userInfo=JSON.parse(userInfo);
        let a=userInfo.uid;

console.log(props.data.uid)

const dateOfPurchase=new Date(Date.now()).toISOString().substring(0,10);
const nextdate=new Date(Date.now()+12096e5);

console.log(dateOfPurchase)
const dateOfReturn=nextdate.toISOString().substring(0,10)
console.log(dateOfReturn)


let uid=a
// let isbn=props.data.isbn;
const user={uid,isbn,bookName,authorName,dateOfPurchase,dateOfReturn}
fetch("http://localhost:8080/buybookinsert",{
			method:"POST",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify(user)
		  }).then(() => {


		  })

}
if(available==="0")
{
  alert("No Books are Available")
}

            }

            if(result==="null")
            {
              alert("limit exceed")
            }
        })


  }



    let d
  function update(Book)
  {
    d=Book.isbn

    console.log("Haiiii")
    console.log(d)
    setBookName(Book.bookName)
    setAuthorName(Book.authorName)
    setAdded(Book.added)
    setAvailable(Book.available)
     setAvailable(available-1)



    }


  return (
  <tr key={props.key}>
        
    <td>
        {props.data.isbn}
    </td>
    <td>
        {props.data.bookName}
   </td>
    <td>
        {props.data.authorName}
    </td>
    <td>
        {props.data.added}
    </td>
    <td>
        {props.data.available}
    </td>
    <td>
        {props.data.genre}
    </td>
    { <td>
        {
            <button disabled={disable} onClick={()=>{buy();setDisable(true)}}>BUY</button>
        }
    </td> }
    </tr>
  )
}

export default UserBookRowmap