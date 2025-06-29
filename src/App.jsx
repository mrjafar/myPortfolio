import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap'
import Navigation from './component/AppLayout/Navbar'
import Header from './component/UI/Header';
import About from './component/UI/About';
import Education from './component/UI/Education';
import Skills from './component/UI/Skills';
import Contact from './component/UI/Contact';
import { Toaster } from 'sonner';
import Footer from './component/AppLayout/Footer';
import { useRef } from 'react';
import gsap from 'gsap';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {

  return (<>
    <Container className='main-container'>
      <Navigation />
      <Header />
      {/* <hr /> */}
      <WaveDivider />
      <About />
      <hr />
      {/* <WaveDivider /> */}
      <Education />
      <hr />
      {/* <WaveDivider /> */}
      <Skills />
      <hr />
      {/* <WaveDivider /> */}
      <Contact />
    </Container>
    <Footer />
  </>
  )
}

export default App;


const WaveDivider = () => {
  const pathRef = useRef(null);

  const handleMouseMove = (e) => {
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY * 1.5;
    const newPath = `M 50 100 Q ${offsetX} ${offsetY} 1080 100`;

    if (pathRef.current) {
      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 0.3,
        ease: 'power3.out',
      });
    }
  };

  const handleMouseLeave = () => {
    const originalPath = 'M 50 100 Q 500 100 1080 100';

    if (pathRef.current) {
      gsap.to(pathRef.current, {
        attr: { d: originalPath },
        duration: 0.4,
        ease: "elastic.out",
      });
    }
  };

  return (
    <div className='svgPath' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <svg width="100%" height="200" viewBox="0 0 1080 200">
        <path
          ref={pathRef}
          d="M 50 100 Q 500 100 1080 100"
          stroke="white"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
};


