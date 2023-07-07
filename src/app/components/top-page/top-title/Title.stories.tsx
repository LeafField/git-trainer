import { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta: Meta<typeof Title> = {
  title: "components/Title",
  component: Title,
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

export const TitleStory: Story = {};
