import {Meta, StoryObj} from '@storybook/react';
import {Props} from './Contacts.props';
import Contacts from '.';

const meta: Meta<Props> = {
  component: Contacts,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
