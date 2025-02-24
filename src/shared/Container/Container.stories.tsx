import type { Meta, StoryObj } from "@storybook/react";
import Container from ".";

const meta = {
  component: Container,
  title: "shared/Container",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component: "Контейнер для секций страницы, поддерживающий плавную прокрутку к себе при попадании в область видимости."
      }
    }
  },
  argTypes: {
    id: {
      control: { type: "select" },
      options: ["main", "news", "achievements", "contacts"],
      description: "ID контейнера, используемый для прокрутки."
    },
    children: {
      control: { type: "text" },
      description: "Дочерние элементы, содержащие контент контейнера."
    }
  }
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    id: "main",
    children: "Главная секция"
  },
  parameters: {
    docs: {
      description: {
        story: "Контейнер для главной секции."
      }
    }
  }
};

export const News: Story = {
  args: {
    id: "news",
    children: "Новости"
  },
  parameters: {
    docs: {
      description: {
        story: "Контейнер для секции новостей."
      }
    }
  }
};

export const Achievements: Story = {
  args: {
    id: "achievements",
    children: "Достижения"
  },
  parameters: {
    docs: {
      description: {
        story: "Контейнер для секции достижений."
      }
    }
  }
};

export const Contacts: Story = {
  args: {
    id: "contacts",
    children: "Контакты"
  },
  parameters: {
    docs: {
      description: {
        story: "Контейнер для секции контактов."
      }
    }
  }
};
