import Socials from '../../Molecules/Socials/Socials.tsx';
import { StyledHeader } from './Header.styles.ts';
import Title from '../../Atoms/Title/Title.tsx';

const Header = () => {
  return(
    <StyledHeader>
      <Title />
      <Socials />
    </StyledHeader>
  )
}

export default Header;