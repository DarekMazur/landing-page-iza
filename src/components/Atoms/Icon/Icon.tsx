import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledIcon } from './Icon.styles.ts';
import { IconName } from '@fortawesome/free-solid-svg-icons';

const Icon = ({icon, type}: {type: 'fas' | 'fab', icon: string}) => {
  return(
    <StyledIcon>
      <FontAwesomeIcon icon={[type, icon as IconName]} />
    </StyledIcon>
    )
}

export default Icon;