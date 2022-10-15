import BestSeller from './BestSeller';
import Category from './Category';
import Menu from './Menu';
import Promo from './Promo';

const Dashboard = () => {
  return (
    <section className=''>
      <Menu />
      <Category />
      <BestSeller />
      <Promo />
    </section>
  );
};

export default Dashboard;
