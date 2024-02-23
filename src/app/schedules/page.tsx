import { EventsCards, Footer, Header } from "@/components";

export default function Schedules() {
    return (
        <>
            <Header />
            <main className="flex flex-col h-screen w-full px-8">
                <h1 className="text-3xl text-[--bg-btn-dark] font-bold flex items-center justify-start sm:w-[50%] h-32">
                    Confira seus eventos
                </h1>

                <EventsCards />
            </main>
            <Footer />
        </>
    );
}
