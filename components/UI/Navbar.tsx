import { TiPlus } from "react-icons/ti";

export default function Navbar(){
    return (
        <div className="fixed bottom-0 w-screen h-12 rounded-t-xl flex items-center justify-center border-t-[1px] border-white/40 bg-(--subheading)/10 backdrop-blur-md z-50">
            <button className="bg-white text-blue-950 -translate-y-6 rounded-full w-12 aspect-square text-3xl font-bold">
                <TiPlus className="mx-auto"/>
            </button>
        </div>
    )
}