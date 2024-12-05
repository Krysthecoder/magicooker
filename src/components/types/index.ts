export interface MyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface HomeProps {
  title: string | undefined;
}

export type LoginTextFieldProps = {
  id: string;
  label: string;
  variant: string;
  type: string;
};