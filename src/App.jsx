import './App.css';
import axios from 'axios';

function App() {
  
  axios.get('https://dummyjson.com/products')
    .then(res => res.data)
    .then(console.log)
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
    <h1>Project Setup</h1>
    </>
  )
}

export default App
