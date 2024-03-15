import Socials from '../../Molecules/Socials/Socials.tsx';
import { StyledHeader } from './Header.styles.ts';
import Title from '../../Atoms/Title/Title.tsx';
import { forwardRef } from 'react';

const Header = forwardRef<HTMLElement>((_props, ref) => {
  return(
    <StyledHeader ref={ref}>
      <Title content={'I am Jillian'} />
      <Socials />
    </StyledHeader>
  )
})

export default Header;