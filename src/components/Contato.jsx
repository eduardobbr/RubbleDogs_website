export default function Contato() {
  return (
    <section id="contato" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
              Contato e parcerias
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Entre em contato conosco
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Quer apoiar o projeto, tirar dúvidas, propor parcerias ou entender
              melhor como transformar resíduos em impacto real? Preencha o
              formulário e nossa equipe entrará em contato.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.14em] text-slate-400">
                  E-mail
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  contato@doguinhos.com
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.14em] text-slate-400">
                  Parcerias
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Construtoras, ONGs e apoiadores
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Seu nome"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="empresa"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Empresa / organização
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Nome da empresa"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white/15"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="voce@empresa.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="text"
                    placeholder="(00) 00000-0000"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white/15"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="assunto"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Assunto
                </label>
                <input
                  id="assunto"
                  name="assunto"
                  type="text"
                  placeholder="Ex: parceria, apoio, informações, orçamento"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white/15"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="6"
                  placeholder="Escreva sua mensagem aqui"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white/15"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-400">
                  Responderemos o mais breve possível.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}