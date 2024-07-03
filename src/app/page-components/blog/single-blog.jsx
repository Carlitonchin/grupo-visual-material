import FacebookIcon from "@/components/icons/facebook-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import TwitterIcon from "@/components/icons/twitter-icon";
import WhatsappIcon from "@/components/icons/whatsapp-icon";
import moment from "moment";
import "moment/locale/pt-br";

function getTime(date) {
  moment.locale("pt-br");
  const sameYear = new Date(date).getFullYear() == new Date().getFullYear();
  if (sameYear) return moment(date).format("DD [de] MMMM");

  return moment(date).format("LL");
}

function getHeader(blog) {
  const autor = blog.autor.data.attributes;
  let url = encodeURI(process.env.URL_BASE + "/blog" + blog.url);

  const titleUrl = blog.titulo.replaceAll(" ", "%20");
  return `<h1 class="text-center sm:text-start">${blog.titulo}</h1>
    <img src="${blog.img}" alt="${blog.alt}" style="margin-bottom:0.5rem;"/>
    <div class="flex flex-col sm:flex-row gap-y-2 justify-between items-center sm:items-start mb-4 sm:mb-8">
    <div class=" flex gap-x-2 items-center" >
              <img
              class="rounded-full w-16 h-16"
                alt="${autor.alt}"
                src="${autor.img}"
                width={70}
                height={70}
              />
              <div class="flex flex-col">
                <span class="font-bold">
                  ${autor.nome}
                </span>
                <span>
                 ${getTime(blog.publishedAt)}
                </span>
              </div>
              </div>
              <div class="flex flex-col items-center">
              <span class="font-semibold">Compartilhe:</span>
              <div class="flex gap-x-1 items-center">
              <a target="_blank" class="twitter-share-button"
              href="https://twitter.com/intent/tweet?text=${
                titleUrl + "%0A%0A" + url
              }"
              data-size="large">
              ${TwitterIcon()}
            </a>
              
            <a href="http://www.facebook.com/sharer.php?u=${url}&t=${titleUrl}" target="_blank" rel="noopener noreferrer">
            ${FacebookIcon()}
            </a>        

            <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=${url}">
            ${LinkedinIcon()}
            </a>

<a href="https://api.whatsapp.com/send?text=${titleUrl}%0A%0A${url}" target="_blank" rel="noopener noreferrer">
  ${WhatsappIcon()}
</a>
</div>
</div>
            </div>
            <h2 class="sm:hidden"></h2>
            `;
}

export default function SingleBlog({ blog }) {
  blog.conteudo = getHeader(blog) + blog.conteudo;
  return (
    <section className="bg-gray-200 ">
      <div className="w-full m-auto lg:max-w-[900px] mt-24  sm:mt-12">
        <div
          className="markdown-body "
          dangerouslySetInnerHTML={{ __html: blog.conteudo }}
        ></div>
      </div>
    </section>
  );
}
