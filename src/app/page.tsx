import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col text-center mx-auto py-20 items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          TARS - Digital Marketplace{" "}
          <span className="text-blue-600">Digital Assets</span>.
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
