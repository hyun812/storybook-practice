import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: '버튼1',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: '버튼2',
  },
};
