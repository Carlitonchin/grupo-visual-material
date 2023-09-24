export default function Brand({ brands, title }) {
  return (
    <section className="flex justify-center items-center flex-wrap gap-x-8 md:gap-x-12 gap-y-4">
      <h2 className="text-center w-full">{title}</h2>
      {brands.map((brand, index) => (
        <img
          className="w-auto max-w-md max-h-20 h-auto"
          src={brand.img}
          alt={brand.alt}
          key={index}
        ></img>
      ))}
    </section>
  );
}
