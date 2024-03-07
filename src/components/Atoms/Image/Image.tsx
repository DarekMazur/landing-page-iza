import { faker } from '@faker-js/faker';
import { StyledImage } from './Image.styles.ts';

const Image = () => {
  return(
    <StyledImage src={faker.image.urlLoremFlickr()} alt="" />
  )
}

export default Image