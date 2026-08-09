import type { Component } from "./index.js";

export interface WelcomeProps {
  name: string;
}

export const Welcome: Component<WelcomeProps> = (props) => {
  return <h1>Welcome, {props.name}</h1>;
};
