import Info from "@/app/page-components/contato/info";
import Form from "@/app/page-components/contato/form";
import { getContactInfo } from "@/api/contact/contact";

export default async function Contato() {
  const info = await getContactInfo();
  return (
    <div>
      <Info info={info} />
      <section className=" bg-gray-200 py-8 flex justify-center items-center">
        <Form text={info.texto_botao} />
      </section>
    </div>
  );
}
