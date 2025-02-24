import type { Meta, StoryObj } from "@storybook/react";
import Field from ".";

const meta = {
  component: Field,
  title: "shared/Field",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component: "Компонент поля, отображающий заголовок и значение."
      }
    }
  },
  argTypes: {
    title: {
      control: "text",
      description: "Заголовок поля."
    },
    value: {
      control: "text",
      description: "Значение поля. Может быть строкой или React-элементом."
    }
  }
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Название",
    value: "Значение"
  },
  parameters: {
    docs: {
      description: {
        story: "Стандартное поле с заголовком и значением."
      }
    }
  }
};
