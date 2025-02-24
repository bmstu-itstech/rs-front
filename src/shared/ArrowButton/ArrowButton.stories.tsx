import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ArrowButton from ".";

const meta = {
  component: ArrowButton,
  title: "shared/ArrowButton",
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component: "Стрелочная кнопка для навигации. Поддерживает направление вправо и влево."
      }
    }
  },
  args: {
    onClick: fn()
  },
  argTypes: {
    direction: {
      control: { type: "radio" },
      options: ["right", "left"],
      description: "Направление стрелки: вправо или влево."
    }
  }
} satisfies Meta<typeof ArrowButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  args: {
    direction: "right"
  },
  parameters: {
    docs: {
      description: {
        story: "Кнопка со стрелкой, направленной вправо."
      }
    }
  }
};

export const Left: Story = {
  args: {
    direction: "left"
  },
  parameters: {
    docs: {
      description: {
        story: "Кнопка со стрелкой, направленной влево."
      }
    }
  }
};