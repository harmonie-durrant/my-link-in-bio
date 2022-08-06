import { useEffect, useRef, useState } from "react"
import NET from "vanta/dist/vanta.net.min"
import * as THREE from "three"

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
                spacing: 18.00
            })
        );
        }
        return () => {
        if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <main ref={vantaRef} className="w-screen min-h-screen flex flex-col justify-center items-center text-white">
            <div className="max-w-5xl h-full flex flex-col text-center justify-center items-center">
                <p className="text-6xl font-bold mb-4">Reuban Bryenton</p>
                <p className="text-2xl font-semibold mb-16">All of these links will take you to one of my many social media or websites/projects</p>
                <a
                    href="https://github.com/reuban-bryenton"
                    className="mb-4 w-[80%] h-auto flex justify-center items-center"
                >
                    <button className="btn w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ariaHidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <g fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" />
                            </g>
                        </svg>
                        <p className="ml-4">GitHub</p>
                    </button>   
                </a>
                <a
                    href="https://instagram.com/reuban_bryenton"
                    className="mb-4 w-[80%] h-auto flex flex-col justify-center items-center"
                >
                    <button type="button" className="btn w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        Instagram
                    </button> 
                </a>
                <a
                    href="https://reubanbryenton.com"
                    className="mb-4 w-[80%] h-auto flex flex-col justify-center items-center"
                >
                    <button type="button" className="btn w-full text-white bg-gradient-to-br from-purple-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-purple-800">
                        More Soon (reubanbryenton.com)
                    </button> 
                </a>
            </div>
        </main>
    )
}
