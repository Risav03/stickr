export default function Background() {
  return (
    <div className="fixed z-[-1] inset-0 overflow-hidden bg-black">
      <div className="absolute bg-blue-400 w-[300px] aspect-square rounded-full blur-[220px] -top-72 -left-32"></div>
      <div className="absolute bg-blue-500/50 w-[400px] aspect-square rounded-full blur-[200px] -bottom-32 -left-48"></div>
<div className="absolute bg-blue-700/80 w-[300px] aspect-square rounded-full blur-[250px] bottom-60 -right-80"></div>
    </div>
  );
}