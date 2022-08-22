import React from 'react'
import { useState, useEffect } from 'react';
import UserBookRowmap from './UserBookRowmap';
import {useNavigate} from 'react-router-dom';
import './UserProfile.css'
import ReactPaginate from "react-paginate";
import './Pagination.css'


function UserProfilePage() {

    const[data,getData]=new useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;


  const navigate=useNavigate();
  const profile=(event)=>{
    event.preventDefault();
    navigate('/profile')  }
let userInfo=localStorage.getItem("userInfo");
userInfo=JSON.parse(userInfo);

  const [Book ,getBook]=new useState([]);
  const fetchData=()=>{
      fetch("http://localhost:8080/find") .then(response=> response.json())
          
          .then((data)=>{
              let bookd=data.results
              getBook(data.map((data)=> {return <UserBookRowmap data={data}  fetchData={fetchData}/>}))

              console.log(data.isbn)
              console.log(data.isbn)
          })

      }

      const list=data.slice(pagesVisited, pagesVisited + usersPerPage).map((data, index) => 
  //console.log(item)
   <UserBookRowmap data={data} key={index} fetchData={fetchData} />
)


  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

      useEffect(()=>{
          fetchData();
      },[])

      function logout()
      {

localStorage.clear(userInfo)

navigate('/login');

      }



  return (

    <div className='div1'>
        <h1>Book Details</h1><br></br>
        <button className='button' onClick={profile} >My Profile</button><br></br><br></br>
      <button className='button'  onClick={logout}>Logout </button><br></br><br></br>
        <table className='table'>
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
                      Purchase
                    </th>
                
                    </tr>
                    {Book}
                    {list}
                    {data}

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

export default UserProfilePage