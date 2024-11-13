import { HomeProps } from './types';

const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Home;
