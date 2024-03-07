import Image from '../../Atoms/Image/Image.tsx';
import Icon from '../../Atoms/Icon/Icon.tsx';
import Heading from '../../Atoms/Heading/Heading.tsx';

const FromInsta = () => {
  return(
    <section>
      <Heading tag={'h3'}>Instagram section</Heading>
      <Image />
      Lorem <Icon type={'fas'} icon={'fa-arrow-up-right-from-square'} />
    </section>
  )
}

export default FromInsta