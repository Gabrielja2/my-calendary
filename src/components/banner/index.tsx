import Image from "next/image";

export function Banner() {
    return (
        <section className="hidden lg:flex lg:h-[90%] lg:m-auto lg:flex-col lg:items-center lg:justify-center lg:w-1/2">
            <Image
                src="/calendar.png"
                sizes="100vw"
                width={0}
                height={0}
                alt="banner"
                className="h-[50%] sm:w-[50%]"
                priority
            />
        </section>
    );
}
