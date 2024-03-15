import Avatar from '../../Atoms/Avatar/Avatar.tsx';
import { SeparatorLine, StyledAvatarSeparator } from './AvatarSeparator.styles.ts';
import { forwardRef } from 'react';

const AvatarSeparator = forwardRef<HTMLElement>((_props, ref) => {
  return(
    <StyledAvatarSeparator ref={ref}>
      <Avatar />
      <SeparatorLine />
    </StyledAvatarSeparator>
  )
})

export default AvatarSeparator