"use client";
import { useRef, useState } from "react";
import { Button, Input } from "@/components";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { LogInIcon, UserIcon, SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
    const [menuModal, setMenuModal] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputModalRef = useRef<HTMLInputElement>(null);

    const handleOpenMenuModal = () => {
        setMenuModal(!menuModal);
    };

    const handleOpenSearch = () => {
        setOpenSearch(!openSearch);
    };

    return (
        <header className="flex bg-gradient-to-r from-[--bg-light] to-[--bg-dark] shadow-lg h-16 items-center">
            <div className="flex text-[--text-dark] h-16 lg:w-[15%] md:w-[15%] sm:w-[15%] w-[80%] items-center justify-center">
                <h1 className="text-xl font-bold">Clean Architecture</h1>
            </div>

            <div className="flex text-[--text-dark] h-16 lg:w-[70%] md:w-[70%] sm:w-[70%]  w-[10%] items-center justify-center">
                <Input
                    ref={inputRef}
                    onChange={(e) => console.log(e.target.value)}
                    type="search"
                    className="hidden lg:inline md:inline sm:inline rounded border-gray-300 focus:outline-none focus:border-[--focus-border] w-full h-10 p-2 pr-10"
                    placeholder="Pesquise pelos seus produtos favoritos"
                />
                <Button className="" id="search_btn1">
                    <SearchIcon className="hidden sm:inline ml-4" />
                </Button>
                <Button
                    className="sm:hidden inline"
                    onClick={handleOpenSearch}
                    id="search_btn2"
                >
                    <SearchIcon />
                </Button>
            </div>

            <Sheet>
                <SheetTrigger asChild>
                    <div className="flex text-[--text-dark] h-16 w-[10%] lg:w-[15%] md:w-[15%] items-center justify-center">
                        <Button onClick={handleOpenMenuModal}>
                            <UserIcon />
                        </Button>
                    </div>
                </SheetTrigger>

                <SheetContent
                    side="right"
                    className="w-[300px] bg-gradient-to-r from-[--bg-light] to-[--bg-dark]"
                >
                    <SheetHeader className="mb-5 text-left">
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>
                            {" "}
                            Olá {`${"fulano"}`}, seja bem vindo.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col mb-32 gap-4">
                        <SheetClose asChild>
                            <Link
                                className="flex flex-col items-center w-full mb-8"
                                href="/login"
                            >
                                <Button
                                    className="hover:bg-[#000000d2] hover:shadow-sm rounded w-full py-2 px-4 bg-[--bg-btn-dark] text-white focus:outline-none disabled:opacity-50"
                                    type="submit"
                                >
                                    Entrar
                                </Button>
                            </Link>
                        </SheetClose>
                        <SheetHeader className="">
                            <SheetDescription>
                                {" "}
                                Ainda não tem uma conta? Crie já.
                            </SheetDescription>
                        </SheetHeader>
                        <SheetClose asChild>
                            <Link
                                className="flex flex-col items-center w-full mb-4"
                                href="/login"
                            >
                                <Button
                                    className="hover:bg-[#000000d2] hover:shadow-sm rounded w-full py-2 px-4 bg-[--bg-btn-dark] text-white focus:outline-none disabled:opacity-50"
                                    type="submit"
                                >
                                    Criar
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button
                                className="hover:bg-[#f8432ed1] hover:shadow-sm rounded w-1/2 m-auto py-2 px-4 bg-[--bg-btn-rosa] text-white focus:outline-none disabled:opacity-50"
                                type="button"
                            >
                                Fechar
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
            {openSearch ? (
                <div className="absolute top-0 right-0 text-[--text-dark]">
                    <Input
                        ref={inputModalRef}
                        onChange={(e) => console.log(e.target.value)}
                        className="rounded border border-gray-300 focus:outline-none focus:border-[--focus-border] w-screen h-16"
                        placeholder="Pesquise pelos seus produtos favoritos"
                    />

                    <Button>
                        <SearchIcon className="absolute right-12 top-5" />
                    </Button>

                    <Button onClick={handleOpenSearch}>
                        <XIcon className="absolute right-1 top-5" size={24} />
                    </Button>
                </div>
            ) : null}
        </header>
    );
}
