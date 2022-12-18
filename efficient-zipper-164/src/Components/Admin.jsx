import React from 'react'
import  { useState } from 'react'

function Admin() {
    const [name,setName]=useState("");
    const [link,setlink]=useState("");
    const [desc,setdesc]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault()
        let res=await fetch(`https://render-mock-server-7ng4.onrender.com/temphome`,{
            method:"POST",
            headers: {
                "Content-type": "application/json"
              },
            body:JSON.stringify({name,link,desc})
        })
        alert("posted")
       setlink("")
       setName("")
       setdesc("")
    }

 const [imageLink,setImageLink]=useState("");
 const [productName,setProductName]=useState("");
 const [rating,setRating]=useState("");
 const [category,setCategory]=useState("");
 const [price,setPrice]=useState("");
 const [discount,setDiscount]=useState("");
 const [color,setColor]=useState("");
 const [detail,setDetail]=useState("");
 const [brand,setBrand]=useState("");
 const handleSubmit1=async(e)=>{
      e.preventDefault()
      let res=await fetch(`https://render-mock-server-7ng4.onrender.com/tempproduct`,{
          method:"POST",
          headers: {
              "Content-type": "application/json"
            },
          body:JSON.stringify({productName,imageLink,category,rating,price,discount,color,detail,brand})
      })
      alert("posted")
      setImageLink("")
      setProductName("")
      setRating("")
      setCategory("")
      setPrice("")
      setDiscount("")
      setColor("")
      setDetail("")
       setBrand("")
  }
  return (
    <div>
        <br/>
        <br/>
        <h1>From is for links</h1>
        <form>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter name'/><br/>
        <input value={link} onChange={(e)=>setlink(e.target.value)} type="text" placeholder="enter link"/><br/>
      <input value={desc} onChange={(e)=>setdesc(e.target.value)} type="text" placeholder="enter desc"/><br/>
      <input onClick={handleSubmit} type="submit"/>
      </form>

      <div style={{width:"200px",margin:"auto"}}>
        <h1>Form for products</h1>
      <form>
        <input value={imageLink} onChange={(e)=>setImageLink(e.target.value)} type="text" placeholder='enter imageLink'/><br/>
        <input value={productName} onChange={(e)=>setProductName(e.target.value)} type="text" placeholder="enter productName"/><br/>
      <input value={rating} onChange={(e)=>setRating(e.target.value)} type="number" placeholder="enter rating"/><br/>
      <input value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder='enter category'/><br/>
        <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number" placeholder="enter price"/><br/>
      <input value={discount} onChange={(e)=>setDiscount(e.target.value)} type="number" placeholder="enter discount"/><br/>
      <input value={color} onChange={(e)=>setColor(e.target.value)} type="text" placeholder='enter color'/><br/>
      <input value={brand} onChange={(e)=>setBrand(e.target.value)} type="text" placeholder='enter brand'/><br/>
      <input value={detail} onChange={(e)=>setDetail(e.target.value)} type="text" placeholder="enter detail"/><br/>
      <input onClick={handleSubmit1} type="submit"/>
      </form>
      </div>
    </div>
  )
}

export default Admin
