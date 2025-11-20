import './Footer.css';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Coluna Redes Sociais com Logo */}
                <div className="footer-column footer-first-column"> {/* Adicionei classe extra */}
                    <div className="footer-logo-container">
                        <img 
                            src="/images/logoBranca.webp" alt="Therion Empresa Júnior" className="footer-logo" loading="lazy" style={{ maxHeight: '125px' }}  // Otimização de carregamento
                        />
                    </div>
                    <h4>REDES SOCIAIS</h4>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/therion.ej/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.simpleicons.org/instagram/FFFFFF" alt="Instagram" width="32" height="32" />
                        </a>
                        <a href="https://www.linkedin.com/company/therion/?originalSubdomain=br" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt="LinkedIn" width="32" height="32" />
                        </a>
                        <a href="https://www.facebook.com/therionej" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.simpleicons.org/facebook/FFFFFF" alt="Facebook" width="32" height="32" />
                        </a>
                        </div>
                    </div>

                {/* Coluna Contato */}
                <div className="footer-column">
                    <h4>CONTATO</h4>
                    <p>R Marcilio Dias 635, Apucarana,</p>
                    <p>Paraná 86812-382, BR</p>
                    <p>Telefone: (12) 99635-3758</p>
                    <p>Email: <a href="mailto:contato@therion.org">contato@therionej.com.br</a></p>
                </div>

                {/* Coluna Links Rápidos */}
                <div className="footer-column">
                    <h4>LINKS RÁPIDOS</h4>
                    <ul className="footer-links">
                        <li><a href="/sobre" target="_blank" rel="noopener noreferrer">Sobre nós</a></li>
                        <li><a href="/projetos" target="_blank" rel="noopener noreferrer">Serviços</a></li>
                        {/*<li><a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">Política de Privacidade</a></li>*/}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 | Desenvolvido pela Therion Empresa Júnior.</p>
            </div>
        </footer>
    );
}

export default Footer;
