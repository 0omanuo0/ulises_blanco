import SectionMain from "@/components/sectionMain";
import SectionAbout from "@/components/sectionAbout";

export default function Home() {
    return (
        <main className=" bg-gray-200 flex min-h-screen flex-col items-center justify-between">
            <SectionMain></SectionMain>
            <SectionAbout></SectionAbout>
        </main>
    );
}
