import { ChatContext } from './context/ChatProvider';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

function App() {
  const {usuario}= React.useContext(ChatContext)
  return usuario !== null?(
    <div className="App">
      <Navbar/>
      
      {
        usuario.estado?(
          <Chat/>
        ):(
          <div className='lead text-center mt-5'>
            Debes Iniciar Sesion
          </div>
          
        )
      }
      
    </div>
  ): (
    <div>
      cargando...
    </div>
  )
}

export default App;
