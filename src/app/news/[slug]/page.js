import { baseUrl, fetchPost, fetchPosts } from "@/utils/api";
import PostContent from "@/components/post/PostContent";
import Loader from "@/components/loader";

// Generate static paths
export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({
    slug: post._id,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await fetchPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      images: [
        {
          url: `${baseUrl}/photos/${post.image}`,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
      images: [`${baseUrl}/photos/${post.image}`],
    },
  };
}

// Server component
export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await fetchPost(slug);

  return (
    <PostContent initialData={post} slug={slug} />
  );
}
