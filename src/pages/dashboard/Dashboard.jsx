import BestSeller from './BestSeller';
import Category from './Category';
import Menu from './Menu';
import Popular from './Popular';
import Promo from './Promo';

const Dashboard = () => {
  return (
    <section className=''>
      <Menu />
      <Category />
      <Popular/>
      <BestSeller />
      <Promo />
    </section>
  );
};

export default Dashboard;
