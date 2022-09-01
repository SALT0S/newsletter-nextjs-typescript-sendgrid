import { NextSeo } from "next-seo";
import { GeneralLayout } from "../components/layouts";

const Custom404Page = () => {
  return (
    <GeneralLayout>
      <NextSeo
        title="Page not found"
        description="You just hit a route that doesn't exist... the sadness."
        openGraph={{
          title: "Page not found",
          description:
            "You just hit a route that doesn't exist... the sadness.",
        }}
      />

      <div className="min-h-[65vh] flex justify-center">
        <div className="flex flex-col items-center text-center justify-center md:flex-row md:text-left">
          <div className="flex text-8xl font-extralight">
            <h1>404</h1>
            <p className="hidden md:block">|</p>
          </div>

          <div className="md:ml-4">
            <p className="my-3 text-xl font-bold">Whoops! Sorry about that.</p>
            <p>The page you are looking for does not exist.</p>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Custom404Page;
