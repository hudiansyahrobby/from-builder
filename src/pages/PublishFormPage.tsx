import { buttonVariants } from "@/components/ui/button";
import PublishForm from "@/features/PublishForm";
import { Link } from "react-router-dom";

const PublishFormPage = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-screen-2xl w-full flex justify-end mx-auto">
        <Link
          className={buttonVariants({
            variant: "outline",
          })}
          to="/create-form"
        >
          Go To Create Form
        </Link>
      </div>
      <div className="max-w-screen-2xl mx-auto my-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between gap-4 items-center border-b border-gray-200 mb-2 pb-2">
          <img
            src="https://foxmy.io/_next/static/media/FOX.706be313.svg"
            alt="Ironhack logo"
          />

          <h2 className="text-sm">Document Number : PTM-2323-23/2332</h2>
        </div>

        <h2 className="font-bold text-3xl">Birthday Party</h2>
        <h3>Come and Join us</h3>
      </div>

      <div className="rounded-lg overflow-hidden bg-white shadow-sm max-w-screen-2xl mx-auto">
        <div className="bg-blue-500 px-2 py-1">
          <h2 className="text-white">Section 1 of 1</h2>
        </div>

        <div className="py-4 px-6">
          <h2 className="bg-gray-200 p-4 font-semibold text-lg mb-4">
            Party Details
          </h2>

          <PublishForm />
        </div>
      </div>
    </div>
  );
};

export default PublishFormPage;
