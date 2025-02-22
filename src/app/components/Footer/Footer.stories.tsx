import {Meta, StoryObj} from '@storybook/react';
import Footer from '.';
import Props from './Footer.props';
import {footer_usecase} from './Footer.usecase';
const meta: Meta<Props> = {
  component: Footer,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    ...footer_usecase,
  },
};
