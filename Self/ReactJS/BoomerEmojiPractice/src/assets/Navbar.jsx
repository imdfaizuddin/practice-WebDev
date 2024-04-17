import {useEffect, useState} from "react"

function Navbar(props){
    const [nav, changeNav] = useState(0)
    useEffect(()=>{
        alert("first render")
    },[])
    useEffect(()=>{
        alert("nav changed")
    },[nav])
    useEffect(()=>{
        alert("changed")
    })
    useEffect(()=>{
        return ()=>{
            alert("nav unmounted")
        }
    },[])
    return <nav>
        <ul style={{color:`${props.color}`}}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>{props.color}</li>
        </ul>
        <button onClick={()=>changeNav(nav+1)}>{nav}</button>
    </nav>
}

export default Navbar