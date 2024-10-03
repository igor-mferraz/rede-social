'use client'

import { useRouter } from "next/navigation"
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


export const SignupForm = () => {

    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEnterBtn = () => {
        router.replace('/home')
    }


    return(
        <>

            <Input 
                placeholder="Nome"
                type="text"
                value={name}
                onChange={e => setName(e)}

            />

            <Input 
                placeholder="E-mail"
                type="text"
                value={email}
                onChange={e => setEmail(e)}

            />

            <Input 
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e)}
                password
            />

            <Button
                label="Cadastrar"
                onClick={handleEnterBtn}
                size={1}
            />
        
        </>

)
}