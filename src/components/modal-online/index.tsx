import {
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "../ui/sheet";
import { Button } from "@/components";
import { authenticationAdapter, logoutHelper } from "@/factories";
import Link from "next/link";

export function OnlineUserModal() {
    const token = JSON.parse(localStorage.getItem("token") as string);
    const user = authenticationAdapter.decodeJsonWebToken(token);

    const handleLogout = () => {
        logoutHelper.execute();
    };

    return (
        <SheetContent
            side="right"
            className="w-[300px] bg-gradient-to-r from-[--bg-light] to-[--bg-dark]"
        >
            <SheetHeader className="mb-12 text-left">
                <SheetTitle className="text-2xl">Menu</SheetTitle>
                <SheetDescription>
                    Olá {`${user?.name}`}, seja bem vindo.
                </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col mb-32 gap-4">
                <SheetTitle className="text-md mb-12">
                    <SheetClose asChild>
                        <Link href="/">Editar Perfil</Link>
                    </SheetClose>
                </SheetTitle>
                <SheetTitle className="text-md">
                    <SheetClose asChild>
                        <Link href="/schedules"> Ver eventos</Link>
                    </SheetClose>
                </SheetTitle>
                <SheetTitle className="text-md mb-12">
                    <SheetClose asChild>
                        <Link href="/"> Criar evento</Link>
                    </SheetClose>
                </SheetTitle>
                <SheetClose asChild>
                    <Button
                        className="hover:bg-[#000000d2] hover:shadow-sm rounded w-full py-2 px-4 bg-[--bg-btn-dark] text-white focus:outline-none disabled:opacity-50"
                        type="button"
                        onClick={handleLogout}
                    >
                        Sair
                    </Button>
                </SheetClose>
            </div>
            <SheetFooter>
                <SheetClose asChild>
                    <Button
                        className="hover:bg-[#f8432ed1] hover:shadow-sm rounded w-full m-auto py-2 px-4 bg-[--bg-btn-rosa] text-white focus:outline-none disabled:opacity-50"
                        type="button"
                    >
                        Fechar
                    </Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    );
}
