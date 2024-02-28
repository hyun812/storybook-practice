import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    isLogin: true,
  },
};

export const LoggedOut: Story = {
  args: {
    isLogin: false,
  },
};
