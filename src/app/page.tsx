import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <header className="flex flex-col text-center mx-auto py-20 items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          TARS - Digital Marketplace{" "}
          <span className="text-5xl text-blue-600">
            The Digital Assests Docker.
          </span>
          .
        </h1>
        <p className="mt-6 text-lg  max-w-prose text-muted-foreground">
          Welcome to TARS,For{" "}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link className={buttonVariants()} href="/products">
            Browse Trending Assets
          </Link>
          <Button variant="secondary">The Assets That's Matter &rarr;</Button>
        </div>
      </header>
    </MaxWidthWrapper>
  );
}
