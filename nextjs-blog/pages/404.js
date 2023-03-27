import Layout, {siteTitle} from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

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
