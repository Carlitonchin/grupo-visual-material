import Info from "@/app/page-components/contato/info";
import Form from "@/app/page-components/contato/form";

export default function Contato() {
  return (
    <section className=" bg-gray-200">
      <div className="w-full h-fit  mt-16 flex flex-col items-center gap-y-8 lg:flex-row justify-between lg:items-center">
        <Info />
        <Form />
      </div>
    </section>
  );
}
