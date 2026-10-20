import './App.css'
import Container from 'react-bootstrap/Container';

//Importamos componentes de react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

import AuthProvider from './contexts/AuthContext';
import { ProtectedRoute } from './contexts/ProtectedRoute';

//Importamos el menú
import Menu from './components/Menu';

//Páginas
import Inicio from './pages/Inicio';
import Info from './pages/Info';
import CandidatosLista from './pages/CandidatosLista';
import Album from './pages/Album';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App(){

  return (
    
    <AuthProvider>
      
      <BrowserRouter>

        <Menu />

        <Container>
          <Routes>

            <Route path='/' element={<Inicio />} />
            <Route path='/info' element={<Info />} />
            <Route path='/candidatos' element={<CandidatosLista />} />
            <Route path='/album' element={<Album />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />          
            <Route path='*' element={<h1> Error 404 </h1>} />

          </Routes>
        </Container>

      </BrowserRouter>

    </AuthProvider>

  )

}

//export default App;