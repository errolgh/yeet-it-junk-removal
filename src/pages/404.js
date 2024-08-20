import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Button from '../components/Button';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  textAlign: 'center',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  // maxWidth: 320,
  textAlign: 'center',
};

const paragraphStyles = {
  marginBottom: 48,
};
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }

const NotFoundPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />

              <br />
            </>
          ) : null}
          <br />
          <Link to="/">
            <Button order="primary">Home</Button>
          </Link>
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Not found</title>
    <meta name="theme-color" content="#000000" />
  </>
);
