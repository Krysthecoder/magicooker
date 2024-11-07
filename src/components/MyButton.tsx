import { IMyButtonProps } from './types';

const MyButton: React.FC<IMyButtonProps> = ({
  onClick,
  children,
  disabled
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default MyButton;
