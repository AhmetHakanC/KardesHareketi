"use client";
import {FaInstagram, FaYoutube} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

export default function Main() {
    const cards = [
        {
            title: "Üşüme Kardeşim",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?",
            image: "https://i.imghippo.com/files/ZM1200nwM.jpg"
        },
        {
            title: "Adıyaman'da Çocuk Parkı!",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?",
            image: "https://i.imghippo.com/files/kCRw5173mM.jpeg"
        },
        {
            title: "Yardım Kolisi",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?",
            image: "https://i.imghippo.com/files/OsIO2212kJs.jpeg"
        },
        {
            title: "Eğlenceli Faaliyetler",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?",
            image: "https://i.imghippo.com/files/FEX3798xuw.jpeg"
        },
        {
            title: "Card 4",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?",
            image: "https://i.imghippo.com/files/ZM1200nwM.jpg"
        },
        {
            title: "Card 4",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?",
            image: "https://i.imghippo.com/files/ZM1200nwM.jpg"
        }
    ]

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
            });
        }
    };


    return (
        <div className={"h-screen bg-white text-gray-800 relative"} id="main">
            {/* Header */}
            <div style={{
                background: "rgba(255,255,255,0.5)",
                WebkitBackdropFilter: "blur(10px)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.25)"
            }}
                 className={"h-20 max-md:h-24 border-b-[1px] flex items-center justify-between px-8 max-md:px-2 absolute z-50 w-full"}

            >
                {/* Logo */}
                <div className={"w-20 max-md:w-24 h-20 max-md:h-24 flex items-center max-md:ml-4"}>
                    <img
                        src={"https://i.imghippo.com/files/mSaC4766De.png"}
                        alt={"logo"}
                        className={"w-full cursor-pointer"}
                    />
                </div>

                {/* Navigation */}
                <div className={"flex items-center justify-center gap-8 max-lg:gap-2 max-md:hidden"}>
                    <div className={"px-5 max-xl:px-3 py-1.5 rounded-md cursor-pointer hover:scale-105 transition duration-200 font-bold"}
                         onClick={() => {scrollToSection("main")}}
                    >Ana Sayfa</div>
                    <div
                        className={"px-5 max-xl:px-3 py-1.5 rounded-md cursor-pointer hover:scale-105 transition duration-200 font-bold"}
                        onClick={() => scrollToSection("about")}
                    >
                        Hakkımızda
                    </div>
                    <div
                        className={"px-5 max-xl:px-3 py-1.5 rounded-md cursor-pointer hover:scale-105 transition duration-200 font-bold"}
                        onClick={() => scrollToSection("actions")}
                    >
                        Faaliyetlerimiz
                    </div>
                </div>

                {/* Join Button */}
                <div className={"max-sm:mr-2"}>
                    <div className={"px-6 py-2 rounded-md cursor-pointer bg-orange-600 hover:ring-2 ring-orange-400 transition duration-300 font-bold text-white"}>Bize Katıl!</div>
                </div>

            </div>

            {/* Body */}
            <div className={"w-full"}>
                {/* Images */}
                <div className={"flex items-center"}>
                    <div className={"relative w-full"}>
                        <div className={"absolute w-full flex justify-end"}>
                            <div className={"absolute z-20 flex flex-col items-end justify-center px-36 py-64 font-modern"}>
                                <span
                                    className={"bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent animate-gradient select-none text-7xl"}
                                    style={{backgroundSize: '300% 200%'}}
                                >Kardeş Hareketi</span>
                                <div className={"font-light text-right mt-8 text-gray-200 font-sans text-6xl select-none"}>
                                    Siz De Bu Kardeşliğe <br/> Ortak Olun
                                </div>
                            </div>
                            <div className={"w-full h-[700px] bg-gradient-to-l from-black to-transparent opacity-70"}/>
                        </div>
                        <img src="https://i.imghippo.com/files/mac6312nE.jpeg" alt="kardes" className={"h-[700px] w-full object-cover"}/>
                        <div className={"absolute flex items-center justify-center z-20 w-full bottom-0"} onClick={() => scrollToSection("about")}>
                            <img src="https://i.imghippo.com/files/yLc8952uN.png" alt="down" className={"h-16 w-16 animate-bounce cursor-pointer hover:animate-none opacity-75"}/>
                        </div>
                    </div>
                </div>

                {/* Hakkımızda */}
                <div id={"about"} className={"bg-[#062327] py-20 max-md:py-12"}>
                    <div className={"flex items-center justify-center text-4xl font-bold"}>
                        <div className={"border-b-[1px] border-orange-500 w-1/3 max-xl:w-1/2 max-lg:w-2/3 flex items-center justify-center pb-2 text-gray-200"}>Biz Kimiz?</div>
                    </div>
                    <div className={"flex max-lg:flex-col justify-center items-center mt-12 gap-10"}>
                        <div className={"text-2xl max-md:text-xl font-thin w-1/3 max-lg:w-4/5 max-xl:w-1/3 text-gray-200 text-justify"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur cumque expedita fuga fugiat optio soluta vitae? Architecto iusto magnam maiores nisi quod quos sapiente similique sunt. Debitis, explicabo?
                        </div>
                        <div className={"w-1/3 max-xl:w-1/2 max-lg:w-4/5 h-[500px]"}>
                            <img
                                src={"https://i.imghippo.com/files/mac6312nE.jpeg"}
                                alt={"image"}
                                className={"object-cover w-full h-full rounded-lg"}
                            />
                        </div>
                    </div>
                </div>

                {/* Faaliyetlerimiz */}
                <div id={"actions"} className="py-20 px-24 max-xl:px-20 max-lg:px-16 max-md:px-12 max-sm:px-8">
                    <div className="flex items-center justify-center text-4xl font-bold">
                        <div className="border-b-[1px] border-orange-500 w-1/3 max-xl:w-1/2 max-md:w-11/12 max-lg:w-2/3 flex items-center justify-center pb-2 text-gray-800">Faaliyetlerimiz</div>
                    </div>
                    <div
                        className="flex items-center justify-start gap-8 max-sm:gap-12 overflow-x-scroll mt-12 py-4 pl-8"
                        style={{ scrollSnapType: "x mandatory" }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="w-[300px] h-[500px] bg-gray-100 rounded-lg p-6 cursor-pointer hover:shadow-lg hover:bg-gray-200 transition flex-shrink-0"
                                style={{ scrollSnapAlign: "center" }}
                            >
                                <img
                                    src={card.image}
                                    alt="image"
                                    className="w-full h-40 object-cover rounded-md"
                                />
                                <div className="text-2xl font-bold mt-4">{card.title}</div>
                                <div className="text-gray-600 mt-4 text-justify">{card.content}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div>
                    <footer className="bg-gray-900">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 max-md:px-8   ">
                            <div className="pb-8 flex items-center justify-between">
                                <div className={"flex max-md:flex-col gap-8 max-md:gap-4"}>
                                    <div className={"cursor-pointer text-gray-300 font-bold hover:text-white transition"}
                                         onClick={() => scrollToSection("main")}
                                    >Ana Sayfa</div>
                                    <div className={"cursor-pointer text-gray-300 font-bold hover:text-white transition"}
                                         onClick={() => scrollToSection("about")}
                                    >Hakkımızda</div>
                                    <div className={"cursor-pointer text-gray-300 font-bold hover:text-white transition"}
                                         onClick={() => scrollToSection("actions")}
                                    >Faaliyetlerimiz</div>
                                </div>
                                <div className={"flex max-md:flex-col gap-8 max-md:gap-4"}>
                                    <div className={"text-2xl text-gray-300 cursor-pointer hover:text-white transition"}>
                                        <FaInstagram/>
                                    </div>
                                    <div className={"text-2xl text-gray-300 cursor-pointer hover:text-white transition"}>
                                        <FaYoutube />
                                    </div>
                                    <div className={"text-2xl text-gray-300 cursor-pointer hover:text-white transition"}>
                                        <FaXTwitter />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                        Bİze Katılmak İster Mİsİn?
                                    </h3>
                                    <p className="mt-2 text-base text-gray-300">
                                        Sayfanın en üst kısmındaki bize katıl butonuna tıklayarak bize katılabilirsin.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                                <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                                    &copy; 2022 Kardeş Hareketi, Inc. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
