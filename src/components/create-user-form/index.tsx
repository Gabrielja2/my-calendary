"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { handleSignupHelper } from "@/factories";
import { Input } from "@/components";
import { EyeIcon } from "lucide-react";
import { toastifyAdapter } from "@/factories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function CreateUserForm() {
    const [showPassword, setShowPassword] = useState("password");
    const [showConfirmPassword, setShowConfirmPassword] = useState("password");

    const createFormSchema = z
        .object({
            username: z
                .string()
                .min(3, "Seu nome deve conter pelo menos 3 caracteres"),
            email: z.string().email("Email inválido"),
            password: z
                .string()
                .min(8, "Sua senha deve conter pelo menos 8 caracteres")
                .regex(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([0-9a-zA-Z])){8,}$/,
                    "Deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número"
                ),
            confirmPassword: z
                .string()
                .min(8, "Sua senha deve conter pelo menos 8 caracteres")
                .regex(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([0-9a-zA-Z])){8,}$/,
                    "Sua senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número"
                ),
        })
        .refine(
            ({ password, confirmPassword }) => password === confirmPassword,
            {
                message: "As senhas devem ser iguais",
                path: ["confirmPassword"],
            }
        );

    type LoginFormSchema = z.infer<typeof createFormSchema>;

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<LoginFormSchema>({
        resolver: zodResolver(createFormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const handleSignUp = handleSignupHelper.execute;
    const setVisiblePassword = () => {
        showPassword === "password"
            ? setShowPassword("text")
            : setShowPassword("password");
    };

    const setVisibleConfirmPassword = () => {
        showConfirmPassword === "password"
            ? setShowConfirmPassword("text")
            : setShowConfirmPassword("password");
    };

    return (
        <section className="flex flex-col w-full lg:w-1/2 lg:border-l lg:border-[--border-dark] lg:h-[90%] lg:m-auto h-full items-center p-8">
            <h1 className="flex flex-col items-center lg:items-center justify-center font-bold lg:w-[50%] w-full h-[20%] text-4xl text-[--title-dark] mb-8">
                Crie sua conta
            </h1>

            <form
                onSubmit={handleSubmit(handleSignUp)}
                className="flex flex-col items-center justify-start lg:w-[50%] h-[80%] w-full text-lg"
            >
                <label className="flex flex-col items-left text-[--text-dark] font-bold w-full mb-4">
                    Nome
                    <div className="flex items-center">
                        <Input
                            {...register("username")}
                            type="text"
                            autoComplete={"off"}
                            placeholder="Seu nome"
                            className="h-10 rounded border font-normal border-gray-300 focus:outline-none focus:border-[--focus-border] px-2 py-2 mt-2 w-full"
                        />
                    </div>
                    {errors.username && (
                        <p className="text-[--bg-btn-rosa] text-sm">
                            {errors.username.message}
                        </p>
                    )}
                </label>

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
                            className="h-10 rounded border font-normal border-gray-300 focus:outline-none focus:border-[--focus-border] px-2 py-2 mt-2 w-full"
                        />
                        <EyeIcon
                            onClick={setVisiblePassword}
                            className={"absolute top-4 right-4"}
                        />
                    </div>
                    {errors.password && (
                        <p className="text-[--bg-btn-rosa] text-sm">
                            {errors.password.message}
                        </p>
                    )}
                </label>

                <label className="inline items-left text-[--text-dark] font-bold w-full mb-8">
                    Confirmar senha
                    <div className="relative items-center">
                        <Input
                            {...register("confirmPassword")}
                            type={showConfirmPassword}
                            placeholder="Confirme sua senha"
                            className="h-10 rounded border font-normal border-gray-300 focus:outline-none focus:border-[--focus-border] px-2 py-2 mt-2 w-full"
                        />
                        <EyeIcon
                            onClick={setVisibleConfirmPassword}
                            className={"absolute top-4 right-4"}
                        />
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-[--bg-btn-rosa] text-sm">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </label>

                <div className="flex flex-col items-center mt-4 w-full">
                    <button
                        className="hover:bg-[#f8432ed1] hover:shadow-sm rounded w-full py-2 px-2 bg-[--bg-btn-rosa] text-white font-bold focus:outline-none disabled:opacity-70"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Criando..." : "Criar"}
                    </button>
                </div>

                <p className="flex items-center justify-center mt-4 text-[--text-dark] font-light text-sm">
                    Já possui uma conta?
                    <a
                        className="hover:underline text-blue-700 font-light ml-2"
                        href="/login"
                    >
                        Login
                    </a>
                </p>
            </form>
            {toastifyAdapter.toastContainer({})}
        </section>
    );
}
