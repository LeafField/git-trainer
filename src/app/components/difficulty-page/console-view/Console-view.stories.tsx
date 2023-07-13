import { Meta, StoryObj } from "@storybook/react";
import ConsoleView from "./Console-view";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta: Meta<typeof ConsoleView> = {
  title: "components/ConsoleView",
  component: ConsoleView,
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

export const ConsoleViewStory: Story = {
  args: {
    question: "リモートブランチをoriginに登録したい",
    anser: "git remote add origin URL",
    nextCallback: () => {},
  },
};
