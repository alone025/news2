import { fetchPost, fetchPosts } from "@/utils/api";
import PostContent from "@/components/post/PostContent";

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
    
    return <PostContent initialData={post} slug={slug} />;
}
