import Icon from '../../Atoms/Icon/Icon.tsx';

export interface ISocialProps {
  social: string;
  type: 'fas' | 'fab';
  icon: string;
  link: string;
}

const Socials = () => {
  const socialsList: ISocialProps[] = [
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
      icon: 'house-solid',
      link: 'https://siewypowiem.pl'
    }
  ]
  return(
    <>
      {socialsList.map(({ social, type, icon }) => {
        <Icon key={social} type={type} icon={icon} />
      })}
    </>
  )
}

export default Socials;