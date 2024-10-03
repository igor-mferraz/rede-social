import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { HeaderGeneral } from "@/components/ui/header-general";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { user } from "@/data/user";
import { faCamera, faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page(){


    const isMe = true;

    return(
        <div>
            <HeaderGeneral backHref="/">
                <div className="font-bold text-lg">Editar Perfil</div>
            </HeaderGeneral>
            <section className="border-b-2 border-gray-900">
                <div 
                    style={{backgroundImage: 'url('+user.cover+')'}}
                    className="flex justify-center items-center gap-4 bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
                >

                    <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
                        <FontAwesomeIcon icon={faCamera} className="size-6"/>
                    </div>
                    <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
                        <FontAwesomeIcon icon={faXmark} className="size-6"/>
                    </div>

                </div>

                <div className="-mt-12 px-6">
                    <img 
                        src={user.avatar} 
                        alt=""
                        className="size-24 rounded-full"
                        />
                        <div className="-mt-24 size-24 flex justify-center items-center">
                            <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
                                <FontAwesomeIcon icon={faCamera} className="size-6"/>
                            </div>
                        </div>
                </div>
            </section>
            <section className="p-6 flex flex-col gap-4">
                <label htmlFor="">
                    <p className="text-lg text-gray-500">Nome</p>
                        <Input
                            type="text"
                            placeholder="Digite seu Nome"
                            value={user.name}
                        />
                    
                </label>

                <label htmlFor="">
                    <p className="text-lg text-gray-500">Bio</p>
                        <Textarea
                            placeholder="Biografia"
                            rows={2}
                            value={user.bio}
                        />
                </label>

                <label htmlFor="">
                    <p className="text-lg text-gray-500">Link</p>
                        <Input
                            type="text"
                            placeholder="Digite um link"
                            value={user.link}
                        />
                </label>

                <Button
                    label="Salvar alterações"
                    size={1}
                />


            </section>
        </div>
    )
}