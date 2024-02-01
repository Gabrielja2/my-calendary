"use client";
import { useEffect, useState } from "react";
import { Button, OfflineUserModal } from "@/components";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { UserIcon } from "lucide-react";
import { OnlineUserModal } from "@/components";

export function Header() {
    const [menuModal, setMenuModal] = useState(false);
    const [token, setToken] = useState("");

    const handleOpenMenuModal = () => {
        setMenuModal(!menuModal);
    };

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token") as string);
        setToken(token);
    });

    return (
        <header className="flex bg-gradient-to-r from-[--bg-light] to-[--bg-dark] shadow-sm h-16 items-center justify-between px-8">
            <a
                className="flex text-[--text-dark] h-16 sm:w-[50%] w-[80%] items-center justify-start"
                href="/"
            >
                <h1 className="text-xl text-[--bg-btn-dark] font-bold">
                    Events Calendary
                </h1>
            </a>

            <Sheet>
                <SheetTrigger asChild>
                    <div className="flex text-[--text-dark] h-16 w-[10%] sm:w-[50%] items-center justify-end">
                        <Button onClick={handleOpenMenuModal}>
                            <UserIcon size={26} />
                        </Button>
                    </div>
                </SheetTrigger>

                {token ? <OnlineUserModal /> : <OfflineUserModal />}
            </Sheet>
        </header>
    );
}
