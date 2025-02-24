import type { Meta, StoryObj } from "@storybook/react";
import AchievementsScreen from ".";

const meta = {
  component: AchievementsScreen,
  title: "screens/AchievementsScreen",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component: "Экран достижений с возможностью выбора активного достижения."
      }
    }
  }
} satisfies Meta<typeof AchievementsScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Стандартный экран достижений с предустановленным активным достижением."
      }
    }
  }
};
