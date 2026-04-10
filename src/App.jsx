import Hero from "./components/Hero";
import ComoFunciona from "./components/ComoFunciona";
import Calculadora from "./components/Calculadora";
import Impacto from "./components/Impacto";
import Contato from "./components/Contato";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Hero />
      <ComoFunciona />
      <Calculadora />
      <Impacto />
      <Contato />
    </div>
  );
}