import Info from "@/app/page-components/contato/info";
import Form from "@/app/page-components/contato/form";

export default function Contato() {
  return (
    <section className=" bg-gray-200">
      <div className="w-full px-5 lg:px-0 h-fit mt-20  md:mt-16 flex flex-col items-center gap-y-8 lg:flex-row justify-between lg:items-center lg:gap-x-20">
        <Info />
        <Form />
      </div>
    </section>
  );
}
