import Button from '../../Atoms/Button/Button.tsx';
import { StyledNavigation } from './Navigation.styles.ts';
import { navigationList } from '../../../utils/data/data.ts';
import { forwardRef } from 'react';

const Navigation = forwardRef<HTMLElement>((_props, ref) => {
  return(
    <StyledNavigation ref={ref}>
      {navigationList.map(navigationItem => (
        <Button key={navigationItem.title} title={navigationItem.title} target={navigationItem.url}/>
      ))}
    </StyledNavigation>
  )
})

export default Navigation