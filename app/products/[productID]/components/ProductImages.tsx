import Image from "next/image";

export default function ProductImages({
  product,
  selectedImage,
  setSelectedImage,
}: {
  product: ProductAPI;
  selectedImage: string | null;
  setSelectedImage: (image: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="aspect-square bg-amber-50 rounded-2xl overflow-hidden">
        <Image
          src={ `${selectedImage}`}
          alt={'images'}
          width={500}
          height={500}
          className="w-full h-full object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {product.detail_images.map((image) => (
          <button
            key={image.id}
            className={`aspect-square bg-amber-50 rounded-xl overflow-hidden border-2 transition-colors ${
              selectedImage === image.image
                ? "border-amber-600"
                : "border-transparent"
            }`}
            onClick={() => setSelectedImage(image.image)}
          >
            <Image
              src={image.image}
              alt={'images'}
              width={200}
              height={200}
              className="w-full h-full object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
            />
          </button>
        ))}
      </div>
    </div>
  );
}