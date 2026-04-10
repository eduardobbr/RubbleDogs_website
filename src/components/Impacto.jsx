export default function Impacto() {
  const itens = [
    {
      titulo: "Menos descarte",
      texto:
        "Redução do envio de resíduos da construção para descarte inadequado e aterros.",
    },
    {
      titulo: "Mais reaproveitamento",
      texto:
        "Transformação de materiais antes descartados em produtos com nova função prática.",
    },
    {
      titulo: "Bem-estar animal",
      texto:
        "Criação de soluções úteis para cães a partir de uma lógica de impacto positivo.",
    },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="section-container">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Impacto gerado
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Sustentabilidade com aplicação real
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Um projeto que conecta reaproveitamento de resíduos, design de
            produto e responsabilidade socioambiental de forma clara e tangível.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {itens.map((item) => (
            <div key={item.titulo} className="soft-card p-8">
              <h3 className="text-xl font-semibold">{item.titulo}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}