import { TweetItem } from "@/components/tweet/tweet-item";
import { TweetPost } from "@/components/tweet/tweet-post";
import { HeaderGeneral } from "@/components/ui/header-general";
import { tweet } from "@/data/tweet";

export default function Page(){
    return(
        <div>
            <HeaderGeneral backHref="/">
                <div className="font-bol text-lg">
                    Voltar
                </div>
            </HeaderGeneral>
            <div className="border-t-2 border-gray-900">
                <TweetItem tweet={tweet} />


                <div className="border-y-8 border-gray-900">
                    <TweetPost/>
                </div>

                <TweetItem tweet={tweet} hideComments/>
            </div>
        </div>
    )
}