import Layout from '../comps/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>Blog</h1>

    <ul>
      <PostLink id="hello-summit" title="Hello summit!"></PostLink>
      <PostLink id="hello-c2" title="Hello C2!"></PostLink>
      <PostLink id="hello-cricket" title="Hello Cricket!"></PostLink>
    </ul>
  </Layout>
)

export default Index;
