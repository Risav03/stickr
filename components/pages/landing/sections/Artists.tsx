import Card from "@/components/UI/Card";

export default function Artists() {
  return (
    <div className="mt-8">
      <h1 className="subheading text-xl font-semibold">Artists</h1>
      <h2 className="subText text-sm">Explore our top artists</h2>
      <div className="w-[100%] overflow-x-scroll">
        <div className="flex gap-2 mt-2">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((artist) => (
            <Card key={artist}>
              <div className="bg-white/20 rounded-lg w-32 aspect-square"></div>

              {/* Name Container */}
              <div className="bg-white/10 mt-2 rounded-full h-5 w-24"></div>

              <div className="flex ml-1">
                {[0, 1, 2].map((item) => (
                  <div
                    key={item}
                    className="bg-white/10 mt-2 -ml-1 rounded-full w-6 aspect-square "
                  ></div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
