import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledIcon } from './Icon.styles.ts';
import { IconName } from '@fortawesome/free-solid-svg-icons';

const Icon = ({icon, type, size, padding}: {type: 'fas' | 'fab', icon: string, size?: number, padding?: string}) => {
  return(
    <StyledIcon $size={size} $padding={padding}>
      <FontAwesomeIcon icon={[type, icon as IconName]} />
    </StyledIcon>
    )
}

export default Icon;
