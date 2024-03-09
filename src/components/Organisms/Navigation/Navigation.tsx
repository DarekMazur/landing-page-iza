import Button from '../../Atoms/Button/Button.tsx';
import { StyledNavigation } from './Navigation.styles.ts';
import { navigationList } from '../../../utils/data/data.ts';

const Navigation = () => {
  return(
    <StyledNavigation>
      {navigationList.map(navigationItem => (
        <Button key={navigationItem.title} title={navigationItem.title} target={navigationItem.url}/>
      ))}
    </StyledNavigation>
  )
}

export default Navigation