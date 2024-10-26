"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ButtonScrollDown() {
    return (
        <div className="scroll-down">
            <button onClick={() => {
                // scroll to "about" section
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }} >
                <ChevronDownIcon />
            </button>
        </div>
    );
}