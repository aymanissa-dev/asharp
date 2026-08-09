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
