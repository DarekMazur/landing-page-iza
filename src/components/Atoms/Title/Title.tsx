import { StyledTitle } from './Title.styles.ts';
import { faker } from '@faker-js/faker';

const Title = () => {
  return (
    <StyledTitle>
      {faker.person.firstName() + ' ' + faker.person.lastName()}
    </StyledTitle>
  );
}

export default Title;