import { getSingleBlogPost } from "../../../utils/notion"
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import styles from '../../../assets/styles/markdown.module.scss'

const Post = ({ markdown, post }) => {

    return (
        <div className={styles.markdown}>
            <Head>
                <title>{post.title}</title>
                <meta name={"description"} title={"description"} content={post.description} />
                <meta name={"og:title"} title={"og:title"} content={post.title} />
                <meta name={"og:description"} title={"og:description"} content={post.description} />
                <meta name={"og:image"} title={"og:image"} content={post.cover} />
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