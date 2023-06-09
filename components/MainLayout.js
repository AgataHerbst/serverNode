import Link from 'next/link';
import Head from 'next/head';

export default function MainLayout({ children, title = 'Next App' }) {
    return (
        <>
        <Head>
        <title>{title} | Next Course</title>
        <meta name='keywords' content='next,js,react'/>
        <meta name='description' content='this is youtube tutorial for next'/>
        <meta charSet='utf-8' />
        </Head>
            <nav>
                <Link legacyBehavior href={'/'}><a>Home</a></Link>
                <Link legacyBehavior href={'/about'}><a>About</a></Link>
                <Link legacyBehavior href={'/posts'}><a>Posts</a></Link>
                <Link legacyBehavior href={'/galleries'}><a>Galleries</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
       nav {
        position: fixed;
        height: 60px;
        left: 0;
        top: 0;
        right: 0;
        background: #FFE4E1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        }
          nav a {
           color: #808080;
           font-weight: bold;
           font-size: 20px;
           text-decoration: none;
          }
          main {
            margin-top: 60px;
            padding: 1rem;
          }
`}</style>
        </>
    )

}