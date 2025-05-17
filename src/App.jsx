import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; 
import NavbarHamburger from './components/navbar/NavbarHamburger'; 
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import Categories from './components/Categories';
import Comments from './components/Comments';
import ErrorBoundary from './components/ErrorBoundary';  // Importa el ErrorBoundary

function App() {
  const isMobile = window.innerWidth <= 768;  // Verificación si es móvil

  return (
    <div className="app-container">
      {isMobile ? <NavbarHamburger /> : <Navbar />}  {/* Navbar según sea móvil o escritorio */}
      
      <div className="content-container">
        <h1 className="page-title">Blog de Aprendizaje</h1>  {/* Título global del Blog */}

        {/* Rutas envueltas con ErrorBoundary para capturar posibles errores */}
        <Routes>
          <Route path="/" element={
            <ErrorBoundary>
              <Posts />
            </ErrorBoundary>
          } />
          <Route path="/post/:id" element={
            <ErrorBoundary>
              <PostDetail />
            </ErrorBoundary>
          } />
          <Route path="/categories" element={
            <ErrorBoundary>
              <Categories />
            </ErrorBoundary>
          } />
          <Route path="/comments" element={
            <ErrorBoundary>
              <Comments />
            </ErrorBoundary>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
