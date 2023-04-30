import {useState, useEffect} from 'react';
import Head from 'next/head';
import MainLayout from '../components/MainLayout';

export default function Posts(){
    const[posts, setPosts] = useState([]);
    useEffect(() => {
async function load (){
    const response = await fetch('http://localhost:4200/posts')
    const json = await response.json()
    setPosts(json)
}
load()
    }, []);
return (
    <MainLayout>
    <Head>
        <title>Posts Page | Next Course</title>
    </Head>
    <h1>Post Page</h1>
   <pre>{JSON.stringify(posts)}</pre>
    </MainLayout>
)
}