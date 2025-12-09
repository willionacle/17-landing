export default function Title({ title }: { title: string }) {
  return (
    <h1 className="text-red-500 font-medium text-center text-2xl lg:text-4xl lg:mb-7">
      {title}
    </h1>
  );
}
