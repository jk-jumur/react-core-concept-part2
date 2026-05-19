import { use } from "react"
import Photo from './Photo'

export default function Photos({photosPromise}){
      const photos = use(photosPromise);
      console.log(photos);
      return(
           <div className="card">
               <h2> All Photos are here: {photos.length} </h2>

               {
                  photos.map(photo => <Photo key={photo.id} photo={photo}></Photo>)
               }
           </div>
      )
}