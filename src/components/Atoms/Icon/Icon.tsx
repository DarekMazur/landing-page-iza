import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { StyledIcon } from './Icon.styles.ts';

const Icon = ({icon, type}: {type: 'fas' | 'fab', icon: IconName}) => {
  <StyledIcon>
    <FontAwesomeIcon icon={[type, icon]} />
  </StyledIcon>
}

export default Icon;