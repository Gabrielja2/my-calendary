import {
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "../ui/sheet";
import { Button } from "@/components";
import Link from "next/link";

export function OfflineUserModal() {
    return (
        <SheetContent
            side="right"
            className="w-[300px] bg-gradient-to-r from-[--bg-light] to-[--bg-dark]"
        >
            <SheetHeader className="mb-5 text-left">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                    {" "}
                    Olá visitante, seja muito bem vindo(a).
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
                        href="/create"
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
