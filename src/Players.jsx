import { useEffect, useState } from "react"

export default function Players(){
    const [players, setPlayers] = useState([])

    useEffect(() =>{
          fetch('https://jsonplaceholder.typicode.com/albums')
          .then(res => res.json())
          .then(data => setPlayers(data))

         
    }, [])
      return (
          <div>
               <h3>Players: {players.length}</h3>
                <ol>
               {
                   players.map(player => <li>{player.title}</li>)
               }
               </ol>
          </div>
      )
}