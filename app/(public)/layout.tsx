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

      {/* Main content */}
      <main className=" mx-auto">{children}</main>

      {/* Footer*/}
      <Footer />

    </>
  );
}
