
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CharacterDetail from './componnets/CharacterDetail';
import Characters from './componnets/Characters';


function App() {

  return (
    <>
      <Router> 
        <Routes>
          <Route path="*" element={<Characters/>}/>
          <Route path="/character/:id" element={<CharacterDetail/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App
