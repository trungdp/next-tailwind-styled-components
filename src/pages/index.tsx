import { DefaultLayout } from '$src/layouts';
import { PrismaClient } from '@prisma/client';
import { ReactElement } from 'react';
import { Card } from '$src/components';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const posts = await prisma.post.findMany({
    select: { id: true, title: true, description: true, image: true },
  });
  return { props: { posts } };
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default function Page({ posts }: any) {
  return (
    <div className='px-6 py-8'>
      <div className='container flex justify-between mx-auto'>
        <div className='w-full'>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold text-gray-700 md:text-2xl'>
              Post
            </h1>
          </div>
          {posts && posts.map((post: any) => <Card {...post} key={post.id} />)}
        </div>
      </div>
    </div>
  );
}
