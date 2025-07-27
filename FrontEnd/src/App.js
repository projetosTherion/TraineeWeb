import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarrinhoProvider } from './contexts/CarrinhoContext';

// Importações de componentes
import Header from './components/Header';
import Footer from './components/Footer';

// Importações de páginas
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Projetos from './paginas/Projetos';
import Contato from './paginas/Contato';
import Impressao3D from './paginas/Impressao3D';
import Carrinho from './paginas/Carrinho';

function App() {
  return (
    <CarrinhoProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/impressao3d" element={<Impressao3D />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <Footer />
      </Router>
    </CarrinhoProvider>
  );
}

export default App;