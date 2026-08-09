export interface ApplicationConfig {
  /** A human-readable name for the application. */
  name: string;
}

export interface Application {
  /** The configuration this application was created with. */
  readonly config: ApplicationConfig;

  /** Starts the application. */
  start(): void;
}

export function createApplication(config: ApplicationConfig): Application {
  return {
    config,

    start(): void {
      console.log(`[A#] Starting application: "${config.name}"`);
    },
  };
}

/**
 * The output a component produces. This is a temporary, minimal
 * stand-in until JSX compilation is set up — not real HTML/DOM yet,
 * just enough structure to prove the component concept works.
 * TProps mirrors whatever props shape the originating component used.
 */
export interface ComponentOutput<TProps = Record<string, never>> {
  type: string;
  props: TProps;
}

/**
 * An A# component: a typed function from props to output.
 * TProps describes the shape of props this component accepts.
 */
export type Component<TProps = Record<string, never>> = (
  props: TProps,
) => ComponentOutput<TProps>;

export interface WelcomeProps {
  name: string;
}

export const Welcome: Component<WelcomeProps> = (props) => {
  return {
    type: "Welcome",
    props,
  };
};
