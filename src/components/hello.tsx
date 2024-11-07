import { IHelloProps } from './types';

const Hello: React.FC<IHelloProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Hello;
