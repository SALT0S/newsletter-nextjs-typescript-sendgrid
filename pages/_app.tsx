import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Nextjs"
        defaultTitle="Newsletter Form | Nextjs"
        description="Newsletter Form"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "",
          title: "Newsletter Form | Nextjs",
          description: "Newsletter Form",
          images: [
            {
              url: "",
              width: 1200,
              height: 630,
              alt: "Newsletter Form",
            },
          ],
          site_name: "Newsletter",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Jose, Sanchez, Saltos, Form, Nextjs, Typescript, Tailwind, CSS, Newsletter",
          },
        ]}
        twitter={{
          handle: "@Jose_schzs",
          cardType: "summary_large_image",
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
