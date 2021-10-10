import React from "react";
import { useState, useEffect } from "react";
import "./Mani.css";
import Card from "./Card";
import axios from "axios"
// this is package for popup error 
import swal from 'sweetalert';
// import Swal from 'sweetalert2'

const Main = () => {
  const [Isloader, setIsloader] = useState(false)
  const [setData, setuserData] = useState({
    bookname: " ",
    price: " ",
    author: " ",
    language: " ",
    aboutAuthor: " "
  })
  const inputHnadle = (e) => {
    setuserData({ ...setData, [e.target.name]: e.target.value })
  }
  // change button name and call different apis edit ,submit
  const [changeText, setchangeText] = useState("SUBMIT")
  const [editId, seteditId] = useState()
  const [userArray, setuserArray] = useState([])
  // here i am calling post api......
  const submitData = async () => {
    // console.log("data",setData)  
    try {
      if (changeText === "SUBMIT") {
        if (setData.bookname === " " || setData.price === " " || setData.author === " " || setData.language === " " || setData.aboutAuthor === " ") {
          swal("Oops", "Plz fill all the fields!", "error");

        } else {
          setIsloader(true)
          const response = await axios.post("https://book-dictonary-api.herokuapp.com/post/storebooks", setData);
          setuserData({
            bookname: " ",
            price: " ",
            author: " ",
            language: " ",
            aboutAuthor: " "
          })
          setIsloader(false)
        }
      } else {
        // console.log(editId)
        if (setData.bookname === " " || setData.price === " " || setData.author === " " || setData.language === " " || setData.aboutAuthor === " ") {
          swal("Good job!", "You clicked the button!", "success");
        } else {
          Isloader(true)
          const response = await axios.put(`https://book-dictonary-api.herokuapp.com/update/book?_id=${editId}`, setData)
          setuserData({
            bookname: " ",
            price: " ",
            author: " ",
            language: " ",
            aboutAuthor: " "
          })
          setchangeText("SUBMIT")
          setIsloader(false)
        }
      }
      //  console.log("response",response)
      fetchData()
    } catch (error) {
      console.log("errors", error.response)
    }
  }
  // this hook use for first time componet mount call and fetch data from db
  useEffect(() => {
    fetchData()
  }, [])
  // get the all data using useffect() hook
  // here i am calling get api
  const fetchData = async () => {
    // console.log("data",setData)
    try {
      setIsloader(true)
      const response = await axios.get("https://book-dictonary-api.herokuapp.com/get/books/allData")
      //  console.log("response",response)
      setIsloader(false)
      setuserArray(response.data)
    } catch (error) {
      console.log("errors", error.response)
    }
  }

  // const putData = async ()=>{
  //   try {

  //     fetchData()
  //   } catch (error) {
  //     console.log("errors",error.response)  
  //   }
  // }
  // here i am delete item from Database using id with query.....
  const deleteData = async (_id) => {
    // console.log(_id)
    // console.log("called")
    try {
      setIsloader(true)
      const response = await axios.delete(`https://book-dictonary-api.herokuapp.com/delete/book?_id=${_id}`)
      setIsloader(false)
      fetchData()


    } catch (error) {
      console.log("error", error.response)

    }
  }
  return (
    <>
      <div className="container mt-5">
        <div className="content col-md-10  d-flex flex-wrap justify-content-center rounded-5  mx-auto my-4">
          <div className="col-md m-2 animat m-3">
            <img
              src="./image/books.svg"
              width="100%"
              height="100%"
              alt="img"
            />
          </div>
          <div className="contents col-md-5" >
            <h2 className="signin-text mb-3 text-center">BOOK CHEAT SHEET </h2>
            <form className="form-container ">
              <div className="form-group">
                <label for="booName">Book Name</label>
                <span className="add-on"> <i class="icon-book"></i>
                </span>
                <input
                  type="text"
                  name="bookname"
                  className="form-control p-2"
                  placeholder="Enter your book name"
                  value={setData.bookname}
                  onChange={inputHnadle}
                  required
                />
              </div>
              <div className="form-group">
                <label for="bookPrice">Book Price</label>
                <span className="add-on"> <i class="icon-inr"> </i>
                </span>
                <input
                  type="number"
                  name="price"
                  className="form-control p-2"
                  placeholder="Enter  book price"
                  value={setData.price}
                  onChange={inputHnadle}
                  required
                />
              </div>
              <div className="form-group">
                <label for="bookAuthor">Author</label>
                <span className="add-on"> <i class="icon-edit-sign"></i>
                </span>
                <input
                  type="text"
                  name="author"
                  className="form-control p-2"
                  placeholder="Enter book author name"
                  value={setData.author}
                  onChange={inputHnadle}
                  required
                />
              </div>
              <div className="form-group">
                <label for="bookLanguage">Language</label>
                <span className="add-on"> <i class="icon-globe"></i>
                </span>
                <input
                  type="text"
                  name="language"
                  className="form-control p-2"
                  placeholder="Enter book language name"
                  value={setData.language}
                  onChange={inputHnadle}
                  required
                />
              </div>
              <div className="form-group">
                <label for="aboutAuthor">About Author</label>
                <span className="add-on"> <i className="icon-user"></i>
                </span>
                <input
                  type="text"
                  name="aboutAuthor"
                  className="form-control p-2"
                  placeholder="Enter book language name"
                  value={setData.aboutAuthor}
                  onChange={inputHnadle}
                  required
                />
              </div>
              <div className="row col-6 d-grid col-md-auto   m-2">
                <button
                  type="button"
                  class=" btn btn-outline-primary  "
                  onClick={submitData} style={{ "fontWeight": "bold" }}
                  disabled={Isloader}
                >
                  {changeText}

                  {Isloader && <div class="spinner-border spinner-border-sm m-1 text-dark" role="status"> 

                  </div>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* create dynamic card for book store */}
      <div className="container d-flex flex-wrap">
        {userArray.map((element) => {
          return (
            <>
              <Card element={element}
                key={element._id}
                deleteData={deleteData}
                // putData={putData}
                setuserData={setuserData}
                setData={setData}
                setchangeText={setchangeText}
                seteditId={seteditId} />
            </>
          )
        })}
      </div>
    </>
  );
};

export default Main;
