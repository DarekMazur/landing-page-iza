import { faker } from '@faker-js/faker';

const Image = () => {
  return(
    <img src={faker.image.urlLoremFlickr()} alt="" />
  )
}

export default Image