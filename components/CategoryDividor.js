
export default function CategoryDividor({title}) {
    return (
        <div className="flex justify-around items-center max-w-xl w-[95VW] h-16 mt-8 mb-4">
            <h2 className="flex-1 text-2xl mobile:text-xl font-bold">{title}</h2>
        </div>
    )
}