import Icon from '../../Atoms/Icon/Icon.tsx';
import { StyledFooterInfo } from './FooterInfo.styles.ts';

const FooterInfo = () => {
  return(
    <StyledFooterInfo>
      <a href={`mailto:${import.meta.env.VITE_IG_EMAIL}`}>
        <Icon type={'fas'} icon={'fa-at'} size={1.3} />
        {import.meta.env.VITE_IG_EMAIL}
      </a>
    </StyledFooterInfo>
  )
}

export default FooterInfo;