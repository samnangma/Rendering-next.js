import React from "react";
export async function fetchProduct(id) {
  const resp = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  return resp.json();
}

//call generate metadata
export async function generateMetadata({ params }) {
  const product = await fetchProduct(params.id);
  return {
    title: product.title,
    description: product.description,
    thumbnail: product.image,
    metadataBase: new URL("https://istad.co"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      images: product.image,
      title: product.title,
      description: product.description,
    },
  };
}
async function ProductDetail({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className="container mx-auto flex min-h-screen flex-wrap items-center justify-around p-3 ">
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={product.images[0]}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ProductDetail;
