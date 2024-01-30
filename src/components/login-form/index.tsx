"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon } from "lucide-react";
import { Button, Input } from "@/components";
import { handleSignInHelper, toastifyAdapter } from "@/factories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function LoginForm() {
    const [showPassword, setShowPassword] = useState("password");

    const loginFormSchema = z.object({
        email: z.string().email("Email inválido"),
        password: z
            .string()
            .min(8, "Sua senha deve conter pelo menos 8 caracteres"),
    });

    type LoginFormSchema = z.infer<typeof loginFormSchema>;

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleSignIn = handleSignInHelper.execute;

    const setVisible = () => {
        showPassword === "password"
            ? setShowPassword("text")
            : setShowPassword("password");
    };

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
                            autoComplete={"off"}
                            placeholder="exemplo@email.com"
                            className="h-10 rounded border font-normal border-gray-300 focus:outline-none focus:border-[--focus-border] px-2 py-2 mt-2 w-full"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-[--bg-btn-rosa] text-sm">
                            {errors.email.message}
                        </p>
                    )}
                </label>

                <label className="inline items-left text-[--text-dark] font-bold w-full mb-4">
                    Senha
                    <div className="relative items-center">
                        <Input
                            {...register("password")}
                            type={showPassword}
                            placeholder="Sua senha"
                            className="text-[--text-dark] h-10 rounded border font-normal border-gray-300 focus:outline-none focus:border-[--focus-border] px-2 py-2 mt-2 w-full"
                        />
                        <EyeIcon
                            onClick={setVisible}
                            className={"absolute top-4 right-4 z-0"}
                        />
                    </div>
                    {errors.password && (
                        <p className="text-[--bg-btn-rosa] text-sm">
                            {errors.password.message}
                        </p>
                    )}
                </label>

                <div className="flex flex-col items-center mt-4 w-full">
                    <Button
                        className="hover:bg-[#f8432ed1] hover:shadow-sm rounded w-full py-2 px-2 bg-[--bg-btn-rosa] text-white font-bold focus:outline-none disabled:opacity-70"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Carregando..." : "Entrar"}
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
