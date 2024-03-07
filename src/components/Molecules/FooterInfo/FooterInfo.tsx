import Icon from '../../Atoms/Icon/Icon.tsx';
import { faker } from '@faker-js/faker';

const FooterInfo = () => {
  return(
    <div>
      <Icon type={'fas'} icon={'fa-at'} />
      <a href=''>{faker.internet.email()}</a>
    </div>
  )
}

export default FooterInfo;