import { StyledAvatar } from './Avatar.styles.ts';
import avatar from '../../../assets/author.jpg'

const Avatar = () => {
  return(
    <div>
      <StyledAvatar src={avatar} alt={''} />
    </div>
  )
}

export default Avatar