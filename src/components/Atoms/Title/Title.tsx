import { StyledTitle } from './Title.styles.ts';
import { TextPlugin } from "gsap/TextPlugin";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { FC, useRef } from 'react';

gsap.registerPlugin(TextPlugin);

interface ITitleTypes {
  firstName: string;
  surnameFirst: string;
  surnameLast: string;
  suffix: string
}

const Title: FC<ITitleTypes> = ({firstName, surnameFirst, surnameLast, suffix}) => {
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const surnameLastRef = useRef(null);
  const suffixRef = useRef(null);

  useGSAP(() => {
    gsap.to(suffixRef.current, {
      display: 'inline-block',
      delay: 1.7,
      duration: 0.1,
    });
    gsap.to(suffixRef.current, {
      opacity: 1,
      delay: 3.5,
      duration: 0.5,
    });
  })

  useGSAP(() => {
    gsap.set([suffixRef.current], {
      display: 'none',
      opacity: 0,
    })
    gsap.to(nameRef.current, {
      delay: 1.5,
      duration: 1,
      text: {
        value: firstName.split('')[0],
      }
    })
    gsap.to(surnameRef.current, {
      delay: 1.5,
      duration: 1,
      text: {
        value: surnameFirst.split('')[0],
      }
    })
    gsap.to(surnameLastRef.current, {
      delay: 1.5,
      duration: 1,
      text: {
        value: surnameLast.split('')[0],
      }
    })
    gsap.to(surnameRef.current, {
      delay: 2.3,
      duration: 0.3,
      text: {
        value: surnameFirst.split('')[0].toLowerCase(),
      }
    })
    gsap.to(surnameLastRef.current, {
      delay: 2.4,
      duration: 0.5,
      text: {
        value: surnameLast.split('')[0].toLowerCase(),
      }
    })
  })

  return (
    <StyledTitle>
      <span ref={nameRef}>{firstName}</span> <span ref={surnameRef}>{surnameFirst}-</span><span
      ref={surnameLastRef}>{surnameLast}</span> <span ref={suffixRef}>{suffix}</span>
    </StyledTitle>
  );
}

export default Title;