import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #222'
};

const Layout = props => (
  <div style={layoutStyle}>
    <h1>LAYOUT</h1>
    <Header />
    {props.children}
  </div>
)

export default Layout;
