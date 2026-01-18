import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const headerItems = [
    { to: "/", label: "Home" },
    { to: "/sobre", label: "Sobre Nós" },
    { to: "/projetos", label: "Projetos" },
    { to: "/impressao3d", label: "Impressão 3D" },
    { to: "/contato", label: "Contato" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        setIsSticky(!entry.isIntersecting)
      }, 
      { root: null, threshold: 0 }
    );
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => observer.disconnect();
  }, [])

  return (
    <>
      <div ref={sentinelRef} className="size-[0.1px]"/>
      <header className={`transition-all duration-300 ease-in-out bg-[#FF5991] max-h-[60px] h-[60px] py-[clamp(10px,3vw,15px)] z-40 w-full top-0 shadow-[0_2px_10px_rgba(0,0,0,0.1)] fixed
        ${isSticky && "scale-95 rounded-3xl"}`}>
        <div className="flex justify-between items-center px-[clamp(8px,4vw,32px)] w-full h-full">
          {/* Logo */}
          <Link to="/">
            <img 
              src="/images/logoBranca.webp" 
              alt="Logo Therion" 
              className="size-8 transition-transform duration-300 ease-in-out hover:scale-105" 
            />
          </Link>
          {/* Menu de navegação */}
          <nav className="flex">
            <ul className="flex list-none gap-[clamp(12px,4vw,36px)] m-0 p-0 max-[900px]:flex-col">
              {headerItems.map((item, index) => (
                <li key={index}>
                <Link 
                  to={item.to} 
                  className="text-white no-underline text-lg font-medium py-[5px] px-0 relative transition-colors duration-300 ease-in-out hover:text-[#F5CBD9] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F5CBD9] after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full max-[900px]:text-[clamp(1rem,4vw,1.2rem)] max-[900px]:py-[clamp(6px,2vw,12px)] max-[900px]:w-full max-[900px]:text-center max-[900px]:rounded-lg max-[900px]:transition-[background] max-[900px]:duration-200 max-[900px]:hover:bg-white/[0.08]"
                >
                  {item.label}
                </Link>
              </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;