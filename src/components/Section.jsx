import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";
import Announcement from "./Announcement";
import News from "./News";
import Univer from "./Univer";
import Key from "./Key";
import Faculty from "./Faculty";
import Phone from "./Phone";

export default function Section() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <div>
                <Header />
            </div>

            <div data-aos="fade-up">
                <Announcement />
            </div>

            <div data-aos="fade-up">
                <News />
            </div>

            <Univer />
            <Key />
            <Faculty />
            <Phone />

            <div data-aos="fade-up">
                <Footer />
            </div>

        </div>
    );
}
