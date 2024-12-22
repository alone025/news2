import { baseUrl, fetchPost, fetchPosts } from "@/utils/api";
import PostContent from "@/components/post/PostContent";
import Head from "next/head";

// Generate static paths
export async function generateStaticParams() {
    const posts = await fetchPosts();
    return posts.map((post) => ({
        slug: post._id,
    }));
}

// Server component
export default async function PostPage({ params }) {
    const { slug } = params;
    const post = await fetchPost(slug);

    return <>
        <Head>
            <title>{post.title}</title>
            <meta name="description" content={post?.subtitle} />
            <meta property="og:title" content={post?.title} />
            <meta property="og:description" content={post?.subtitle} />
            <meta property="og:image" content={`${baseUrl}/photos/${post?.image}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={post?.title} />
            <meta name="twitter:description" content={post?.subtitle} />
            <meta name="twitter:image" content={`${baseUrl}/photos/${post?.image}`} />
        </Head>
        <PostContent initialData={post} slug={slug} />
    </>;
}
