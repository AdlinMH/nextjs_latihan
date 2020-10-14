import Head from 'next/head'
import Link from 'next/Link'

import styles from './layout.module.css'

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>)
}

export default Layout