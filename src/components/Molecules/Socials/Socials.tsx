import Icon from '../../Atoms/Icon/Icon.tsx';
import { socialMediaList } from '../../../utils/data/data.ts';
import { StyledSocials } from './Socials.styles.ts';

const Socials = () => {

  return(
    <StyledSocials>
      {socialMediaList.map(({ social, type, icon, link }) =>
        <a key={social} href={link} target={'_blank'}><Icon type={type} icon={icon} /></a>
      )}
    </StyledSocials>
  )
}

export default Socials;