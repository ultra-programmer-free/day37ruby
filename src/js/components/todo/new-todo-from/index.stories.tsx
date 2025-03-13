import type { Meta, StoryObj } from '@storybook/react';
import { NewTodoForm } from './index';

const meta: Meta<typeof NewTodoForm> = {
  title: 'Components/NewTodoForm',
  component: NewTodoForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof NewTodoForm>;

export const Default: Story = {};