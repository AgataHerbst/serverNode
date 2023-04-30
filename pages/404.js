import Link from 'next/link';
import s from '../styles/error.module.css';

export default function ErrorPage(){
    return (
        <>
        <h1 className={s.error}>Error 404</h1>
        <p>Please <Link legacyBehavior href='/'><a>go back </a></Link> to safety</p>
        </>
    )
}