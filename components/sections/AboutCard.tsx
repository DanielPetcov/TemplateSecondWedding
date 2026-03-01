interface DynamicDataAcoutCard {
  title: string;
  content: string;
}

export default function AboutCard({ data }: { data: DynamicDataAcoutCard[] }) {
  return (
    <div className="bg-background-4 rounded-md h-full">
      <div className="flex flex-col h-full gap-10 items-center justify-center p-10">
        {data.map((d, index) => (
          <div key={index} className="text-center space-y-2">
            <div>{d.title}</div>
            <div>{d.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
