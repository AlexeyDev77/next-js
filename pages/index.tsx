import styles from "../styles/Home.module.scss"
import Heading from "../components/Heading";
import Head from "next/head";
import Socials from "../components/Socials";
import { GetStaticProps } from "next";
import {socialType} from "../types";
import {FC} from "react";

type homeProps = {
    socials: [socialType],
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/socials`)
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { socials: data.socials },
    }
}

const Home:FC<homeProps> = ({ socials }) => (
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading text="Next.js Application"/>
        <Socials socials={socials}/>
    </div>
);

export default Home;