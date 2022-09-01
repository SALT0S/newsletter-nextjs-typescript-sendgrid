import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { GeneralLayout } from "../components/layouts";
import { Newsletter } from "../components/ui";

const HomePage: NextPage = () => {
  return (
    <GeneralLayout>
      <NextSeo title="Newsletter Form" />

      <div className="">
        <div>
          <h1 className="text-3xl font-bold text-center">Newsletter Form</h1>

          <Newsletter />
        </div>
      </div>
    </GeneralLayout>
  );
};

export default HomePage;
