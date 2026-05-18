import { useState } from "react"

export default function Counter(){

      const [count, setCount] = useState(0)

      const handleAdd = () => {
        //   console.log('add button clicked')
        //    setCount(5)
           const newCount = count + 1;
           setCount(newCount);
      }
      const countStyle = {
          border: '3px solid yellow'
      }
      return(
          <div style={countStyle}>
               <h3>Count: {count}</h3>
               <button onClick={handleAdd}>Add</button>
          </div>
      )
}