
import { useState } from "react"
import axios from "axios"

  




function Classwork () {
  const [posts, setPosts] = useState([])
  const getAllposts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts") .then((responses) => {
        setPosts(responses.data)
    })
  }


    return(
<div>
    <button onClick={getAllposts}>Read</button>
    {
        posts.map((post,index) =>(
        <div className="item-parent">
         <div className="items">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
             </div>  
             </div> 

)) 
    } 
</div>
    )
}  

export default Classwork;