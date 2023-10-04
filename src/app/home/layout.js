import "@/app/globals.css";
import { Inter } from "next/font/google";
import { TokenProvider } from "@/context/contextToken";
import { UserProvider } from "@/context/contextUsers";
import { ProductProvider } from "@/context/contextProducts";
import Nav from "@/components/simpleComponents/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Store",
  description: "Project store next",
};

export default function HomeLayout({ children }) {
  return (
    <>
      <TokenProvider>
        <UserProvider>
          <ProductProvider>
            <Nav></Nav>
            {children}
          </ProductProvider>
        </UserProvider>
      </TokenProvider>
    </>
  );
}
