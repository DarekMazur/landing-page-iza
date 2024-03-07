import { faker } from '@faker-js/faker';

const Avatar = () => {
  return(
    <div>
      <img src={faker.image.avatar()} alt={''} />
    </div>
  )
}

export default Avatar