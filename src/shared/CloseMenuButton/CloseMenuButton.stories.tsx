import {Meta, StoryObj} from '@storybook/react';
import Props from './CloseMenuButton.props';
import { CloseMenuButton } from '@/shared/CloseMenuButton';

const meta: Meta<Props> = {
  component: CloseMenuButton,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
