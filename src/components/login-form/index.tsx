"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Button, Input } from "@/components";
import { handleSignInHelper, toastifyAdapter } from "@/factories";

export function LoginForm() {
    const [showPassword, setShowPassword] = useState("password");

    const {
        register,
        watch,
        reset,
        handleSubmit,
        formState,
        formState: { isSubmitSuccessful },
    } = useForm();

    const formData = watch();

    const handleSignIn = handleSignInHelper.execute;

    const setVisible = () => {
        showPassword === "password"
            ? setShowPassword("text")
            : setShowPassword("password");
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                email: "",
                password: "",
            });
        }
    }, [formState, reset]);

    return (
        <section className="flex flex-col w-full lg:w-1/2 lg:border-l lg:border-[--border-dark] lg:h-[90%] lg:m-auto h-full items-center p-8">
            <h1 className="flex flex-col items-center lg:items-center justify-center font-bold lg:w-[50%] w-full h-[20%] text-4xl text-[--title-dark] mb-8">
                Login
            </h1>

            <form
                onSubmit={handleSubmit(handleSignIn)}
                className="flex flex-col items-center justify-start lg:w-[50%] h-[80%] w-full text-lg"
            >
                <label className="flex flex-col items-left text-[--text-dark] font-bold w-full mb-4">
                    Email
                    <div className="flex items-center">
                        <Input
                            {...register("email")}
                            type="email"
                            required={true}
                            placeholder="exemplo@email.com"
                            className="h-10 rounded border font-normal border-gray-300 focus:outline-none focus:border-[--focus-border] px-2 py-2 mt-2 w-full"
                        />
                    </div>
                </label>

                <label className="inline items-left text-[--text-dark] font-bold w-full">
                    Senha
                    <div className="relative items-center">
                        <Input
                            id="password"
                            {...register("password")}
                            type={showPassword}
                            required={true}
                            placeholder="Sua senha"
                            className="text-[--text-dark] h-10 rounded border font-normal border-gray-300 focus:outline-none focus:border-[--focus-border] px-2 py-2 mt-2 w-full"
                        />
                        <FaEye
                            onClick={setVisible}
                            size={25}
                            className={"absolute top-4 right-4 z-0"}
                        />
                    </div>
                </label>

                <a
                    className="flex w-full justify-end text-[--text-dark] hover:underline font-light text-sm mb-4"
                    href="/recovery-password-link"
                >
                    Esqueci minha senha
                </a>

                <div className="flex flex-col items-center mt-4 w-full">
                    <Button
                        className="hover:bg-[#000000d2] rounded w-full py-2 px-4 bg-[--bg-btn-dark] text-white focus:outline-none disabled:opacity-50"
                        type="submit"
                        disabled={!formData.email || !formData.password}
                    >
                        Entrar
                    </Button>
                </div>

                <p className="flex items-center justify-center mt-4 text-[--text-dark] font-light text-sm">
                    Ainda não possui uma conta?
                    <a
                        className="hover:underline text-blue-700 font-light ml-2"
                        href="/create"
                    >
                        Criar
                    </a>
                </p>
            </form>
            {toastifyAdapter.toastContainer({})}
        </section>
    );
}
