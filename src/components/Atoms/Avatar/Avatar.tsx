import { faker } from '@faker-js/faker';
import { StyledAvatar } from './Avatar.styles.ts';

const Avatar = () => {
  return(
    <div>
      <StyledAvatar src={faker.image.avatar()} alt={''} />
    </div>
  )
}

export default Avatar