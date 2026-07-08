import Title from "@/components/Title";
import Marquee from "@/components/Marquee";
import Timeline from "@/components/Timeline";
import Invitation from "@/components/Invitation";
import RSVPForm from "@/components/RSVPForm";
import CountdownTimer from "@/components/CountdownTimer";
import TelegramChat from "@/components/TelegramChat";
import FooterSection from "@/components/FooterSection";
import Delimiter from "@/components/DelimiterProps";

export default function WeddingPage() {
    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-wedding-cream flex flex-col items-center">
            <Marquee />
            <Title />

            <Invitation />
            <Delimiter />

            <Timeline />
            <Delimiter />

            <RSVPForm />
            <TelegramChat telegramLink="https://t.me/твой_чат" />
            <Delimiter />

            <CountdownTimer />
            <FooterSection />
        </main>
    );
}
