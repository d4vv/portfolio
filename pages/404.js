import Head from 'next/head'
import Link from 'next/link'

export default function FourOhFour() {
  return 
  <>
    <Head>
      <title>Dawid Mejster Portfolio - 404</title>
      <meta name="description" content="Page not found" />
    </Head>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}
