export default function Post({post}){
     const {title, body} = post
      return(
          <div className="card">
            {/* <h5>{post.title}</h5>
              <p>{post.body}</p> */}

              <h5>{title}</h5>
              <p>{body}</p>
          </div>
      )
}