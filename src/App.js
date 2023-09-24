import './App.css';
import { callApiUsingAxios } from './Request/Request';
import { useEffect } from 'react';

function App() {
   const getData  = async() => {
let id = 1
     let response = await callApiUsingAxios('posts' ,'DELETE',id, true, true);
     console.log('response >>>>>' , response);
   } 

   useEffect(()=> {
        getData();
   },[])

  return (
    <div className="App">
 
        <h1>create react app</h1> 

    </div>
  );
}

export default App;
