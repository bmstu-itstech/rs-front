import {Meta, StoryObj} from '@storybook/react';
import Props from './Carousel.props';
import Carousel from '.';
import {usecase_default} from './Carousel.usecase';

const meta: Meta<Props> = {
  component: Carousel,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {...usecase_default},
};
