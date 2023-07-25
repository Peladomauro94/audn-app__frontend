import './App.css'
import { Welcome } from './components/Welcome'
import { useAuth } from './contexts/authContext'

function App() {
  const {user} = useAuth()
  console.log(user)
  return (
    <Welcome/>
  )
}

export default App
