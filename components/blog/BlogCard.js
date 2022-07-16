import dayjs from "dayjs"
import Link from "next/link"

const BlogCard = ({ post }) => {
    return (
        <Link href={`/blog/post/${post.slug}`}>
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition hover:scale-105">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={post.cover} alt={post.description} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <a href={`/blog/post/${post.slug}`} className="hover:underline">
                                {post.title}
                            </a>
                        </p>
                        <a href={`/blog/post/${post.slug}`} className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                            <p className="mt-3 text-base text-gray-500">{post.description}</p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="ml-3">
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime={dayjs(post.date).format('DD/MM/YYYY')}>{dayjs(post.date).format('DD/MM/YYYY')}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard