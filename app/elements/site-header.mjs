export default function SiteHeader({ html, state }) {

  const {attrs, store} = state;

  return html`<header>
    <h1>${attrs.heading}</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>`;
}  