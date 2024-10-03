type Props = {
    placeholder: string;
    rows: number;
    filled?: boolean;
    value?:string;
}

export const Textarea = ({placeholder,rows,value,filled}:Props) => {
    return(
        <div className="flex items-center rounded-3xl border-gray-700 border-2 has-[:focus]:border-white">
            <textarea
                className="flex-1 outline-none bg-transparent h-full p-5 resize-none"
                placeholder={placeholder}
                value={value}
                rows={rows}
                >

            </textarea>
        </div>
    )
}