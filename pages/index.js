import Link from 'next/link';

import MainLayout from '../components/MainLayout';

export default function Index() {
    return (
        <MainLayout title={'Home Page'}>
           <h1>Hello Next.Js</h1>
            <p><Link legacyBehavior href={'/about'}><a>About</a></Link></p>
            <p><Link legacyBehavior href={'/posts'}><a>Posts</a></Link></p>
            <p>Lorem ipsum dolor sit amet, consectur adipisicing.</p>
        </MainLayout>
    )
}
