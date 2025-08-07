export default function Background() {
  return (
    <div className="fixed z-[-1] inset-0 overflow-hidden ">
      <div className="absolute bg-blue-600/90 w-[300px] aspect-square rounded-full blur-[250px] -top-72 -left-32"></div>
      <div className="absolute bg-blue-200/30 w-[300px] aspect-square rounded-full blur-[250px] -bottom-48 -left-80"></div>
<div className="absolute bg-blue-400/40 w-[250px] aspect-square rounded-full blur-[350px] bottom-60 -right-80"></div>
    </div>
  );
}