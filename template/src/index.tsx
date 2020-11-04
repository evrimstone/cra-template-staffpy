import * as React from "react";

interface Props {
  text: string;
}

export const ExampleComponent: React.FC<Props> = ({ text }: Props) => {
  return <div>Example Components: {text}</div>;
};
