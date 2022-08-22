import React from 'react'
import {useNavigate} from 'react-router-dom'

function Bookrowmap(props) {

     const navigate=useNavigate();
     let d=props.data

    const update=(event)=>{
        event.preventDefault();
        localStorage.setItem("upbookdata",JSON.stringify(d))
         navigate("/update")

    }

    const dele=(event)=>{
        event.preventDefault();

        fetch(`http://localhost:8080/deleting/${props.data.id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
           
            
          })
          .then( ()=>{alert("Deleted");props.fetchData()})
    }

  return (
    
        
        <tr>
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
                    <td>
                        {
                            <button onClick={update}>update</button>
                        }
                    </td>
                    <td>
                        {
                            <button onClick={dele}>delete</button>
                        }
                    </td>
                    </tr>

    
  )
}

export default Bookrowmap