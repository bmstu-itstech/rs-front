import type { Meta, StoryObj } from "@storybook/react";
import LinkField from ".";

const meta = {
  component: LinkField,
  title: "shared/LinkField",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component: "Кнопка-ссылка с заголовком и иконкой. Открывает указанный URL при клике."
      }
    }
  },
  argTypes: {
    title: {
      control: "text",
      description: "Текст ссылки."
    },
    url: {
      control: "text",
      description: "URL, на который ведёт ссылка."
    }
  }
} satisfies Meta<typeof LinkField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Открыть Google",
    url: "https://www.google.com"
  },
  parameters: {
    docs: {
      description: {
        story: "Стандартная ссылка, ведущая на указанный URL."
      }
    }
  }
};
