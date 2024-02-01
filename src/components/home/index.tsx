// "use client";

import Link from "next/link";
import Calendar from "../calendar";

export function HomeComponent() {
    return (
        <div className="px-8">
            <div className="flex text-[--text-dark] gap-2 py-2">
                <div className="bg-red-500 w-8 flex flx-col"></div>
                <div className="">
                    <div>Data indisponível</div>
                </div>
            </div>
            <div className="flex text-[--text-dark] gap-2">
                <div className="bg-blue-500 w-8 flex flx-col"></div>
                <div className="">
                    <Link href="/schedules">Seus eventos</Link>
                </div>
            </div>
            <Calendar />
        </div>
    );
}
