import StyledComponentsRegistry from "@/lib/registry";
import { ProviderWrapper } from "@/provider";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const inter = Lato({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nils Falt",
  description: "Portfoliio by Nils Falt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ProviderWrapper>{children}</ProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
