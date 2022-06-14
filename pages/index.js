import Link from 'next/link';
import { Card } from './components/card/card';

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.punkapi.com/v2/beers`)
  const data = await res.json()

  return {
    props: {data},
  }
}

const Page = (props) => {
  const beers = props.data;

  return (
    <div>
      <h1>PUNK API</h1>
      {beers.map((beer) => {
        return (
          <Card
            key={beer.id}
            name={beer.name}
            description={beer.tagline}
            image={beer.image_url}
            link={'/beers/' + beer.name.toLowerCase().split(" ").join("_")}
          />
        );
      })}
    </div>
  )
}

export default Page;
