import {Meta, StoryObj} from '@storybook/react';
import Card from '.';
import {Props} from './Card.props';

const meta: Meta<Props> = {
  component: Card,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
