import type { Meta, StoryObj } from '@storybook/react';

import Login from './Login';

const meta: Meta<typeof Login> = {
  title: 'Components/Login',
  component: Login,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Login>;

export const LoginForm: Story = {};
