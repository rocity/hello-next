import Layout from '../comps/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>Blog</h1>

    <ul>
      <PostLink title="Hello summit!"></PostLink>
      <PostLink title="Hello C2!"></PostLink>
      <PostLink title="Hello Cricket!"></PostLink>
    </ul>
  </Layout>
)

export default Index;
