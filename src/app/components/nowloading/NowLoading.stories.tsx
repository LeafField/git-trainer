import { Meta, StoryObj } from "@storybook/react";
import NowLoading from "./NowLoading";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta: Meta = {
  title: "components/NowLoading",
  component: NowLoading,
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

export const NowLoadingStory: Story = {};
