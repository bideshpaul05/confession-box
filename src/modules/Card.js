import React from 'react'

export default function Card(props) {
    console.log(props)
    const getDate = (d)=>{
            const date = new Date(d);
           return date.getDate()+'-' +(date.getMonth()+1)+'-'+ (date.getFullYear());
           
    }
    return (
    <div className="card mx-5 my-5">

  <h5 className="card-header">from {props.stuff.name}</h5>
  <div className="card-body">
    <h5 className="card-title">{props.stuff.message}</h5>
    <p className="card-text text-muted">posted on {getDate(props.stuff.date)}</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
  )
}
