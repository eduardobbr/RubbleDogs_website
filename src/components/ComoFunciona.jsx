export default function ComoFunciona() {
  const etapas = [
    {
      titulo: "1. Coleta",
      texto:
        "Recebimento dos resíduos da construção civil e organização inicial dos materiais.",
    },
    {
      titulo: "2. Triagem",
      texto:
        "Separação entre materiais minerais processáveis e madeira reaproveitável.",
    },
    {
      titulo: "3. Processamento",
      texto:
        "Transformação dos resíduos em matéria-prima apta para novos usos.",
    },
    {
      titulo: "4. Produção",
      texto:
        "Criação de vasilhas e casinhas para cachorros com foco em reaproveitamento responsável.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-24">
      <div className="section-container">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Como funciona
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Do resíduo ao novo produto
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            O projeto transforma resíduos da construção civil em soluções reais
            para o bem-estar animal, reduzindo descarte e ampliando o valor de
            materiais que antes seriam rejeitados.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {etapas.map((etapa) => (
            <div key={etapa.titulo} className="soft-card p-7">
              <h3 className="text-xl font-semibold">{etapa.titulo}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {etapa.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}