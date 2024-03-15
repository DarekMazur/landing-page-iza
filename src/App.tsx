import Header from './components/Organisms/Header/Header.tsx';
import Navigation from './components/Organisms/Navigation/Navigation.tsx';
import AvatarSeparator from './components/Organisms/AvatarSeparator/AvatarSeparator.tsx';
import FromInsta from './components/Organisms/FromInsta/FromInsta.tsx';
import Footer from './components/Organisms/Footer/Footer.tsx';
import { GlobalStyle } from './styles/GlobalStyle.ts';
import { theme } from './utils/themes/theme.ts';
import { ThemeProvider } from 'styled-components';
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const App = () => {
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const separatorRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (headerRef.current && navRef.current ) {
      gsap.fromTo([headerRef.current.children, navRef.current.children], {opacity: 0, y: '-20px', scale: 0.95}, {opacity: 1, y: '0px', scale: 1, stagger: 0.15})
    }
  })

  useGSAP(() => {
    if (separatorRef.current) {
      gsap.fromTo(separatorRef.current.children[0], {opacity: 0, scale: 0.95}, {opacity: 1, scale: 1, duration: 0.5, delay: 0.9})
      gsap.fromTo(separatorRef.current.children[1], {opacity: 0}, {opacity: 1, delay: 1.4, duration: 0.5})
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header ref={headerRef} />
      <Navigation ref={navRef} />
      <AvatarSeparator ref={separatorRef} />
      <FromInsta />
      <Footer />
    </ThemeProvider>
  )
}

export default App
