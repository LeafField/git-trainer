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
  args: {
    data: [
      {
        id: 1,
        question: "リモートブランチをoriginに登録したい",
        answer: "git remote add origin URL",
      },
      {
        id: 2,
        question: "リモートブランチをoriginに登録したい",
        answer: "git remote add origin URL",
      },
    ],
    title: "初級編:GitHub Flow",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DifficultyStory: Story = {};
