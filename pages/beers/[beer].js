export default function beer(props) {
  return <h1>{props.id}</h1>
}

export async function getStaticPaths() {
  const res = await fetch(`https://api.punkapi.com/v2/beers`);
  const data = await res.json();

  const beerSlugs = data.map((beer) => {
    return {
      params: {
        beer: beer.name.toLowerCase().split(" ").join("_")
      }
    }
  });

  return {
    paths: beerSlugs,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${params.beer}`);
  const data = await res.json();
  const beer = data[0];

  return {
    props: beer,
  }
}
