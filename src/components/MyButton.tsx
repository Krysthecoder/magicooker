import { MyButtonProps } from './types';

const MyButton: React.FC<MyButtonProps> = ({
  onClick,
  children,
  disabled,
  className,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
};

export default MyButton;
