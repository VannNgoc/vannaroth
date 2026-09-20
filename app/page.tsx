
import Hero from "@/ui/Hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-360 flex-col items-center">
              <Hero/>
      </main>
    </div>
  );
}
