import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  decorators: [
    (StoryComponents) => (
      <div className={inter.className}>
        <StoryComponents />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    title: "Let's Play!",
    link: "/",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    title: "How to use",
    link: "/",
  },
};
