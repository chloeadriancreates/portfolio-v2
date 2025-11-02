import { home } from "@/lib/home";
import Hero from "@/components/Hero/hero";
import { Language } from "@/lib/types";
import Header from "@/components/Header/header";

const Home = async ({ params }: { params: Promise<{ language: Language }> }) => {
    const { language } = await params;
    const { hero } = home[language];

    return (
        <main>
            <Hero content={hero} language={language} />
            <Header language={language} position="content" />
        </main>
    )
}

export default Home;