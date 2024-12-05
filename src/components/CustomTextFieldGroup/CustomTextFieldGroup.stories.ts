import { Meta, StoryObj } from '@storybook/react';
import CustomTextFieldGroup from './CustomTextFieldGroup';

const meta: Meta<typeof CustomTextFieldGroup> = {
  title: 'Components/CustomTextFieldGroup',
  component: CustomTextFieldGroup,
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomTextFieldGroup>;

export const Default: Story = {
  args: {
    id: 'text-field',
    label: 'Name',
    variant: 'standard',
    type: 'text',
  },
};

export const PasswordField: Story = {
  args: {
    id: 'password-field',
    label: 'Password',
    variant: 'filled',
    type: 'password',
  },
};

export const EmailField: Story = {
  args: {
    id: 'email-field',
    label: 'Email',
    variant: 'outlined',
    type: 'email',
  },
};
