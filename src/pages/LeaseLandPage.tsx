import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LandForLeaseHome from '@/components/LandForLeaseHome';

const LeaseLandPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-8">
        <LandForLeaseHome />
      </main>
      <Footer />
    </div>
  );
};

export default LeaseLandPage;