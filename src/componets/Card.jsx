import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card m-5 dynamic mx-auto">
        <div className="card-body">
          <h5 className="card-title text-center" style={{ "textDecoration": "underline black 3px" }}>{props.element.bookname.toUpperCase() }</h5>
          <h6 className ="card-subtitle mb-2"> Book Price :- {props.element.price}/-</h6>
          <h6 className="card-subtitle mb-2"> Author Name :- {props.element.author}</h6>
          <h6 className="card-subtitle mb-2">Language Name :- {props.element.language}</h6>
          <p className="card-text">About Author :- {props.element.aboutAuthor}</p>
          <button  className="btn btn-success roun m-2" onClick={()=>{
            props.seteditId(props.element._id)
            props.setchangeText("EDIT")
           props.setuserData({...props.setData,
            ["bookname"]:props.element.bookname,
            ["price"]:props.element.price,
            ["author"]:props.element.author,
            ["language"]:props.element.language,
            ["aboutAuthor"]:props.element.aboutAuthor,
          })
          }}>Edit</button>
          <button className="btn btn-danger roun" onClick={(e)=>{
            props.deleteData(props.element._id)
          }}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default Card
