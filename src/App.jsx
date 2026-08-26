import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>James Ash's React Deployment Assessment</h1>

      <p>
        This React application was created with Vite and will be deployed
        using GitHub Pages.
      </p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>

      <p>Button clicked: {count} times</p>
    </main>
  )
}

export default App