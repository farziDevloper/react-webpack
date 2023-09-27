
import Pending from './Pending';
import { callApiUsingAxios } from './Request/Request';
import { useEffect } from 'react';
import { Router } from './Routes';

function App() {
   const getData  = async() => {
let id = 1
     let response = await callApiUsingAxios('posts' ,'DELETE',id, true, true);
     console.log('response >>>>>' , response);
   } 

   useEffect(()=> {
        // getData();
   },[])

  return (
<>
    <Router />
</>
        

  );
}

export default App;
