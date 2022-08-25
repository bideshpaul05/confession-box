import React from "react";
import msgcontext from "./messagecontext";
const Msgstate = (props)=>{
    const host = "http://localhost:8080"
    const Notes=  []

    const addmsg = async (name,message)=>{
        const res = await fetch(`${host}/addmessage/`,{
            method: 'POST',
            headers:{
                "Content-Type": " application/json",
            },
            body: JSON.stringify({name,message}),
        })
        
        const note ={
            name: name,
            message:message
        }
        setNotes(Notes.concat(note))
        window.location.reload()

    }
    const fetchmsg = async ()=>{
        const res = await fetch(`${host}/addmessage/fetchmsg`,{
            method:'GET',
            headers:{
                "content-Type":"application/json"
            }
            
        })

        const data = await res.json()
        setNotes(data)
        console.log(data)


    }
    const [notes, setNotes] = React.useState(Notes);

    return (
        <msgcontext.Provider value={{notes,addmsg,fetchmsg} }>
        {props.children}
      </msgcontext.Provider>
    )
}
export default Msgstate;