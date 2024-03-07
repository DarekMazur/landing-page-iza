import Icon from '../../Atoms/Icon/Icon.tsx';
import { socialMediaList } from '../../../utils/data/data.ts';

const Socials = () => {

  return(
    <>
      {socialMediaList.map(({ social, type, icon, link }) =>
        <a href={link}><Icon key={social} type={type} icon={icon} /></a>
      )}
    </>
  )
}

export default Socials;