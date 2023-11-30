import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const features = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <header className="flex flex-col text-center mx-auto py-20 items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            TARS - Digital Marketplace 🤖{" "}
            <span className="text-5xl text-blue-600">
              The Digital Assests Docker.
            </span>
            .
          </h1>
          <p className="mt-6 text-lg  max-w-prose text-muted-foreground">
            Welcome to TARS..{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link className={buttonVariants()} href="/products">
              Browse Trending Assets
            </Link>
            <Button variant="secondary">The Assets That's Matter &rarr;</Button>
          </div>
        </header>

        {/* Porducts List */}
      </MaxWidthWrapper>

      <section className="border-t border-grey-200 bg-grey-50">
        <MaxWidthWrapper className="py-20">
          <div className="features grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {features.map((feature) => {
              return (
                <div
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                  key={feature.name}
                >
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {<feature.Icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>

                  <div className="mt-6 md:ml-4 md:mt-0 lg:mt-6 lg:ml-0">
                    <h3 className="text-base font-medium text-grey-900">
                      {feature.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
