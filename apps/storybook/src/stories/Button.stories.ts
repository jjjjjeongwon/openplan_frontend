import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@repo/ui';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '다음',
  },
};
