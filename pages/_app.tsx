import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Template"
        defaultTitle="Template | NextJS Typescript Tailwind CSS Starter"
        description="NextJS Typescript Tailwind CSS Starter"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "",
          title: "Template | NextJS Typescript Tailwind CSS Starter",
          description: "NextJS Typescript Tailwind CSS Starter",
          images: [
            {
              url: "",
              width: 1200,
              height: 630,
              alt: "Nextjs Typescript Tailwind CSS Starter",
            },
          ],
          site_name: "Template",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Jose, Sanchez, Saltos, Template, Nextjs, Typescript, Tailwind, CSS, Starter",
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
