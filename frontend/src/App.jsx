
import './App.css'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Index from './pages/Index'
function App() {
  
  return (
<>
<BrowserRouter>
<Layout>
  <Routes>
    <Route path='/' element={<Index/>}/>
  </Routes>
</Layout>

</BrowserRouter>
</>
  )
}

export default App
