import Image from 'next/image';
import Link from 'next/link';

import * as S from './card.styles';

export const Card = ({ name, description, image, link }) => {
  return (
    <S.Container>
      <h1>{name}</h1>
      <p>{description}</p>
      <Image src={image} alt={name} width={500} height={400}/>
      <Link href={link}>Go</Link>
    </S.Container>
  )
}
