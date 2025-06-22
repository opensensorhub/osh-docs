import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <img src="/img/OSH-Logo-NoText.png" style={{width: 100}}/>
        <Heading as="h1" className="osh-title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="buttonrow">
          <Link to={"/docs/osh-node/introduction"} style={{ paddingRight: 10 }}>
            <button className="button-dark">OSH Node</button>
          </Link>
          <Link to={"/docs/osh-connect/introduction"}>
            <button className="button-light">OSH Connect</button>
          </Link>
        </div>
      <div style={{ paddingTop: 30 }}>
          <h2>
              What's the difference?
          </h2>
          <ul style={{ textAlign:'center', maxWidth: 700, margin: 'auto' }}>
              <li><strong>OSH Node</strong> is the Java-based server side of <strong>OpenSensorHub</strong> (commonly referred to as OSH).</li>
              <li><strong>OSH Connect</strong> is the family of client SDKs for developing data-visualization clients, data-publishing clients, and other types of client applications.</li>
          </ul>
      </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      >
      <HomepageHeader />
      <main>
    
      </main>
    </Layout>
  );
}