import {Carousel} from "antd";
import {useEffect, useState} from "react";

export default function MainCarousel({ state, setCurrentState }) {
    const [localState, setLocalState] = useState(state);

    useEffect(() => {
        setLocalState(state);
    }, [state]);

    return (
        <div>
            <Carousel arrows={true} infinite={true} draggable={true} autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
                <div>
                    <img src="https://i.imghippo.com/files/mac6312nE.jpeg" alt="1" className={`${localState !== 0 ? "h-[400px]" : "h-[700px]"} w-full object-cover`}/>
                </div>
                <div>
                    <img src="https://i.imghippo.com/files/OsIO2212kJs.jpeg" alt="2" className={`${localState !== 0 ? "h-[400px]" : "h-[700px]"} w-full object-cover`}/>
                </div>
                <div>
                    <img src="https://i.imghippo.com/files/mac6312nE.jpeg" alt="3" className={`${localState !== 0 ? "h-[400px]" : "h-[700px]"} w-full object-cover`}/>
                </div>
                <div>
                    <img src="https://i.imghippo.com/files/mac6312nE.jpeg" alt="4" className={`${localState !== 0 ? "h-[400px]" : "h-[700px]"} w-full object-cover`}/>
                </div>
            </Carousel>
        </div>
    )
}
