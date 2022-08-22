import React from "react";
import './AdminProfilePage.css';
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Bookrowmap from "./Bookrowmap";
import ReactPaginate from "react-paginate";
function Adminprofile(){

    const[data,getData]=new useState([])
    const [Book ,setBook]=useState([]);


  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

    const navigate= useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate('/addbook')
    }

    // const [Book ,setBook]=useState([]);
    const fetchData=()=>{
        fetch("http://localhost:8080/find") .then(response=> response.json())
            
            .then((data)=>{
                let bookd=data.results
                setBook(data.map((data)=> {return <Bookrowmap data={data} fetchData={fetchData} />}))

                // console.log(data.id)
                // console.log(data.id)
            })

        }

        const list=data.slice(pagesVisited, pagesVisited + usersPerPage).map((data, index) => 
        //console.log(data)
        <Bookrowmap data={data} key={index} />
        )

        
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    console.log("pageCount",pageCount)
  };

        useEffect(()=>{
            fetchData();
        },[])

    

    return(
        <div className="div1">
            <h1 id="heading">Books</h1>
            <button className="button" role="button" onClick={handleSubmit}>Add Book</button>
            <br></br><br></br>

            <table className="table">
            
                    <tr>
                    <th>
                        ISBN no
                    </th>
                    <th>
                        Book Name
                    </th>
                    <th>
                        Author
                    </th>
                    <th>
                        Total no.of copies
                    </th>
                    <th>
                        Available copies
                    </th>
                    <th>
                        Genre
                    </th>
                    <th>
                        Update
                    </th>
                    <th>
                        Delete
                    </th>
                    </tr>
                    {list}

  {Book}
            </table>

           

        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />


        </div>
      

    )

}


export default Adminprofile;