import SobreMim from "./scripts/SobreMim";
import Header from "./scripts/Header";
import Hero from "./scripts/Hero";
import Projetos from "./scripts/Projetos";
import Footer from "./scripts/Footer";

import { useTheme } from "./scripts/ThemeContext";
import "./styles/appStyle.css";

export default function App() {
  const { theme } = useTheme();

  const appStyle = {
    "--color-background": theme.colors.background,
    "--color-texto": theme.colors.texto
  };

  return (
    <div className="principal" style={appStyle}>
      <Header />
        <main>
          <Hero />
          <SobreMim />
          <Projetos />
        </main>
      <Footer />
    </div>
  );
};
