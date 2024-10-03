import { TredingItem, TredingItemSkeleton } from "./treding-item"

export const TredingArea = () => {
    return(
        <div className="bg-gray-700 rounded-3xl">
            <h2 className="text-xl p-6">O que está acontecendo</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                <TredingItem label="#teste" count={12}/>
                <TredingItem label="#teste" count={12}/>
                <TredingItemSkeleton/>
                <TredingItemSkeleton/>
            </div>
        </div>
    )
}