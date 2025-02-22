import {Meta, StoryObj} from '@storybook/react';
import Props from './News.props';
import News from '.';
import { usecase_default } from '@/app/components/Carousel/Carousel.usecase';

const meta: Meta<Props> = {
  component: News,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {...usecase_default},
};
