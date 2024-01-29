"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createUserService, handleSignupHelper } from "@/factories";
import { Input } from "@/components";
import { FaEye } from "react-icons/fa";
import { toastifyAdapter } from "@/factories";

export function CreateUserForm() {
    const [showPassword, setShowPassword] = useState("password");
    const [showConfirmPassword, setShowConfirmPassword] = useState("password");

    const {
        register,
        watch,
        reset,
        handleSubmit,
        formState,
        formState: { isSubmitSuccessful },
    } = useForm();

    const formData = watch();

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

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        }
    }, [formState, reset]);

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
                            required={true}
                            placeholder="Seu nome"
                            className="h-10 rounded border font-normal border-gray-300 focus:outline-none focus:border-[--focus-border] px-2 py-2 mt-2 w-full"
                        />
                    </div>
                </label>

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
                <label className="inline items-left text-[--text-dark] font-bold w-full mb-4">
                    Senha
                    <div className="relative items-center">
                        <Input
                            {...register("password")}
                            type={showPassword}
                            required={true}
                            placeholder="Sua senha"
                            className="h-10 rounded border font-normal border-gray-300 focus:outline-none focus:border-[--focus-border] px-2 py-2 mt-2 w-full"
                        />
                        <FaEye
                            onClick={setVisiblePassword}
                            size={25}
                            className={"absolute top-4 right-4"}
                        />
                    </div>
                </label>

                <label className="inline items-left text-[--text-dark] font-bold w-full mb-8">
                    Confirmar senha
                    <div className="relative items-center">
                        <Input
                            {...register("confirmPassword")}
                            type={showConfirmPassword}
                            required={true}
                            placeholder="Confirme sua senha"
                            className="h-10 rounded border font-normal border-gray-300 focus:outline-none focus:border-[--focus-border] px-2 py-2 mt-2 w-full"
                        />
                        <FaEye
                            onClick={setVisibleConfirmPassword}
                            size={25}
                            className={"absolute top-4 right-4"}
                        />
                    </div>
                </label>

                <div className="flex flex-col items-center mt-4 w-full">
                    <button
                        className="hover:bg-[#000000d2] rounded w-full py-2 px-2 bg-[--bg-btn-dark] text-white font-bold focus:outline-none disabled:opacity-50"
                        type="submit"
                        disabled={
                            !formData.username &&
                            !formData.email &&
                            !formData.password &&
                            !formData.confirmPassword
                        }
                    >
                        Criar
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
