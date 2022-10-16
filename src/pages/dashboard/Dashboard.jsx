import BestSeller from './BestSeller';
import Category from './Category';
import Menu from './Menu';
import Popular from './Popular';
import Promo from './Promo';

const Dashboard = () => {
  return (
    <section className='py-6 md:px-3 lg:px-6  2xl:px-8'>
      <Menu />
      <Category />
      <Popular/>
      <BestSeller />
      <Promo />
    </section>
  );
};

export default Dashboard;
