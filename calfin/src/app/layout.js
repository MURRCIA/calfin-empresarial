import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CalFin Empresarial - Calculadora Empresarial Inteligente",
  description: "Descubre tus costos, ingresos y utilidades sin saber cálculo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

