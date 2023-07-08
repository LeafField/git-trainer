import { Meta, StoryObj } from "@storybook/react";
import Selector from "./Selector";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta: Meta<typeof Selector> = {
  title: "components/Selector",
  component: Selector,
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

export const SelectorStory: Story = {
  args: {
    title: "初級編:GitHub Flow",
    last: false,
    clickHandler: () => {},
  },
};
