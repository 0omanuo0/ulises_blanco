import SectionMain from "@/components/sectionMain";
import SectionAbout from "@/components/sectionAbout";

export default function Home() {
    return (
        <main className="bg-gray-200 items-center justify-between opacity-100 transition-all duration-700">
            <SectionMain />
            <SectionAbout />
        </main>
    );
}
