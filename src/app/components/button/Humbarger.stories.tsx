import { Meta, StoryObj } from "@storybook/react";
import Humbarger from "./Humbarger";

const meta: Meta = {
  title: "components/Humbarger",
  component: Humbarger,
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HumbargerStory: Story = {
  args: {
    isHidden: true,
    HumbargerOpen: () => {},
  },
};
