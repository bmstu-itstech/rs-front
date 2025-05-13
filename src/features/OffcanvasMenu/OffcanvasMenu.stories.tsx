import {Meta, StoryObj} from '@storybook/react';
import { Props } from './OffcanvasMenu.props';
import {OffcanvasMenu} from '@/features/OffcanvasMenu';

const meta: Meta<Props> = {
  component: OffcanvasMenu,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
