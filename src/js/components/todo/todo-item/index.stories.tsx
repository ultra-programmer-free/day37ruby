import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TodoItem } from './index';
import React from 'react';
import { Table, Tbody } from '@chakra-ui/react';

const meta = {
  title: 'Components/TodoItem',
  component: TodoItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    id: "12345",
    task: "掃除",
 person: "山田太郎",
 deadline: "2024-09-10",
    deleteTodo: fn(),
   
  },
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {
  decorators: [
    (Story) =>
    <Table>
      <Tbody> 
        <Story />,
      </Tbody>
      </Table>

  ]
};
