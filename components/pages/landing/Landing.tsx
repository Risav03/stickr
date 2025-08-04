import Artists from "./sections/Artists";

export default function Landing() {
  return (
    <div>
      <div>
        <h1 className="heading text-3xl font-bold">Stickr </h1>
        <h2 className="subText">Base's Sticker Platform</h2>
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 inputText rounded-md focus:outline-none focus:ring-1 duration-200 focus:ring-white bg-(--subheading)/10"
        />
      </div>

      <Artists/>

    </div>
  );
}
