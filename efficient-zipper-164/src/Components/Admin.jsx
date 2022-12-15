import React from 'react'
import  { useState } from 'react'

function Admin() {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault()
        let res=await fetch(`https://render-mock-server-7ng4.onrender.com/men`,{
            method:"POST",
            headers: {
                "Content-type": "application/json"
              },
            body:JSON.stringify({name,age,email})
        })
        alert("posted")
       setAge("")
       setName("")
       setEmail("")
    }
  return (
    <div>
        <br/>
        <br/>
        <form>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="name" placeholder='enter name'/><br/>
        <input value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="enter age"/><br/>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="enter email"/><br/>
      <input onClick={handleSubmit} type="submit"/>
      </form>
    </div>
  )
}

export default Admin
