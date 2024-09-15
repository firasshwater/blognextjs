import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export default function Page({ params }: { params: { id: string } }) {
  const post1 = posts.find((post01) => post01.id === params.id);
  return (
    <>
      <h1>Post</h1>
      <Post {...post1} />
    </>
  );
}