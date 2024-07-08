"use client";

import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function ScrollUpButton({ className, target, size }: { className?: string, target: string, size?: number }) {
    return (
        <button
            id="scroll-up"
            className={`fixed bottom-${size ? size : 8} right-${size ? size : 8} z-50 bg-white shadow-xl text-black p-2 rounded-full ` + className}
            onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })}
        >
            <ChevronUpIcon className={size ? "h-" + size : "h-8"} />
        </button>
    )
}