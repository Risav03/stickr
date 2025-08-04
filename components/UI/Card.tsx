import { twMerge } from "tailwind-merge";

export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={twMerge(" bg-white/10 rounded-lg border-[1px] border-t-white/40 border-l-white/40 border-r-white/20 border-b-white/20 p-2 ", className)}>
            {children}
        </div>
    );
}