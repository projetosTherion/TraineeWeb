import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LogoTherion from "../../../images/logoBranca.svg";

export default function Logo() {
  const ref = useRef(null);

  useEffect(() => {
    const paths = ref.current.querySelectorAll("path");

    paths.forEach((path) => {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        fillOpacity: 0
      });
    });

    gsap.timeline()
      .to(paths, {
        strokeDashoffset: 0,
        duration: 1.5,
        stagger: 0.15
      })
      .to(paths, {
        fillOpacity: 1,
        duration: 0.6,
        stagger: 0.1
      }, "-=0.4");

  }, []);

  return (
    <img src={LogoTherion} ref={ref}/> 
  );
}
