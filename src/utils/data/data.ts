import { faker } from '@faker-js/faker';

interface ISocialItem {
  social: string;
  type: 'fas' | 'fab';
  icon: string;
  link: string;
}

interface INavigationItem {
  title: string;
  url: string;
}

export const socialMediaList: ISocialItem[] = [
  {
    social: 'Instagram',
    type: 'fab',
    icon: 'instagram',
    link: 'https://www.instagram.com/',
  },
  {
    social: 'Facebook',
    type: 'fab',
    icon: 'facebook-f',
    link: 'https://www.facebook.com/',
  },
  {
    social: 'Blog',
    type: 'fas',
    icon: 'fa-house',
    link: 'https://siewypowiem.pl'
  }
]

export const navigationList: INavigationItem[] = [
  {
    title: faker.lorem.word(),
    url: faker.internet.url()
  },
  {
    title: faker.lorem.word(),
    url: faker.internet.url()
  },
  {
    title: faker.lorem.word(),
    url: faker.internet.url()
  },
]