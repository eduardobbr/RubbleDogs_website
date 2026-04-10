import { useMemo, useState } from "react";
import ModelViewer from "./ModelViewer";

import dogBowlModel from "../assets/models/dog_bowl_-_empty.glb";
import dogHouseModel from "../assets/models/dog_house_free.glb";

export default function Calculadora() {
  const [toneladasReboco, setToneladasReboco] = useState("");
  const [toneladasMadeira, setToneladasMadeira] = useState("");

  const KG_POR_TONELADA = 1000;

  const pesoPorVasilhaKg = 3;
  const pesoPorCasinhaKg = 40;

  // dimensões exemplo da casinha
  const dimensoesCasinha = {
    largura: "80 cm",
    profundidade: "95 cm",
    altura: "85 cm",
    aberturaLargura: "30 cm",
    aberturaAltura: "40 cm",
  };

  const resultados = useMemo(() => {
    const reboco = Number(toneladasReboco) || 0;
    const madeira = Number(toneladasMadeira) || 0;

    const kgReboco = reboco * KG_POR_TONELADA;
    const kgMadeira = madeira * KG_POR_TONELADA;

    const vasilhas = Math.floor(kgReboco / pesoPorVasilhaKg);
    const casinhas = Math.floor(kgMadeira / pesoPorCasinhaKg);

    const totalResiduos = reboco + madeira;
    const impactoTotal = vasilhas + casinhas;

    return {
      kgReboco,
      kgMadeira,
      vasilhas,
      casinhas,
      totalResiduos,
      impactoTotal,
    };
  }, [toneladasReboco, toneladasMadeira]);

  return (
    <section
      id="calculadora"
      className="border-y border-slate-200 bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Calculadora de impacto
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Simule o potencial de reaproveitamento
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Informe o volume processado e veja quantas vasilhas e casinhas podem
            ser geradas a partir do reaproveitamento dos resíduos.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Toneladas de reboco processado
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={toneladasReboco}
                  onChange={(e) => setToneladasReboco(e.target.value)}
                  placeholder="Ex: 10"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-lg outline-none transition focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Toneladas de madeira reaproveitada
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={toneladasMadeira}
                  onChange={(e) => setToneladasMadeira(e.target.value)}
                  placeholder="Ex: 3"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-lg outline-none transition focus:border-emerald-500"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-emerald-500 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.16em] text-emerald-100">
                    Vasilhas estimadas
                  </p>
                  <h3 className="mt-3 text-4xl font-bold">
                    {resultados.vasilhas.toLocaleString("pt-BR")}
                  </h3>
                  <p className="mt-2 text-sm text-emerald-100">
                    1 vasilha = {pesoPorVasilhaKg} kg
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-900 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.16em] text-slate-300">
                    Casinhas estimadas
                  </p>
                  <h3 className="mt-3 text-4xl font-bold">
                    {resultados.casinhas.toLocaleString("pt-BR")}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    1 casinha = {pesoPorCasinhaKg} kg
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Resíduos reaproveitados
                  </p>
                  <h4 className="mt-3 text-3xl font-bold text-slate-900">
                    {resultados.totalResiduos.toLocaleString("pt-BR")} t
                  </h4>
                </div>

                <div className="rounded-3xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Itens gerados
                  </p>
                  <h4 className="mt-3 text-3xl font-bold text-slate-900">
                    {resultados.impactoTotal.toLocaleString("pt-BR")}
                  </h4>
                </div>
              </div>

              <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5">
                <p className="font-semibold text-slate-800">Como calculamos</p>

                <div className="mt-4 space-y-4 text-slate-600">
                  <div>
                    <p className="font-medium text-slate-800">Vasilhas</p>
                    <p>
                      {toneladasReboco || 0} t × {KG_POR_TONELADA} ={" "}
                      {resultados.kgReboco.toLocaleString("pt-BR")} kg
                    </p>
                    <p>
                      {resultados.kgReboco.toLocaleString("pt-BR")} kg ÷{" "}
                      {pesoPorVasilhaKg} kg ={" "}
                      <strong>{resultados.vasilhas.toLocaleString("pt-BR")} vasilhas</strong>
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-slate-800">Casinhas</p>
                    <p>
                      {toneladasMadeira || 0} t × {KG_POR_TONELADA} ={" "}
                      {resultados.kgMadeira.toLocaleString("pt-BR")} kg
                    </p>
                    <p>
                      {resultados.kgMadeira.toLocaleString("pt-BR")} kg ÷{" "}
                      {pesoPorCasinhaKg} kg ={" "}
                      <strong>{resultados.casinhas.toLocaleString("pt-BR")} casinhas</strong>
                    </p>
                  </div>

                  <p className="text-sm text-slate-500">
                    Os resultados são arredondados para baixo, considerando apenas
                    unidades completas.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-800">
                  Dimensões estimadas da casinha
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                    <p className="text-sm text-slate-500">Largura</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      {dimensoesCasinha.largura}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                    <p className="text-sm text-slate-500">Profundidade</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      {dimensoesCasinha.profundidade}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                    <p className="text-sm text-slate-500">Altura</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      {dimensoesCasinha.altura}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                    <p className="text-sm text-slate-500">Abertura</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      {dimensoesCasinha.aberturaLargura} ×{" "}
                      {dimensoesCasinha.aberturaAltura}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <ModelViewer
              title="Vasilha reciclada"
              modelPath={dogBowlModel}
              rotation={[0, 0, 0]}
            />

            <ModelViewer
              title="Casinha de madeira"
              modelPath={dogHouseModel}
              rotation={[0, 0.35, 0]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}