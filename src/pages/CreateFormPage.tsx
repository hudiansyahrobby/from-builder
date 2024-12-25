import { Button, buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DetailForm from "@/features/CreateForm/DetailForm";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CreateFormPage = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-screen-2xl w-full flex justify-end mx-auto">
        <Link
          className={buttonVariants({
            variant: "outline",
          })}
          to="/"
        >
          Go To Publish Form
        </Link>
      </div>
      <div className="max-w-screen-2xl mx-auto my-4 bg-gray-50 p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-4">
          <ArrowLeft size={24} />
          <div>
            <h2 className="text-gray-500">Title</h2>
            <h2 className="font-bold text-2xl">Birthday Party</h2>
          </div>
        </div>

        <Tabs defaultValue="details" className="mt-6">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <TabsList>
              <TabsTrigger value="details">Form Details</TabsTrigger>
              <TabsTrigger value="configurations">Configurations</TabsTrigger>
              <TabsTrigger value="disabled" disabled>
                Disabled
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-4">
              <h2>Status</h2>

              <Button className="w-[90px]" disabled>
                Draft
              </Button>
            </div>
          </div>

          <TabsContent value="details">
            <DetailForm />
          </TabsContent>
          <TabsContent value="configurations">Future Development</TabsContent>
          <TabsContent value="disabled">Future development</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CreateFormPage;
