import { AppProps } from "next/app";
import Layout from '../components/Layout';
import '../styles/globals.scss'
import Head from "next/head";
import Image from "next/image";
import NextJsImg from "../public/nextjs-cover.jpg"

const MyApp = ({ Component, pageProps } : AppProps) => (
    <Layout>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"/>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
        {/*<Image*/}
        {/*    src={NextJsImg}*/}
        {/*    width={500}*/}
        {/*    height={350}*/}
        {/*    alt="preview"*/}
        {/*    placeholder="blur"*/}
        {/*/>*/}
    </Layout>
);

export default MyApp
