import {
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "../ui/sheet";
import { Button } from "@/components";
import { getUSer } from "@/factories";
import Link from "next/link";

export function OnlineUserModal() {
    const user = getUSer.execute();

    return (
        <SheetContent
            side="right"
            className="w-[300px] bg-gradient-to-r from-[--bg-light] to-[--bg-dark]"
        >
            <SheetHeader className="mb-12 text-left">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                    Olá {`${user?.name}`}, seja bem vindo.
                </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col mb-32 gap-4">
                <SheetTitle>
                    <Link href="/login">Agendar um evento</Link>
                </SheetTitle>
                <SheetTitle className="mb-12">
                    <Link href="/login"> Ver eventos</Link>
                </SheetTitle>
                <SheetClose asChild>
                    <Link
                        className="flex flex-col items-center w-full mb-8"
                        href="/login"
                    >
                        <Button
                            className="hover:bg-[#000000d2] hover:shadow-sm rounded w-full py-2 px-4 bg-[--bg-btn-dark] text-white focus:outline-none disabled:opacity-50"
                            type="submit"
                        >
                            Sair
                        </Button>
                    </Link>
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
