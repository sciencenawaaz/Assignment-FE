import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { Home } from "./Pages";

function App() {

  return (
    <BrowserRouter>
   <header className = "w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <Link to = "/">
    <h1 className=' text-2xl border border-black p-2 border-l-2 border-b-2 rounded-lg hover:duration-500 hover:ease-in-out hover:text-white hover:bg-slate-900 hover:cursor-default'>
      Home
    </h1>
    </Link>

   </header>
   <main className = "sm: p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
    <Routes>
      <Route  path= "/" element= { <Home/>} />
    </Routes>
   </main>
   </BrowserRouter>
  
  )
}

export default App
