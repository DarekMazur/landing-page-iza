import FooterInfo from '../../Molecules/FooterInfo/FooterInfo.tsx';
import FooterCopyright from '../../Atoms/FooterCopyright/FooterCopyright.tsx';
import { StyledFooter } from './Footer.styles.ts';

const Footer = () => {
  return(
    <StyledFooter>
      <FooterInfo />
      <FooterCopyright />
    </StyledFooter>
  )
}

export default Footer