import { Meta, StoryObj } from "@storybook/react";
import Difficulty from "./Main";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta: Meta<typeof Difficulty> = {
  title: "page/Difficulty",
  component: Difficulty,
  decorators: [
    (StoryComponents) => {
      return (
        <div className={inter.className}>
          <StoryComponents />
        </div>
      );
    },
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/difficulty/flow",
        query: {},
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DifficultyStory: Story = {};
