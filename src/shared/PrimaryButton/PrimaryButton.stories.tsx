import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PrimaryButton from ".";

const meta = {
  component: PrimaryButton,
  title: "shared/PrimaryButton",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component: "Основная кнопка с кастомным текстом или контентом."
      }
    }
  },
  args: {
    onClick: fn()
  },
  argTypes: {
    children: {
      control: "text",
      description: "Текст или контент внутри кнопки."
    }
  }
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Нажми меня"
  },
  parameters: {
    docs: {
      description: {
        story: "Стандартная кнопка с текстом."
      }
    }
  }
};
