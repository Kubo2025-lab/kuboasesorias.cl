import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        {/* GTM noscript fallback para navegadores sin JS */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NX74D4K"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

