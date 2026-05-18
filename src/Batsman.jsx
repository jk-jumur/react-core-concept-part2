import { useState } from "react"

export default function Batsman(){
     const [runs, setRuns] = useState(0);
      const [sixes, setSixes] = useState(0);
     const handleSingle = () => {
         const updatedRuns = runs + 1;
         setRuns (updatedRuns)
     }

     const handleFour = () => {
         const updatedRuns = runs + 4;
      
          setRuns(updatedRuns);
     }

     const handleSix = () =>{
           const updateRuns = runs + 6;
              const updatedSixes = sixes + 1;
              setSixes(updatedSixes);
             setRuns(updateRuns);
     }
      return(
           <div>
               <h3>Player: Bangla Batsman</h3>
               <p><small>Six: {sixes}</small></p>
               <h1>Score: {runs}</h1>

               {
                   runs > 50 && <p>You score: 50</p>
               }
               <button onClick={handleSingle}>singles</button>
               <button onClick={handleFour}>Four</button>
               <button onClick={handleSix}>Six</button>
           </div>
      )
}