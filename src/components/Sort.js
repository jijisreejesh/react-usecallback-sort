//Create react component using useCallback hook to memoize a function 
//that sort a list of numbers when a button is clicked,
//ensuring the sort function is not created on every render
import React, { useCallback, useState } from 'react'

function Num({sorting}){
 return(
    <button onClick={sorting}>Sort</button>
 )
}

function Sort() {
    const [elements,setElements] = useState([3,5,2,6,7]);
    const items = elements.map(i => <li key={i}>{i}</li>);

    const handle=useCallback(()=>{
        setElements([...elements].sort())
        console.log(elements)
    },[])

const [count,setCount]=useState(0);

  return (
    <>
    <h1>Hello</h1>
    <ul>{items}</ul>
    <Num sorting={handle}/>
    <br/>
    <label>{count}</label><br/>
    <button onClick={()=>setCount(count+1)}>+</button>
    </> 
   
  )
}

export default Sort