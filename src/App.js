import AboutMe from "./scripts/AboutMe";
import Header from "./scripts/Header";
import Hero from "./scripts/Hero";
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
        <AboutMe />
      </main>

    </div>
  );
};
