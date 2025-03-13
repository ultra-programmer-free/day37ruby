import type { Meta, StoryObj } from '@storybook/react';
import { TodoTable } from './index';

const meta: Meta<typeof TodoTable> = {
  title: 'Components/TodoTable',
  component: TodoTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    todoList: [
      {
        id: "12345",
        task: "掃除",
        person: "山田太郎",
        deadline: "2024-09-10",
      },
      {
        id: "4567",
        task: "洗濯",
        person: "田中太郎",
        deadline: "2024-09-12",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof TodoTable>;

export const Default: Story = {};