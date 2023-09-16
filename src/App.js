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
      <header className="App-header">
        <h1>Hello World</h1> 
      </header>
    </div>
  );
}

export default App;
