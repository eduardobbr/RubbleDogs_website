export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_30%)]" />

      <div className="section-container relative py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
            Construção civil + reciclagem + impacto animal
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Transformamos resíduos da construção em{" "}
            <span className="text-emerald-400">vasilhas e casinhas</span> para
            cachorros
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Uma proposta de economia circular que reaproveita caliça processada
            e madeira reciclada para gerar novos produtos, reduzir descarte e
            criar impacto ambiental e social positivo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#calculadora"
              className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Calcular impacto
            </a>

            <a
              href="#materiais"
              className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-900"
            >
              Materiais necessários
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.14em] text-slate-400">
                Reaproveitamento
              </p>
              <p className="mt-2 text-2xl font-bold">Entulho útil</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.14em] text-slate-400">
                Produto
              </p>
              <p className="mt-2 text-2xl font-bold">Vasilhas + casinhas</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.14em] text-slate-400">
                Impacto
              </p>
              <p className="mt-2 text-2xl font-bold">Ambiental + social</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}