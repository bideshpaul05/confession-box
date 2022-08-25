import React,{useContext,useEffect} from 'react'
import msgcontext  from '../context/messagecontext'
import confession from '../example'
import Card from './Card'
export default function Feed() {
  const cntxt = useContext(msgcontext)
  const {notes,fetchmsg}=cntxt
  useEffect(()=>{
    fetchmsg();
  },[])
  console.log(notes)
  return (
    <div>
      {
        notes.map(i=>{
          // console.log(i)
          return(
          <Card stuff={i}/>
          )
        })
      }
    </div> 
  )
}
