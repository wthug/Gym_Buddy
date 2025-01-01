import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/home'
import Sign from './pages/sign';

function App() {
  return (
    <div className="App">
      <BrowserRouter>   
        <div className='pages'>
          <Routes>
            <Route
              path="/"  
              element={<Home/>}
            />
            <Route
              path="/sign"  
              element={<Sign/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
