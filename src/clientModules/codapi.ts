// Load Codapi after React hydration to avoid SSR/hydration mismatch (React error #418).
// The <codapi-snippet> custom element gets upgraded by Codapi's script. If the script
// runs via <script defer> in <head>, it races with React hydration and corrupts the DOM.
// onRouteDidUpdate fires after React has fully rendered the page — safe to inject here.

let initialized = false;

export function onRouteDidUpdate(): void {
  if (initialized) return;
  initialized = true;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://unpkg.com/@antonz/codapi@0.20.0/dist/snippet.css';
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@antonz/codapi@0.20.0/dist/snippet.js';
  document.head.appendChild(script);
}
