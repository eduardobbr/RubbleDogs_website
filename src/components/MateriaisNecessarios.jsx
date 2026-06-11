// src/components/MateriaisNecessarios.jsx

export default function MateriaisNecessarios() {
    const materiaisPotinhos = [
        {
            item: "Caliça/concreto beneficiado",
            funcao: "Agregado reciclado mineral",
            detalhe:
                "Deve ser triado, britado e peneirado antes do uso. Entra como cerca de 75% da massa seca.",
        },
        {
            item: "Cimento Portland",
            funcao: "Ligante hidráulico",
            detalhe:
                "É o material que dá liga, endurecimento e coesão ao compósito. Entra como cerca de 25% da massa seca.",
        },
        {
            item: "Água",
            funcao: "Hidratação e trabalhabilidade",
            detalhe:
                "Deve ser controlada no preparo da mistura, considerando a absorção do agregado reciclado.",
        },
        {
            item: "Cuba removível",
            funcao: "Barreira sanitária",
            detalhe:
                "Preferencialmente inox, cerâmica esmaltada ou polipropileno próprio para contato com alimento.",
        },
        {
            item: "Impermeabilizante atóxico",
            funcao: "Proteção da superfície",
            detalhe:
                "Alternativa ou complemento à cuba removível, desde que seja seguro e aplicado conforme ficha técnica.",
        },
        {
            item: "Moldes",
            funcao: "Padronização da peça",
            detalhe:
                "Ajudam a manter formato, acabamento, produtividade e repetição das vasilhas.",
        },
    ];

    const materiaisCasinhas = [
        {
            item: "Madeira reaproveitada limpa",
            funcao: "Estrutura principal",
            detalhe:
                "Deve estar íntegra, sem mofo relevante, sem óleo, sem odor químico e sem tratamento incompatível com contato animal.",
        },
        {
            item: "Parafusos protegidos",
            funcao: "Fixação",
            detalhe:
                "Devem ser instalados sem pontas expostas para evitar ferimentos nos animais.",
        },
        {
            item: "Lixas e acabamento de bordas",
            funcao: "Segurança",
            detalhe:
                "Removem farpas, quinas cortantes e pontos que possam machucar o cachorro.",
        },
        {
            item: "Proteção contra chuva",
            funcao: "Durabilidade",
            detalhe:
                "A casinha precisa de cobertura e tratamento externo adequado para resistir melhor ao tempo.",
        },
        {
            item: "Elevação do piso",
            funcao: "Conforto e higiene",
            detalhe:
                "Evita contato direto com o solo, reduz umidade e melhora o uso em áreas externas.",
        },
        {
            item: "Ventilação",
            funcao: "Bem-estar animal",
            detalhe:
                "A estrutura deve permitir circulação de ar e abrigo sem abafamento.",
        },
    ];

    const equipamentos = [
        "Luvas de proteção",
        "Óculos de segurança",
        "Máscara PFF2 contra poeira mineral",
        "Serra",
        "Lixa",
        "Ferramentas de corte",
        "Ferramentas para remoção de pregos",
        "Recipientes para mistura",
    ];

    return (
        <section
            id="materiais"
            className="border-y border-slate-200 bg-slate-50 py-20 md:py-24"
        >
            <div className="section-container">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                        Materiais necessários
                    </p>

                    <h2 className="text-3xl font-bold md:text-4xl">
                        O que é usado na produção dos potinhos e casinhas
                    </h2>

                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        A proposta utiliza resíduos da construção civil de forma controlada.
                        A caliça e o concreto entram como agregado reciclado, enquanto o
                        cimento Portland atua como ligante. Já as casinhas priorizam madeira
                        reaproveitada em boas condições, com acabamento seguro para os
                        animais.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="soft-card overflow-hidden">
                        <div className="border-b border-slate-200 bg-white p-7">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">
                                Potinhos e bebedouros
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                Base cimentícia com cuba removível
                            </h3>
                            <p className="mt-3 leading-relaxed text-slate-600">
                                O modelo mais seguro é uma base pesada feita com caliça/concreto
                                e cimento, usando uma cuba removível para evitar contato direto
                                da água ou ração com a matriz cimentícia.
                            </p>
                        </div>

                        <div className="grid gap-4 p-6">
                            {materiaisPotinhos.map((material) => (
                                <div
                                    key={material.item}
                                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900">
                                                {material.item}
                                            </h4>
                                            <p className="mt-1 text-sm font-medium text-emerald-700">
                                                {material.funcao}
                                            </p>
                                        </div>

                                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                                            Potinho
                                        </span>
                                    </div>

                                    <p className="mt-3 leading-relaxed text-slate-600">
                                        {material.detalhe}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="soft-card overflow-hidden">
                        <div className="border-b border-slate-200 bg-white p-7">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">
                                Casinhas
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                Madeira reaproveitada com acabamento seguro
                            </h3>
                            <p className="mt-3 leading-relaxed text-slate-600">
                                A madeira deve ser limpa, resistente e segura. O processo exige
                                remoção de pregos, lixamento, proteção contra chuva, ventilação
                                e elevação mínima do piso em relação ao solo.
                            </p>
                        </div>

                        <div className="grid gap-4 p-6">
                            {materiaisCasinhas.map((material) => (
                                <div
                                    key={material.item}
                                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900">
                                                {material.item}
                                            </h4>
                                            <p className="mt-1 text-sm font-medium text-emerald-700">
                                                {material.funcao}
                                            </p>
                                        </div>

                                        <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                                            Casinha
                                        </span>
                                    </div>

                                    <p className="mt-3 leading-relaxed text-slate-600">
                                        {material.detalhe}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-3xl bg-slate-950 p-7 text-white">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-400">
                            Equipamentos e EPIs
                        </p>

                        <h3 className="mt-2 text-2xl font-bold">
                            Segurança durante o preparo
                        </h3>

                        <p className="mt-3 leading-relaxed text-slate-300">
                            Como o processo envolve poeira mineral, corte de madeira,
                            lixamento e beneficiamento dos resíduos, o uso de equipamentos de
                            proteção é indispensável.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {equipamentos.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                            Atenção técnica
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-slate-900">
                            Nem todo resíduo pode ser usado
                        </h3>

                        <p className="mt-3 leading-relaxed text-slate-700">
                            O reaproveitamento só deve acontecer com materiais de origem
                            conhecida e visualmente seguros. Devem ser rejeitados resíduos com
                            óleo, solvente, odor químico, amianto, tinta líquida, mofo intenso,
                            gesso misturado à caliça, madeira podre ou qualquer material sem
                            rastreabilidade.
                        </p>

                        <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-emerald-200">
                            <p className="font-semibold text-slate-900">
                                Resumo da composição dos potinhos
                            </p>

                            <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                <div>
                                    <p className="text-sm text-slate-500">Agregado reciclado</p>
                                    <p className="mt-1 text-2xl font-bold text-emerald-700">
                                        75%
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">Cimento Portland</p>
                                    <p className="mt-1 text-2xl font-bold text-emerald-700">
                                        25%
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">Barreira sanitária</p>
                                    <p className="mt-1 text-2xl font-bold text-emerald-700">
                                        obrigatória
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}