import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
const Quiz = ()=>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    
    
  
   const postDetails = ()=>{
    fetch("/f&q",{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            query:title,
        })
    }).then(res=>res.json())
    .then(data=>{

       if(data.error){
          M.toast({html: data.error,classes:"#c62828 red darken-3"})
       }
       else{
           M.toast({html:"Query raised Successfully",classes:"#43a047 green darken-1"})
           setTitle("")
           history.push('/f&q')
       }
    }).catch(err=>{
        console.log(err)
    })

    
   }
 

   return(
       <div className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center"
       }}
       >
           <input 
           type="text"
            placeholder="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
           
         
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>postDetails()}
            
            >
                Submit post
            </button>

       </div>
   )
}


export default Quiz