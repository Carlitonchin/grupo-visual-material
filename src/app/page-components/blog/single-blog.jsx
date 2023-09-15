import FacebookIcon from "@/components/icons/facebook-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import TwitterIcon from "@/components/icons/twitter-icon";
import WhatsappIcon from "@/components/icons/whatsapp-icon";

function getHeader(blog) {
  const autor = blog.autor.data.attributes;
  let url = encodeURI(process.env.URL_BASE + "/blog" + blog.url);

  const titleUrl = blog.titulo.replaceAll(" ", "%20");
  return `<h1>${blog.titulo}</h1>
    <img src="${blog.img}" alt="${blog.alt}" style="margin-bottom:0.5rem;"/>
    <div class="flex flex-col sm:flex-row gap-y-2 justify-between items-start" style="margin-bottom:2rem;">
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
                 13 de setembro
                </span>
              </div>
              </div>
              <div class="flex flex-col items-start sm:items-center">
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



<a href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" rel="noopener noreferrer">
  ${LinkedinIcon()}
</a>

<a href="https://api.whatsapp.com/send?text=${titleUrl}%0A%0A${url}" target="_blank" rel="noopener noreferrer">
  ${WhatsappIcon()}
</a>
</div>
</div>
            </div>`;
}

export default function SingleBlog({ blog }) {
  blog.conteudo = getHeader(blog) + blog.conteudo;
  return (
    <section>
      <div className="w-full m-auto lg:max-w-[900px] mt-20  md:mt-16">
        <div
          className="markdown-body "
          dangerouslySetInnerHTML={{ __html: blog.conteudo }}
        ></div>
      </div>
    </section>
  );
}
