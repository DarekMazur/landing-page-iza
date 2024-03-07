import Header from './components/Organisms/Header/Header.tsx';
import Navigation from './components/Organisms/Navigation/Navigation.tsx';
import AvatarSeparator from './components/Organisms/AvatarSeparator/AvatarSeparator.tsx';
import FromInsta from './components/Organisms/FromInsta/FromInsta.tsx';
import Footer from './components/Organisms/Footer/Footer.tsx';
import { GlobalStyle } from './styles/GlobalStyle.ts';
import { theme } from './utils/themes/theme.ts';
import { ThemeProvider } from 'styled-components';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Navigation />
      <AvatarSeparator />
      <FromInsta />
      <Footer />
    </ThemeProvider>
  )
}

export default App
