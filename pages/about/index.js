//import React from "react";
import Router from "next/router";
import MainLayout from '../../components/MainLayout';

export default function About(){
    const linkClickHandler = () => {
Router.push('/')
    };

    return (
        <MainLayout title={'About Page'}>
    <h1>About Page</h1>
    <p>
Walk in the door and come face to face with 
a cornucopia of delicious, delectable and enticing 
treats. Lutz offers an amazing selection of cakes, tarts, tortes,
 cookies and chocolates all created using traditional European recipes
  that have been in the Lutz family for centuries. Staying true to it’s 
  Konditorei distinction, Lutz pastries are made from the highest quality
   ingredients to create unique flavors that are light and delicate.
    From seasonal specialties like Christ-Stollen and Baumkuchen to 
    whimsical hand-made marzipan treats, the variety is endless.</p>

    <button onClick={linkClickHandler}>Go back to home</button>
    <button onClick={() => Router.push('/posts')}>Go to posts</button>
       </MainLayout>
    )
}