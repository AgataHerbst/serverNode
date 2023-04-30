import Link from 'next/link';
import MainLayout from '../components/MainLayout';

export default function Index() {
    return (
        <MainLayout title={'Home Page'}>
           <h1>Chicago's</h1>
            <p><Link legacyBehavior href={'/about'}><a>About</a></Link></p>
            <p><Link legacyBehavior href={'/posts'}><a>Posts</a></Link></p>
            <p><Link legacyBehavior href={'/galleries'}><a>Galleries</a></Link></p>
            <p>Favorite  Since 1948
           Lutz is a Chicago Bakery 
           that offers an amazing selection of cakes, 
           tarts, tortes, cookies and chocolates all created using 
           traditional European recipes that have been in the Lutz family 
           for generations.</p>
        </MainLayout>
    )
}
