import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Projetos from './paginas/Projetos';
import Impressao3D from './paginas/Impressao3D';
import Contato from './paginas/Contato';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/impressao3d" element={<Impressao3D />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
