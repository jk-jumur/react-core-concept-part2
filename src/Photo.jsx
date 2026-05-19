export default function Photo({photo}){
    const{title, url} = photo
      return(
           <div className="photo-card">
                 <h4>{title}</h4>
                 <img src={`https://picsum.photos/id/${photo.id}/150/150`} alt={title}  className="photo-img"/>
           </div>
      )
}