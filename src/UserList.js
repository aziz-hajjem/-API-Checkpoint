import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css';


export default function UserList() {
    const [posts,setPost]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setPost(res.data))
        .catch(err=>console.log(err))


    },[])
    return (
        <div style={{display:"flex ",flexWrap:"wrap",
        justifyContent:"space-around"}}>
            {posts.map((el)=>(
                <div key={el.id} className="content"  style={{border:"2px solid grey"
                ,marginBottom:"5px",width:"30%",textAlign:"center",borderRadius:"5px"
                
                }}>
                    <h1>{el.name}</h1>
                    <h3>{el.username}</h3>
                </div>

            ))}

            
        </div>
    )
}
