export default function FirstPageTitle({
  firstName,
  secondName,
}: {
  firstName: string;
  secondName: string;
}) {
  return (
    <div className="sticky top-0 z-0 bg-white uppercase text-center text-4xl lg:text-9xl py-16 pt-30">
      <span>{firstName}</span>
      <span className="mx-4">&</span>
      <span>{secondName}</span>
    </div>
  );
}
