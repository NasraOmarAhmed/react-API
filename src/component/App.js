
import { useState } from "react"
import axios from "axios"

  




function App () {
  const [photos, setPhotos] = useState([])
  const getAllPhotos = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos") .then((response) => {
        setPhotos(response.data)
    })
  }


    return(
<div>
    <button onClick={getAllPhotos}>Get Data</button>
    {
        photos.map((photo,index) =>(
        <div className="item-parent">
         <div className="items">
            <p>{photo.title}</p>
            <img src={photo.thumbnailUrl} />
             </div>  
             </div> 

))
    } 
</div>
    )
}  

export default App;