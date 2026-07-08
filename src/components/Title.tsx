import Image from "next/image";

const Title = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-white bg-cover" />

            <p className="font-marck italic text-2xl mb-4 text-wedding-red">
                в этот день...
            </p>
            <h1 className="font-playfair text-4xl text-center mb-10 tracking-widest uppercase text-wedding-red">
                Владимир & Александра
            </h1>

            <div className="relative w-64 h-80 border-12 border-white shadow-xl rotate-2">
                <div className="absolute inset-0 border border-dashed border-stone-300 z-10" />
                <Image
                    src="/images/couple.jpeg"
                    alt="Владимир & Александра"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                />
            </div>

            <div className="mt-12 text-center space-y-4">
                <p className="font-playfair text-xl leading-relaxed px-4">
                    Любовь — это начало истории, которую мы создаем вместе
                </p>
                <p className="font-marck italic text-2xl text-wedding-red">
                    мы поженимся
                </p>
            </div>
        </section>
    );
};

export default Title;
