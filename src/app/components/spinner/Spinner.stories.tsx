import { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "components/Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SpinnerStory: Story = {};
