import Footer from '$src/components/common/Footer';
import Header from '$src/components/common/Header';

export default function Default({ children }: any) {
  return (
    <div className='text-center'>
      <div className='overflow-x-hidden bg-gray-100'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
