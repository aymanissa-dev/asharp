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
 * stand-in until real rendering exists — not real HTML/DOM yet,
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

/**
 * A#'s JSX factory function. Every JSX element compiles into a call
 * to this function (via the "react-jsx" transform, pointed at this
 * module through jsxImportSource). Mirrors React's automatic JSX
 * runtime shape: (type, props) => output.
 */
export function jsx<TProps>(
  type: string | Component<TProps>,
  props: TProps,
): ComponentOutput<TProps> {
  if (typeof type === "function") {
    return type(props);
  }

  return { type, props };
}

// The automatic JSX runtime requires both "jsx" (single child) and
// "jsxs" (multiple children) exports. For now both behave identically.
export const jsxs = jsx;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName: string]: Record<string, unknown>;
    }

    type Element = ComponentOutput<any>;
  }
}

// ---------------------------------------------------------------------
// Local component state
// ---------------------------------------------------------------------
//
// stateSlots holds one value per state() call, in call order.
// stateIndex resets to 0 at the start of every render pass.
// currentRerender points at whichever render() call is "live" —
// calling a StateHandle's .set() re-runs it.
//
// This is a real, known constraint (same rule React's hooks follow):
// state() must be called in the same order on every render. Putting
// state() inside an `if` or a loop will misalign slots between
// renders and silently corrupt state.

let stateSlots: unknown[] = [];
let stateIndex = 0;
let currentRerender: (() => void) | null = null;

export interface StateHandle<T> {
  readonly value: T;
  set(next: T): void;
}

export function state<T>(initial: T): StateHandle<T> {
  const index = stateIndex;
  if (stateSlots[index] === undefined) {
    stateSlots[index] = initial;
  }
  stateIndex++;

  return {
    get value(): T {
      return stateSlots[index] as T;
    },
    set(next: T): void {
      stateSlots[index] = next;
      if (currentRerender) currentRerender();
    },
  };
}

/**
 * Mounts a ComponentOutput as real DOM. Props are split into three
 * categories:
 *  - "children" becomes text content
 *  - "on*" props whose value is a function become real event
 *    listeners (e.g. onClick -> addEventListener("click", ...))
 *  - everything else becomes a plain HTML attribute
 */
function mount(output: ComponentOutput, container: Element): void {
  const element = document.createElement(output.type);

  for (const [key, value] of Object.entries(output.props)) {
    if (key === "children") {
      const children = Array.isArray(value) ? value : [value];
      element.textContent = children.join("");
    } else if (key.startsWith("on") && typeof value === "function") {
      const eventName = key.slice(2).toLowerCase();
      element.addEventListener(eventName, value as EventListener);
    } else {
      element.setAttribute(key, String(value));
    }
  }

  container.innerHTML = "";
  container.appendChild(element);
}

/**
 * Renders a root component into a container, and keeps it updated
 * whenever any state() used inside it changes. This is a full
 * rewipe-and-rebuild on every update — no DOM diffing yet. See
 * ROADMAP.md and ARCHITECTURE.md for the known tradeoff.
 */
export function render(
  rootFn: () => ComponentOutput,
  container: Element,
): void {
  currentRerender = () => {
    stateIndex = 0;
    const output = rootFn();
    mount(output, container);
  };

  currentRerender();
}
