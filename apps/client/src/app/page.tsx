import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <section className="flex flex-col justify-center items-center h-screen w-full gap-4">
        <h2 className="text-xs uppercase">meet shelby</h2>
        <h1 className="text-3xl font-bold">E-Commerce Simplified</h1>
        <Link href="/Dashboard">
          <Button size="lg" variant="default">
            Start Shopping
          </Button>
        </Link>
      </section>
      <section className=" absolute bottom-2 right-2">
        <Button variant="secondary">🙋 Help</Button>
      </section>
    </main>
  );
}
