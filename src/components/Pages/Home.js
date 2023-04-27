import Featured from '../Featured/Featured';
import './home.scss';
import List from '../List/List';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
