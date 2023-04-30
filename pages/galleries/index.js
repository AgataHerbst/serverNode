import Router from "next/router";
import MainLayout from '../../components/MainLayout';

export default function Galleries(){
    const linkClickHandler = () => {
Router.push('/')
    };

    return (
        <MainLayout title={'Galleries Page'}>
    <h1>Galleries Page</h1>
    <button onClick={linkClickHandler}>Go back to home</button>
    <button onClick={() => Router.push('/posts')}>Go to posts</button>
       </MainLayout>
    )
}