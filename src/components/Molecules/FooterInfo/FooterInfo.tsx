import Icon from '../../Atoms/Icon/Icon.tsx';
import { faker } from '@faker-js/faker';
import { StyledFooterInfo } from './FooterInfo.styles.ts';

const FooterInfo = () => {
  return(
    <StyledFooterInfo>
      <a href="">
        <Icon type={'fas'} icon={'fa-at'} size={1.3} />
        {faker.internet.email()}
      </a>
    </StyledFooterInfo>
  )
}

export default FooterInfo;