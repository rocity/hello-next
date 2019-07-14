import Layout from '../comps/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const ShowLink = ({show}) => (
  <li key={show.id}>
    <Link href="/p/[pid]" as={`/p/${show.id}`}>
      <a>{show.name}</a>
    </Link>

    <style jsx>{`
      a {
        color: red;
      }
    `}</style>
  </li>
)

const Index = (props) => (
  <Layout>
    <h1>Shows</h1>

    <ul>
      {props.shows.map(show => (
        <ShowLink key={show.id} show={show}></ShowLink>
      ))}
    </ul>

    <style jsx>{`
      h1, a {
        font-family: 'Arial';
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Data: ${data.length}`);
  return {
    shows: data.map(entry => entry.show),
  }
}

export default Index;
