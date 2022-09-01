import { Footer } from "../footer";

interface Props {
  children: React.ReactNode;
}

export const GeneralLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="container mx-auto max-w-7xl flex-[1_0_auto] px-4 sm:px-6 lg:px-8 my-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};
