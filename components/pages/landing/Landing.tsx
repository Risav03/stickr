import { FaSdCard } from "react-icons/fa6";
import Artists from "./sections/Artists";
import Collections from "./sections/Collections";
import Sponsored from "./sections/Sponsored";
import { FaSearch } from "react-icons/fa";

export default function Landing() {
  return (
    <div>
      <div>
        <h1 className="heading text-3xl font-bold">Stickr </h1>
        <h2 className="subText">Base's Sticker Platform</h2>
      </div>

      <div className="mt-4 w-full flex relative">

        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 inputText rounded-md focus:outline-none focus:ring-1 duration-200 peer focus:ring-white bg-(--subheading)/10"
        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-white duration-200"><FaSearch className=""/></div>

      </div>

      <Sponsored/>
      <Artists/>
      <Collections/>

    </div>
  );
}
