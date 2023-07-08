import { Meta, StoryObj } from "@storybook/react";
import HowToPage from "./HowToPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta: Meta<typeof HowToPage> = {
  title: "page/HowToPage",
  component: HowToPage,
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

export const HowToPageStory: Story = {};
