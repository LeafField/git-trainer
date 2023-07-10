import { Meta, StoryObj } from "@storybook/react";
import Selected from "./Selected";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta: Meta<typeof Selected> = {
  title: "page/Selected",
  component: Selected,
  decorators: [
    (StoryComponents) => {
      return (
        <div className={inter.className}>
          <StoryComponents />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectedStory: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/difficulty",
        query: {},
      },
    },
  },
};
