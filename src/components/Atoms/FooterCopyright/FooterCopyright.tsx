import { StyledFooterCopyright } from './FooterCopyright.styles.ts';

const FooterCopyright = () => {
  const getYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  return(
    <StyledFooterCopyright>{getYear()} &copy; IAM</StyledFooterCopyright>
  )
}

export default FooterCopyright
