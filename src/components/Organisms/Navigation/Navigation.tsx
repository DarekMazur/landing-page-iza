import Button from '../../Atoms/Button/Button.tsx';
import { StyledNavigation } from './Navigation.styles.ts';
import { navigationList } from '../../../utils/data/data.ts';

const Navigation = () => {
  return(
    <StyledNavigation>
      {navigationList.map(navigationItem => (
        <a key={navigationItem.title} href={navigationItem.url} target={'_blank'}><Button title={navigationItem.title}/></a>
      ))}
    </StyledNavigation>
  )
}

export default Navigation