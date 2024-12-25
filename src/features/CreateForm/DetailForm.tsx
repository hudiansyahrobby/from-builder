import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  AlignHorizontalJustifyStart,
  CopyIcon,
  GripVertical,
  Trash2,
} from "lucide-react";
import { useForm } from "react-hook-form";

const DetailForm = () => {
  const form = useForm({});

  function onSubmit(values: unknown) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <div className="rounded-lg overflow-hidden bg-white shadow-sm max-w-screen-2xl mx-auto">
        <div className="bg-blue-500 px-2 py-1">
          <h2 className="text-white">Section 1 of 1</h2>
        </div>

        <div className="py-4 px-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <div className="flex items-center justify-between">
                <div className="text-center flex items-center gap-4">
                  <GripVertical className="text-gray-400" />
                  <h2 className="font-bold">Party Details</h2>
                </div>

                <div className="flex items-center gap-2">
                  <CopyIcon className="size-4" />
                  <Trash2 className="size-4" />
                  <AccordionTrigger />
                </div>
              </div>
              <AccordionContent className="ml-9">
                <Input disabled placeholder="Don't forget to prepare" />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {[1, 2, 3].map((item) => {
        return (
          <div
            className="bg-white rounded-sm py-4 px-6 mt-4 ml-4 md:ml-10 shadow-sm"
            key={item}
          >
            <Accordion
              type="multiple"
              defaultValue={["item-1", "item-2", "item-3"]}
            >
              <AccordionItem value={`item-${item}`} className="group">
                <div className="flex items-center justify-between">
                  <div className="text-center flex items-center gap-4">
                    <GripVertical className="text-gray-400" />
                  </div>

                  <div className="flex items-center gap-2">
                    <AccordionTrigger />
                  </div>
                </div>
                <div className="group-data-[state=open]:-mt-8">
                  <AccordionContent className="mx-9">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="question"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Question</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your question"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="answer"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel isRequired>Answer</FormLabel>
                                <Select
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                  }}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="short text">
                                      <div className="flex items-center gap-2">
                                        <AlignHorizontalJustifyStart className="size-4 text-blue-500" />
                                        Short Answer
                                      </div>
                                    </SelectItem>
                                  </SelectContent>
                                </Select>

                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="answerText"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    placeholder="Short answer text"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </form>
                    </Form>

                    <Separator className="my-4" />

                    <div className="flex items-center gap-2 justify-end">
                      <CopyIcon className="size-4" />
                      <Trash2 className="size-4" />
                      <Switch />
                      <h2>Required</h2>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};

export default DetailForm;
