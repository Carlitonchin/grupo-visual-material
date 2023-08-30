import Info from "@/app/page-components/contato/info";
import Form from "@/app/page-components/contato/form";

export default function Contato() {
  return (
    <div>
      <Info />
      <section className=" bg-gray-200 py-8 flex justify-center items-center">
        <Form />
      </section>
    </div>
  );
}
