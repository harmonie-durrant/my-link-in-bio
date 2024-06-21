import SocialButtons from "./SocialButtons";
import HamburgerIcon from "./icons/HamburgerIcon";

export default function LinkButton({name, url}) {

    return (
        <>
            <div className="text-black flex justify-around items-center max-w-xl w-[95VW] h-16 mb-4 bg-white rounded-xl hover:scale-105 overflow-visible duration-150">
                <a href={url} className="flex-1 text-lg mobile:text-xl font-semibold">{name}</a>
                <button onClick={()=>document.getElementById('socials_model_'+name).showModal()} className="mx-4 p-2 h-[80%]">
                    <HamburgerIcon />
                </button>
            </div>
            <dialog id={"socials_model_" + name} className="modal">
                <div className="text-black max-w-[33rem] w-[85VW] bg-white rounded-2xl hover:scale-105 overflow-visible duration-150 modal-box">
                    <form method="dialog">
                        <div className="w-full flex flex-row">
                            <h3 className="font-bold text-xl flex-1">
                                Share this link
                            </h3>
                            <button className="btn btn-sm btn-circle btn-ghost">
                                ✕
                            </button>
                        </div>
                    </form>
                    <SocialButtons name={name} url={url} />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}