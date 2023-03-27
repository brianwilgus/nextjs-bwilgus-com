import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

const pageTitle = "404 page not found";

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Sorry, {pageTitle}.</p>
            </section>
        </Layout>
    );
}
