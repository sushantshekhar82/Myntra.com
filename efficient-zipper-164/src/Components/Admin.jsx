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
  return (
    <div>
        <br/>
        <br/>
        <form>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter name'/><br/>
        <input value={link} onChange={(e)=>setlink(e.target.value)} type="text" placeholder="enter link"/><br/>
      <input value={desc} onChange={(e)=>setdesc(e.target.value)} type="text" placeholder="enter desc"/><br/>
      <input onClick={handleSubmit} type="submit"/>
      </form>
    </div>
  )
}

export default Admin
