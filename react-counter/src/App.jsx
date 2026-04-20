import React from 'react'

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="container"></div>
      <div className=""><timer-container></timer-container></div>
      <h3>Count : </h3>
      <div className="btn-container"></div>
         <button>Increment</button>
         <button>Decrement</button>
         <button>Reset</button>
      App</div>
  )
}


export default App 