import {Carousel} from "antd";
import {useEffect, useState} from "react";
import Image from "next/image";

import cocukparki from "@/Images/cocukParki.35.06.jpeg";
import elsallama from "@/Images/cocuklarElSalliyor.jpeg";
import partisapka from "@/Images/partiSapkaliCocuklar.jpeg";
import kolitasiyan from "@/Images/koliTasiyanEleman.jpeg";

export default function MainCarousel({ state, setCurrentState }) {
    const [localState, setLocalState] = useState(state);

    useEffect(() => {
        setLocalState(state);
    }, [state]);

    return (
        <div>
            <Carousel arrows={true} infinite={true} draggable={true} autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
                <div>
                    <Image src={cocukparki} alt={"1"} className={`${localState !== 0 ? "h-[400px]" : "h-[700px]"} w-full object-cover`} />
                </div>
                <div>
                    <Image src={elsallama} alt={"2"} className={`${localState !== 0 ? "h-[400px]" : "h-[700px]"} w-full object-cover`} />
                </div>
                <div>
                    <Image src={partisapka} alt={"3"} className={`${localState !== 0 ? "h-[400px]" : "h-[700px]"} w-full object-cover`} />
                </div>
                <div>
                    <Image src={kolitasiyan} alt={"4"} className={`${localState !== 0 ? "h-[400px]" : "h-[700px]"} w-full object-cover`} />
                </div>
            </Carousel>
        </div>
    )
}
