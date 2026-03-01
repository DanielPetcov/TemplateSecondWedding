export default function TwoColumnTextImage({
  text,
  image,
  reverse,
}: {
  text: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className={
          reverse
            ? "order-2 lg:order-2 flex items-center"
            : "order-2 lg:order-1 flex items-center"
        }
      >
        <div className="bg-background-4 text-center text-lg p-10 h-full lg:max-h-[90%] flex items-center">
          {text}
        </div>
      </div>
      <div
        className={
          reverse
            ? "order-1 lg:order-1 aspect-square"
            : "order-1 lg:order-2 aspect-square"
        }
      >
        <img
          src={image}
          alt="helper image"
          className="w-full h-full object-cover object-center rounded-tl-md rounded-tr-md lg:rounded-md"
        />
      </div>
    </div>
  );
}
