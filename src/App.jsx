import Header from "./Components/Header";
import Hero from "./Components/Sections/Hero";
import Company from "./Components/Sections/Company";
import Purpose from "./Components/Sections/Purpose";
import Features from "./Components/Sections/Features";
import Schedule from "./Components/Sections/Schedule";
import Monitor from "./Components/Sections/Monitor";
import Pricing from "./Components/Sections/Pricing";
import Service from "./Components/Sections/Service";
import Testmonials from "./Components/Sections/Testmonials";
import Newsletter from "./Components/Sections/Newsletter";
import Footer from "./Components/Footer";

function App() {
    return (
        <>
            <Header />

            <main className="relative overflow-x-hidden">
                <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px]"></div>
                <Hero />
                <Company />
                <Purpose />
                <Features />
                <Schedule />
                <Monitor />
                <Pricing />
                <Service />
                <Testmonials />
                <Newsletter />
            </main>

            <Footer />
        </>
    );
}

export default App;
