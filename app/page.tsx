
import Hero from "@/ui/Hero";
// import {Experience} from "@/ui/Experience";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-360 flex-col items-center">
          <Hero/>
          {/*<Experience/>*/}
      </main>
    </div>
  );
}
