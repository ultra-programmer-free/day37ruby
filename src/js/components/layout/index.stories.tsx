import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Layout } from './index';
import React, { useEffect } from 'react';
import { useAuthStore } from '../../stores/use-auth-store';

const meta = {
  title: 'Components/Layout',
  component: Layout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    title: "TODOリスト",
   
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defalut: Story = {
  decorators: [
    (Story) => {
      const { login } = useAuthStore()
      useEffect(() => {
        login("山田太郎")
      },[])
      return <Story />
    }
  ]
}
