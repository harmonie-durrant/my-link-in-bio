import { useEffect, useRef, useState } from "react"
import NET from "vanta/dist/vanta.net.min"
import * as THREE from "three"
import LinkButton from "../components/LinkButton"
import CategoryDividor from "../components/CategoryDividor"

export default function Home() {

    const [vantaEffect, setVantaEffect] = useState(0)

    const vantaRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
        setVantaEffect(
            NET({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                maxDistance: 25.00,
                spacing: 18.00,
                color: 0xff9d9d,
                backgroundColor: 0x0
            })
        );
        }
        return () => {
        if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <main ref={vantaRef} className="w-screen min-h-screen flex flex-col justify-center items-center text-white">
            <div className="w-screen -full flex flex-col text-center justify-center items-center overflow-x-visible overflow-y-scroll">
                <div className="avatar my-4">
                    <div className="w-36 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                        <img src="/harmonie.jpg" />
                    </div>
                </div>
                <div className="text-4xl font-bold mb-4">
                    <h1 href="https://www.harmoniedurrant.com/">
                        Harmonie
                    </h1>
                </div>
                <LinkButton name="My Portfolio" url="https://harmoniedurrant.com" />
                <LinkButton name="My CV" url="https://www.canva.com/design/DAGKkS0IV8o/dGJ_4CPAH5uQKSCxBZTbug/view?utm_content=DAGKkS0IV8o&utm_campaign=designshare&utm_medium=link&utm_source=editor" />
                {/* Socials collapse */}
                <div className="collapse justify-center">
                    <input type="checkbox" className="peer" defaultChecked={true} />
                    <div className="collapse-title pe-0">
                        <CategoryDividor name="Socials" />
                    </div>
                    <div className="collapse-content">
                        <LinkButton name="👩‍💻 GitHub" url="https://github.com/harmonie_drnt" />
                        <LinkButton name="📷 Instagram" url="https://instagram.com/harmonie_drnt" />
                        <LinkButton name="👩‍💼 LinkedIn" url="https://www.linkedin.com/in/harmonie-durrant" />
                    </div>
                </div>
                {/* Projects collapse */}
                <div className="collapse justify-center">
                    <input type="checkbox" className="peer" defaultChecked={true} />
                    <div className="collapse-title pe-0">
                        <CategoryDividor name="Projects" />
                    </div>
                    <div className="collapse-content">
                        <LinkButton name="Wiki42" url="https://wiki42.harmoniedurrant.com" />
                        <LinkButton name="Harmonie's Games" url="https://games.harmoniedurrant.com" />
                        <LinkButton name="Ash Smoked Fishes" url="https://www.ashsmokedfishes.co.uk/" />
                        <LinkButton name="Clickn' Circles" url="https://harmonie-durrant.itch.io/clickn-circles" />
                    </div>
                </div>
            </div>
        </main>
    )
}
