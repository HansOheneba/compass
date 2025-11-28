import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
// import Script from "next/script";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header */}
      <Header />
      <div className="h-10"></div>

      {/* Main content */}
      <main className=" mx-auto  md:pt-8 ">{children}</main>

      {/* Footer*/}
      <Footer />

    </>
  );
}
