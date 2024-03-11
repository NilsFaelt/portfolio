import StyledComponentsRegistry from "@/lib/registry";
import { ProviderWrapper } from "@/provider";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const inter = Lato({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nils Falt - Portfolio",
  description:
    "Explore Nils Falt's portfolio showcasing JavaScript and TypeScript development projects.",
  icons: {
    icon: "/svg/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta name='theme-color' content='#000000' />
        <meta name='format-detection' content='telephone=no' />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ProviderWrapper>{children}</ProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
