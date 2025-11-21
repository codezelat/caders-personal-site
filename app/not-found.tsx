import Link from "next/link";
import Header from "./Components/Header";
import FooterContent from "./Components/Footer-Content";
import FooterPage from "./Components/footer";
import Button from "./Components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative isolate min-h-screen bg-linear-to-br from-[#efecff] via-white to-[#e6f0ff] px-4 pb-20 pt-28 sm:px-8 lg:px-14">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-[#03045E]/15 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-48 w-48 rounded-full bg-primary-dark/10 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-3xl" />
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 rounded-[28px] bg-white/80 p-8 text-center shadow-xl shadow-black/5 ring-1 ring-[#03045E]/10 backdrop-blur sm:p-12 lg:p-16">
          <div className="space-y-3">
            <p className="font-poppins text-sm uppercase tracking-[0.14em] text-gray-500">
              Error 404
            </p>
            <h1 className="font-playball text-5xl leading-tight text-[#03045E] sm:text-6xl">
              Page not found
            </h1>
            <p className="font-poppins text-base leading-relaxed text-gray-700 sm:text-lg">
              The page you are looking for may have moved or no longer exists.
              Let&apos;s get you back to Cader&apos;s work and ventures.
            </p>
          </div>

          <div className="grid w-full">
            <Link href="/" className="min-w-full justify-center">
              <Button size="lg">Return Home</Button>
            </Link>
          </div>
        </div>
      </main>
      <FooterContent />
      <FooterPage />
    </>
  );
}
