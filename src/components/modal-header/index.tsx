import { Button } from "@/components";
import Link from "next/link";

export function ModalHeader() {
    return (
        <div className="gap-4 bg-gradient-to-t from-[--bg-light] to-[--bg-dark] lg:w-1/5 w-full shadow-lg rounded flex flex-col absolute top-20 right-0 lg:mx-16 px-4 py-4">
            <Link
                className="flex flex-col items-center w-full mb-4"
                href="/login"
            >
                <Button
                    className="hover:bg-[#000000d2] rounded w-full py-2 px-4 bg-[--bg-btn-dark] text-white focus:outline-none disabled:opacity-50"
                    type="submit"
                >
                    Entrar
                </Button>
            </Link>

            <span className="text-sm flex items-center flex-col w-full text-black">
                Ainda não tem uma conta?
            </span>
            <Link className="flex flex-col items-center w-full" href="/create">
                <Button
                    className="hover:bg-[#000000d2] rounded w-full py-2 px-4 bg-[--bg-btn-dark] text-white focus:outline-none disabled:opacity-50"
                    type="submit"
                >
                    Criar
                </Button>
            </Link>
        </div>
    );
}
