import { Meta, StoryObj } from "@storybook/react";
import PageTitle from "./PageTitle";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta: Meta<typeof PageTitle> = {
  title: "components/PageTitle",
  component: PageTitle,
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

export const PageTitleStory: Story = {
  args: {
    title: "初級編:GitHub Flow",
  },
};
