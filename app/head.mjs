
export default function Head(state) {
  const { store, status, req, error } = state;
  const { path } = req;
  const title = `Enhance Demo — ${path}`;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      <link rel="icon" href="/_public/favicon.svg">
      <link rel="stylesheet" href="/_public/base.css">
    </head>
  `;
}