import { ReactNode } from 'react';
import { StyledWrapper } from './Wrapper.styles.ts';

const Wrapper = ({children}: {children: ReactNode}) => {
  return(
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper