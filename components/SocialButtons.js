import ArrowIcon from "./icons/ArrowIcon";
import EmailIcon from "./icons/EmailIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function SocialButtons({name, url}) {
    return (
        <div className="flex flex-col items-center mt-6 mb-4">
            <a
                className="btn btn-ghost w-full my-2 justify-between h-14"
                target="_blank"
                rel="noreferrer"
                href={"https://www.linkedin.com/sharing/share-offsite/?url=" + url}
                data-share-url={url}
                data-testid="ShareModal-ShareLink"
            >
                <LinkedinIcon />
                <p>Share to Linkedin</p>
                <ArrowIcon />
            </a>
            <a
                className="btn btn-ghost w-full my-2 justify-between h-14"
                target="_blank"
                rel="noreferrer"
                href={"mailto:?subject= Check out this link! &amp;body= " + name + " - " + url}
                data-share-url={url}
                data-testid="ShareModal-ShareLink"
            >
                <EmailIcon />
                <p>Share via email</p>
                <ArrowIcon />
            </a>
        </div>
    )
}