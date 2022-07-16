import { getPublishedBlogPosts } from "../../utils/notion"
import Head from "next/head"
import BlogCard from "../../components/blog/BlogCard"


const Blog = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Curriculo Blog - Let&lsquo;s Find a Job Together</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="blog" />
                <meta property="og:description" content="All in one place for everything job related" />
                <meta property="og:site_name" content="Curriculo" />
                <meta property="og:image" content="https://www.curriculo.design/meta.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.curriculo.design/" />
                <meta property="twitter:title" content="Curriculo.design" />
                <meta property="twitter:image" content="https://www.curriculo.design/meta.png" />
            </Head>
            <div className="relative bg-gray-50 h-screen pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3" />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the <span className="bg-yellow-300">blog</span></h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">

                            Our blog section on creating cover letters and finding jobs is here to help you every step of the way. From writing an effective cover letter to acing your job interview, we&lsquo;ve got you covered. Check out our latest articles below.
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {posts.map((post, index) => (
                            <>
                                <BlogCard post={post} />
                            </>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}


export const getServerSideProps = async (context) => {
    const posts = await getPublishedBlogPosts()
    return {
        props: {
            posts
        }
    }
}
export default Blog