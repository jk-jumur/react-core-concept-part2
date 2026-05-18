
import './App.css'

function App() {
  
    function handleClick(){
         alert('I am clicked')
    }

    const handleClick3 = () => {
          alert('clicked 3')
    }

    const handleAdd5 = (num) => {
          const newNum = num + 5;
          alert(newNum);
    }
   

  return (
    <>
     
     
          <h3>Vite + React</h3>
          <button onClick={handleClick}>Click Me</button>
          <button onClick={function handleClick2(){
               alert('clicked 2')
          }}>Click Me2</button>

          <button onClick={handleClick3}>Click me 3</button>

          <button onClick={() => alert('click 4')}>click me 4</button>

          <button onClick={() => handleAdd5(30)}>Click Add 5</button>
       
     
    </>
  )
}

export default App
