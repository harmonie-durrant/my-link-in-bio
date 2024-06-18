import HamburgerIcon from "./icons/HamburgerIcon";

export default function LinkButton({title, url}) {

    var openSocials = () => {
        console.log("Opens socials...");
    };

    return (
        <div className="text-black flex justify-around items-center max-w-xl w-[95VW] h-16 mb-4 bg-white rounded-md">
            <a href={url} className="flex-1 text-lg mobile:text-xl font-semibold">{title}</a>
            <button onClick={openSocials} className="mx-4 p-2 h-[80%]">
                <HamburgerIcon />
            </button>
        </div>
    )
}