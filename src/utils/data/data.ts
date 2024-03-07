interface ISocialProps {
  social: string;
  type: 'fas' | 'fab';
  icon: string;
  link: string;
}

export const socialMediaList: ISocialProps[] = [
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