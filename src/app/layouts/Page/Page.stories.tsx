import {Meta, StoryObj} from '@storybook/react';
import PageLayout from '.';
import Props from './Page.props';

const meta: Meta<Props> = {
  component: PageLayout,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    title: 'test',
    children: <div>Content</div>,
  },
};
