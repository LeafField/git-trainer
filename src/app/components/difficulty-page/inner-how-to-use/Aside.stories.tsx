import { Meta, StoryObj } from "@storybook/react";
import Aside from "./Aside";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta: Meta<typeof Aside> = {
  title: "components/Aside",
  component: Aside,
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

export const AsideStory: Story = {};
