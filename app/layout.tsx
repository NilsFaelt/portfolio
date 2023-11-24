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
      <meta name='theme-color' content='#FF0000' />
      <meta name='format-detection' content='telephone=no' />
      <link rel='manifest' href='../manifest.json' />
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ProviderWrapper>{children}</ProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
