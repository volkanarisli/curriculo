import { getSingleBlogPost } from "../../../utils/notion"
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import styles from '../../../assets/styles/markdown.module.scss'
import { useRouter } from "next/router";

const Post = ({ markdown, post }) => {
    const router = useRouter()

    return (
        <div className={styles.markdown}>
            <Head>
                <title>{post.title}</title>
                <meta name={"description"} title={"description"} content={post.description} />
                <meta property="og:title" title={"og:title"} content={post.title} />
                <meta property="og:description" title={"og:description"} content={post.description} />
                <meta property="og:image" title={"og:image"} content={post.cover} />
                <meta property="og:url" content={`https://www.curriculo.design${router.asPath}`} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://www.curriculo.design${router.asPath}`} />
                <meta property="twitter:title" content={post.title} />
                <meta property="twitter:description" content={post.description} />
                <meta property="twitter:image" content={post.cover} />
            </Head>

            <div className="min-h-screen">
                <main className="max-w-5xl p-5 mx-auto relative">
                    <div className="flex items-center justify-center">
                        <article className="prose">
                            <ReactMarkdown>{markdown}</ReactMarkdown>
                        </article>
                    </div>
                </main>
            </div>


        </div>
    )
}

export const getServerSideProps = async (context) => {
    const p = await getSingleBlogPost(context.params?.slug)

    if (!p) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            markdown: p.markdown,
            post: p.post
        },
    }
}
export default Post;