import Image from '../../Atoms/Image/Image.tsx';
import Icon from '../../Atoms/Icon/Icon.tsx';
import Heading from '../../Atoms/Heading/Heading.tsx';
import { StyledFromInsta } from './FromInsta.styles.ts';

const FromInsta = () => {
  return(
    <StyledFromInsta>
      <Heading tag={'h3'}>Ostatnio na Instagramie</Heading>
      <Image />
      <a href='https://instagram.com' target={'_blank'}>Zobacz więcej <Icon type={'fas'} icon={'fa-arrow-up-right-from-square'} size={1.3} padding={'0.5rem 0'} /></a>
    </StyledFromInsta>
  )
}

export default FromInsta