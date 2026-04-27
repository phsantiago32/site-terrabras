import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sobre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Sobre o Movimento | Terrabrás Já!',
          text: 'Entenda por que a criação da Terrabrás é vital para o futuro do Brasil. A nossa terra é rara e o futuro do Brasil não está à venda!',
          url: url,
        });
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          navigator.clipboard.writeText(url);
          alert('Link copiado para a área de transferência!');
        }
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen bg-terra-dark text-gray-300 font-sans selection:bg-terra-yellow selection:text-black">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-terra-dark/80 backdrop-blur-md border-b border-white/10 px-4 py-3 sm:py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white hover:text-terra-yellow transition-colors font-bold text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Voltar ao Início</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <ShieldAlert className="text-terra-yellow w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-base sm:text-lg font-black tracking-tighter text-terra-yellow uppercase">Terrabrás Já</span>
        </div>
        
        <button 
          onClick={handleShare}
          className="flex items-center gap-2 text-white hover:text-terra-yellow transition-colors font-bold text-xs uppercase tracking-widest"
        >
          <span className="hidden sm:inline">Partilhar</span>
          <Share2 className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-12 sm:mb-16 leading-[0.95]">
          A Luta pela <span className="text-terra-yellow">Terrabrás</span> e a Soberania das Terras Raras
        </h1>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6">
            1. Introdução: O que são as Terras Raras e por que elas definem o futuro?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            As "Terras Raras" são um grupo de 17 minerais críticos (como neodímio, praseodímio, disprósio e térbio) que funcionam como o verdadeiro motor tecnológico do século XXI. Sem elas, não há transição energética nem indústria 4.0: são matérias-primas essenciais na fabricação de ímãs permanentes usados em veículos elétricos, aerogeradores (energia eólica), semicondutores, telefones celulares e até mesmo em equipamentos avançados de defesa militar. Quem controla as terras raras, controla o futuro do desenvolvimento tecnológico global.
          </p>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6">
            2. O Problema: O Brasil como "Fazenda do Mundo" e o Paradoxo Estrutural
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            O Brasil possui atualmente a <strong className="text-white">segunda maior reserva mundial</strong> desses minerais, detendo um ativo de inestimável valor geopolítico e econômico. No entanto, o país está repetindo os mesmos erros do período colonial (o "Ciclo do Ouro" em Minas Gerais), onde as riquezas são extraídas em estado bruto para financiar a industrialização de potências estrangeiras, deixando para o Brasil apenas o passivo ambiental, buracos no solo e subdesenvolvimento.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-8">
            Existe um <strong className="text-white">paradoxo estrutural</strong> escandaloso em andamento: o capital estrangeiro opera no Brasil com forte apoio e financiamento de seus respectivos Estados (especialmente dos EUA e Austrália), enquanto o Brasil, por meio de lobbies do mercado financeiro e entidades privadas (como o IBRAM), bloqueia sistematicamente a criação da sua própria empresa estatal para gerir esse recurso.
          </p>

          {/* Highlight Box / Alerta */}
          <div className="bg-red-950/30 border-l-4 border-red-500 p-6 sm:p-8 rounded-r-lg shadow-[0_4px_30px_rgba(239,68,68,0.15)] my-10">
            <h3 className="text-xl sm:text-2xl font-black text-red-500 uppercase tracking-tight mb-6 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8" />
              A Ameaça Imediata e os Casos de Entreguismo
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">A Compra da Serra Verde (GO)</h4>
                <p className="text-sm sm:text-base leading-relaxed text-red-100/90">
                  A única mina em operação no Brasil capaz de produzir em escala elementos para ímãs permanentes foi vendida para a <strong>USA Rare Earth</strong>. A operação contou com financiamento de <strong>US$ 565 milhões da DFC</strong> (Development Finance Corporation), uma agência do governo dos EUA. O acordo inclui um contrato que garante a venda exclusiva de terras raras brasileiras para alimentar a cadeia produtiva dos Estados Unidos por 15 anos, sem previsão de refino no Brasil.
                </p>
              </div>
              <div className="w-full h-px bg-red-500/20"></div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Acordos Inconstitucionais Regionais</h4>
                <p className="text-sm sm:text-base leading-relaxed text-red-100/90">
                  O Governo de Goiás assinou um memorando de entendimento com os EUA prevendo acesso exclusivo e sigiloso aos dados do mapeamento geológico do estado, atropelando a competência da União sobre o subsolo nacional.
                </p>
              </div>
              <div className="w-full h-px bg-red-500/20"></div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">PL 2780/2024 (O PL do Entreguismo)</h4>
                <p className="text-sm sm:text-base leading-relaxed text-red-100/90">
                  Em tramitação na Câmara, relatado pelo deputado Arnaldo Jardim. O projeto escancara a exportação bruta de terras raras, não exige o beneficiamento em solo nacional e cria regimes aduaneiros especiais que reduzem impostos para minérios <em>in natura</em>, desestimulando totalmente a industrialização nacional.
                </p>
              </div>
              <div className="w-full h-px bg-red-500/20"></div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">A Dominância Australiana</h4>
                <p className="text-sm sm:text-base leading-relaxed text-red-100/90">
                  Das empresas com projetos em fase de licenciamento ou viabilidade, pelo menos seis são australianas (como Meteoric Resources, Viridis, Atlas, etc.). Elas utilizam subsidiárias para obter os alvarás brasileiros, mantendo o controle estratégico, os lucros e a tecnologia fora do país.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6">
            3. A Solução: Por que lutamos pela TERRABRÁS?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Frente ao entreguismo generalizado, inspirados na histórica campanha "O Petróleo é Nosso" que originou a Petrobras, o movimento popular e setores progressistas defendem a criação da <strong className="text-terra-yellow">Terrabrás (Terras Raras Brasileiras S.A.)</strong>. A Constituição Federal estabelece que os recursos do subsolo pertencem à União (Art. 176). As empresas mineradoras detêm apenas concessões, que devem estar subordinadas ao interesse nacional.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Existem propostas legislativas robustas que estruturam nossa luta:
          </p>
          <ul className="list-disc pl-5 space-y-4 text-base sm:text-lg leading-relaxed marker:text-terra-yellow">
            <li>
              <strong className="text-white">A Estruturação da Estatal (PL 1733/2026):</strong> O projeto autoriza a criação da Terrabrás, vinculada ao Ministério de Minas e Energia. Esta estatal teria a missão de atuar ativamente na cadeia produtiva, da pesquisa e exploração ao beneficiamento e comercialização, agregando valor e garantindo tecnologia de ponta em território nacional. Terá modelo híbrido, capaz de fazer parcerias com a iniciativa privada (<em>joint ventures</em>), desde que o controle e a soberania permaneçam com a União.
            </li>
            <li>
              <strong className="text-white">O Regime de Partilha (PL 1754/2026):</strong> Inspirado no modelo de sucesso do Pré-Sal petrolífero, introduz o regime de partilha para os minerais críticos. A União atuaria como sócia ativa nos empreendimentos (entre 10% e 80%), arrecadando tributos de forma muito mais eficiente e obrigando a industrialização local das terras raras. Também impõe um veto moral essencial: proíbe a exportação para o desenvolvimento de armas de destruição em massa.
            </li>
          </ul>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6">
            4. Exemplos Internacionais que Desmentem a Narrativa Neoliberal
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Lobbistas frequentemente alegam que a criação de estatais e a proibição da exportação de matéria bruta afugentam investidores. A realidade global prova o contrário. A regra no mundo hoje é a intervenção do Estado:
          </p>
          <ul className="list-disc pl-5 space-y-4 text-base sm:text-lg leading-relaxed marker:text-terra-yellow">
            <li>
              <strong className="text-white">Indonésia:</strong> O país proibiu terminantemente a exportação bruta de níquel. Em resposta, as empresas estrangeiras (notadamente chinesas) viram-se obrigadas a instalar refinarias em solo indonésio em parceria com o Estado, gerando empregos e desenvolvendo uma cadeia produtiva local colossal.
            </li>
            <li>
              <strong className="text-white">México (2022):</strong> O país criou recentemente uma empresa estatal dedicada exclusivamente ao controle e monopolização da exploração de seu lítio (considerado o "ouro branco"), assegurando sua autonomia soberana.
            </li>
          </ul>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6">
            5. Conclusão: Uma Chamada à Ação
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            A luta pela criação da <strong className="text-white">Terrabrás</strong> e pelo fim do entreguismo é a pauta mais estratégica do nosso tempo. Ceder ao lobby internacional e exportar nossos minerais em estado bruto condena o Brasil à estagnação tecnológica e à subserviência geopolítica, além de não prevenir riscos ambientais, aumentando as chances de novos desastres como os de Mariana e Brumadinho em nome do lucro imediato estrangeiro.
          </p>
        </section>

        {/* Closing CTA */}
        <div className="mt-16 bg-terra-yellow/5 border-2 border-terra-yellow/20 p-8 sm:p-12 text-center rounded-lg shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-terra-yellow/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-terra-copper/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-terra-yellow mb-6 drop-shadow-md relative z-10">
            A nossa terra é rara.<br className="hidden sm:block"/> O futuro do Brasil não está à venda!
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 font-medium mb-8 relative z-10 max-w-2xl mx-auto">
            Participe do movimento "Terrabrás Já!". Compartilhe essas informações e exija de seus parlamentares a aprovação imediata do controle estatal sobre o subsolo brasileiro.
          </p>

          <a 
            href="https://c.org/rHLH5fd6sP" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-terra-yellow hover:bg-white text-terra-dark px-8 py-5 font-black text-sm sm:text-base md:text-lg uppercase tracking-widest transition-colors shadow-[0_0_30px_rgba(250,204,21,0.25)] relative z-10"
          >
            Assinar a Petição Agora
          </a>
        </div>

      </article>
    </div>
  );
}
