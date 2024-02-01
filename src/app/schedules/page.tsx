import { EventsCards, Footer, Header } from "@/components";
import { Suspense } from "react";

export default function Schedules() {
    return (
        <>
            <Header />
            <main className="flex flex-col border h-screen w-full px-8">
                <h1 className="sm:text-3xl text-[--bg-btn-dark] font-bold flex items-center justify-start sm:w-[50%] h-32">
                    Confira seus eventos
                </h1>

                <EventsCards />
            </main>
            <Footer />
        </>
    );
}
