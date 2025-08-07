import Card from "@/components/UI/Card";

export default function Collections() {
  return (
    <div className="mt-8">
      <h1 className="subheading text-xl font-semibold">Collections</h1>
      <h2 className="subText text-sm ">Our top performing collections</h2>
      {/* <div className="w-[100%] overflow-x-scroll"> */}
        <div className="flex flex-wrap gap-2 mt-2">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((artist) => (
            <Card className="w-[calc(50%_-_0.25rem)] p-2" key={artist}>
              <div className="bg-white/20 rounded-lg w-full aspect-square"></div>

              {/* Name Container */}
              <div className="bg-white/10 mt-2 rounded-full h-5 w-24"></div>

              
            </Card>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
}
