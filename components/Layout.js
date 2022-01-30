import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Crypto Tracker' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='header'>
       
        <h1>Understanding Blockchain and its correlation to Cryptocurrency</h1>

          <h2> (Project tool 1) </br><h2>
        <Link href='/' passHref>
          <a>
            <svg
              width='675'
              height='375'
              viewBox='0 0 675 375'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='coin_logo'
            >
              <defs>
     
                <linearGradient
                  id='paint0_linear'
                  x1='348.75'
                  y1='5'
                  x2='348.75'
                  y2='250'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#06F0FF' />
                  <stop offset='1' stopColor='#00FFFF' />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div> 
  );
};

export default Layout;
