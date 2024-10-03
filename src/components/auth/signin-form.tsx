'use client'

import { useRouter } from "next/navigation"
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


export const SigninForm = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEnterBtn = () => {
        router.replace('/home')
    }


    return(
        <>
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
                label="Entrar"
                onClick={handleEnterBtn}
                size={1}
            />
        
        </>

)
}