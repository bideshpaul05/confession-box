import React ,{ useContext }from 'react'
import msgcontext from '../context/messagecontext'
export default function Form() {
    const context = useContext(msgcontext)
    const {addmsg} = context 
    const [note,setnote]= React.useState({name:"anonymous",
    message:""})
    const handleClick = (e)=>{
        e.preventDefault();

        addmsg(note.name,note.message)
    // window.location.reload()
    }
    const onchange = (e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }
  return (
    <form method='POST' className='mx-5 my-5'>
        <legend>Make Your Confession</legend>
    <div className="mb-3">
      <label htmlFor="message" className="form-label text-dark">Name</label>
      <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name'  onChange={onchange}/>
      <div id="emailHelp" className="form-text text-primary">Leave it blank if you wish to be anonymous</div>
    </div>
    <div className="mb-3">
      <label htmlFor="message" className="form-label text-dark">Confession</label>
      <textarea type="text" className="form-control" id="message" name='message' onChange={onchange}/>
    </div>
  
    <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
  </form>

  )
}
