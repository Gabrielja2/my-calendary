"use client";
import { useRef, useState } from "react";
import { Button, Input, OfflineUserModal } from "@/components";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { UserIcon, SearchIcon, XIcon } from "lucide-react";
import { getUSer } from "@/factories";
import { OnlineUserModal } from "@/components";

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

    const user = getUSer.execute();

    return (
        <header className="flex bg-gradient-to-r from-[--bg-light] to-[--bg-dark] shadow-lg h-16 items-center">
            <a
                className="flex text-[--text-dark] h-16 lg:w-[15%] md:w-[15%] sm:w-[15%] w-[80%] items-center justify-center"
                href="/"
            >
                <h1 className="text-xl text-[--bg-btn-dark] font-bold">
                    Events Calendary
                </h1>
            </a>

            <div className="flex text-[--text-dark] h-16 lg:w-[70%] md:w-[70%] sm:w-[70%]  w-[10%] items-center justify-center">
                <Input
                    ref={inputRef}
                    onChange={(e) => console.log(e.target.value)}
                    type="search"
                    className="hidden lg:inline md:inline sm:inline rounded border-gray-300 focus:outline-none focus:border-[--focus-border] w-full h-10 p-2 pr-10"
                    placeholder="Pesquise seus eventos"
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
                            <UserIcon size={26} />
                        </Button>
                    </div>
                </SheetTrigger>

                {user?.name ? <OnlineUserModal /> : <OfflineUserModal />}
            </Sheet>
            {openSearch ? (
                <div className="absolute top-0 right-0 text-[--text-dark]">
                    <Input
                        ref={inputModalRef}
                        onChange={(e) => console.log(e.target.value)}
                        className="rounded border border-gray-300 focus:outline-none focus:border-[--focus-border] w-screen h-16"
                        placeholder="Pesquise seus eventos"
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
