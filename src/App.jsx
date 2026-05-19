
import './App.css';
import Counter from './counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';
import Photos from './Photos';
import Players from './Players'
import { Suspense } from 'react';



//2way promise
// const fetchUsers = fetch ('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())


// const fetchFriends = async() => {
//       const res = await fetch('https://jsonplaceholder.typicode.com/users');
      
//       return res.json();

// }


// const fetchPosts = async() => {
//       const res=  await fetch('https://jsonplaceholder.typicode.com/posts')
//       return res.json()
// } 


const fetchPhotos = async() => {
     const res=  await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
     return  res.json();
}
function App() {
//     const friendsPromise = fetchFriends();
      //  const postsPromise = fetchPosts();
         const photosPromise = fetchPhotos();
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
            <Players></Players>

              <Suspense fallback={<h4>Photos are coming...</h4>}>
                 <Photos photosPromise={photosPromise}></Photos>
              </Suspense>

               {/* <Suspense fallback={<h4>Posts are coming....</h4>}>
                    <Posts postsPromise={postsPromise}></Posts>
               </Suspense> */}
               {/* <Suspense fallback={<h3>Loading...</h3>}>
                    <Users fetchUsers={fetchUsers}></Users>
               </Suspense> */}

               {/* <Suspense fallback={<h3>Friends are coming for treat</h3>}>
                  <Friends friendsPromise={friendsPromise}></Friends>
               </Suspense> */}

              
              <Batsman></Batsman>
              <Counter></Counter>
       
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
