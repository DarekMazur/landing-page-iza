import Header from './components/Organisms/Header/Header.tsx';
import Navigation from './components/Organisms/Navigation/Navigation.tsx';
import AvatarSeparator from './components/Organisms/AvatarSeparator/AvatarSeparator.tsx';
import FromInsta from './components/Organisms/FromInsta/FromInsta.tsx';
import Footer from './components/Organisms/Footer/Footer.tsx';
import { GlobalStyle } from './utils/styles/GlobalStyle.ts';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Navigation />
      <AvatarSeparator />
      <FromInsta />
      <Footer />
    </>
  )
}

export default App
