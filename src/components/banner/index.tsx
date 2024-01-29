import Image from "next/image";

export function Banner() {
    return (
        <section className="hidden lg:flex lg:h-[90%] lg:m-auto lg:flex-col lg:items-center lg:justify-center lg:w-1/2">
            <Image
                src="/calendary.png"
                sizes="100vw"
                width={0}
                height={0}
                alt="banner"
                className="lg:h-[50%] w-[50%] "
            />
        </section>
    );
}
