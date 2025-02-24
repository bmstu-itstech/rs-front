import {Meta, StoryObj} from '@storybook/react';
import Props from './MenuButton.props';
import {MenuButton} from '@/shared/MenuButton';

const meta: Meta<Props> = {
  component: MenuButton,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
