import { DefaultLayout } from '$src/layouts';
import { ReactElement } from 'react';

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default function Page() {
  return <div className='py-12 text-center'>This is contact</div>;
}
