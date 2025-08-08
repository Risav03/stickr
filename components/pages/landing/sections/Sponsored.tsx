import Card from "@/components/UI/Card";

export default function Sponsored() {
  return (
    <div className="mt-4">
      <Card className="w-full" >
        <div className="w-full h-60 bg-white/20 rounded-lg text-center flex items-center justify-center">
            SPONSORED SLOT
        </div>
        <div className="rounded-full h-6 w-[80%] bg-white/20 mt-2 "></div>

        <div className="w-24 h-8 rounded-md bg-white/30 mt-2"></div>
      </Card>
    </div>
  );
}