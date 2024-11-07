export interface IMyButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface IHelloProps {
  title: string;
}