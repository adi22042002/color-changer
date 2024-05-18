
import { useState } from 'react';
import './App.css';

function App() {
const [color, setColor] = useState("olive")
  return (
  <div className='w-full h-screen duration-200'
  style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'> 
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
<div class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
  <button onClick={()=>setColor("black")}
    type="button"
    class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    black
  </button>
  <button onClick={()=>setColor("yellow")}
    type="button"
    class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
  >
    yelllowish brown
  </button>
  <button onClick={()=>setColor("red")}
    type="button"
    class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
  >
    red
  </button>
  <button onClick={()=>setColor("")}
    type="button"
    class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    green
  </button>
</div>

</div>
    </div>
    

  </div>
  

 
    
  );
}

export default App;
