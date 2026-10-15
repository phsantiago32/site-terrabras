import React from 'react';
import { Share2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

export default function Sobre() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Dossiê Terrabrás Já!',
        text: 'Dossiê: O "Novo Ouro" Global e o Futuro da Soberania Brasileira',
        url: window.location.href,
      }).catch(console.error);
    }
  };

  return (
    <div className="min-h-screen bg-terra-dark text-white font-sans overflow-x-hidden selection:bg-terra-yellow selection:text-terra-dark">
      <Header />

      {/* Main Content Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        
        <div className="mb-12">
           <div className="inline-block bg-terra-yellow text-terra-dark font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] px-4 py-2 mb-6 shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
             Dossiê Informativo
           </div>
           <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-8 leading-[0.95]">
            O "Novo Ouro" Global e o Futuro da <span className="text-terra-yellow">Soberania Brasileira</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed mb-12 sm:mb-16">
          O Brasil encontra-se no epicentro de uma silenciosa, porém decisiva, disputa geopolítica. Sob o nosso solo repousa a segunda maior reserva mundial de terras raras, um grupo de minerais críticos que se tornou o verdadeiro motor tecnológico do século XXI. No entanto, a ausência de uma política pública firme e a tramitação de legislações permissivas no Congresso Nacional ameaçam transformar essa vantagem estratégica em mais um ciclo de exploração primária, onde o Brasil exporta suas riquezas em estado bruto e importa produtos de alto valor agregado. 
          <br /><br />
          Este dossiê detalha o que está em jogo, as movimentações do capital estrangeiro e as propostas em debate para garantir que essa riqueza sirva ao desenvolvimento nacional.
        </p>

        <section className="mb-12 sm:mb-16 border-2 border-white/20 bg-black/40 p-6 sm:p-10 shadow-[8px_8px_0px_rgba(255,255,255,0.05)]">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-4 border-b-2 border-terra-yellow/20 pb-4">
             <span className="text-terra-yellow bg-terra-yellow/10 px-3 py-1">1.</span> O que são as Terras Raras?
          </h2>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              As "terras raras" formam um conjunto de 17 elementos químicos (como Neodímio, Praseodímio e Disprósio) que possuem propriedades magnéticas, óticas e catalíticas únicas. Apesar do nome, elas são relativamente abundantes na crosta terrestre, mas encontrá-las em concentrações viáveis para extração é extremamente difícil.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Esses minerais são os blocos de construção invisíveis da vida moderna. Estão presentes em:
            </p>
            <ul className="list-none space-y-3 text-base sm:text-lg leading-relaxed text-gray-300 mt-4">
              <li className="flex items-start gap-3"><span className="text-terra-yellow font-black mt-1">→</span> <div><strong className="text-white">Tecnologia verde:</strong> Turbinas eólicas, painéis solares e baterias de alta capacidade.</div></li>
              <li className="flex items-start gap-3"><span className="text-terra-yellow font-black mt-1">→</span> <div><strong className="text-white">Mobilidade:</strong> Motores de veículos elétricos e híbridos.</div></li>
              <li className="flex items-start gap-3"><span className="text-terra-yellow font-black mt-1">→</span> <div><strong className="text-white">Digitalização:</strong> Smartphones, computadores, telas de LCD e cabos de fibra ótica.</div></li>
              <li className="flex items-start gap-3"><span className="text-terra-yellow font-black mt-1">→</span> <div><strong className="text-white">Defesa Nacional:</strong> Sistemas de orientação de mísseis, radares, sonares e aviação militar.</div></li>
            </ul>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 border-2 border-white/20 bg-black/40 p-6 sm:p-10 shadow-[8px_8px_0px_rgba(255,255,255,0.05)]">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-4 border-b-2 border-terra-yellow/20 pb-4">
            <span className="text-terra-yellow bg-terra-yellow/10 px-3 py-1">2.</span> A Posição Estratégica do Brasil
          </h2>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              A Agência Internacional de Energia (IEA) projeta que a demanda global por minerais críticos pode quadruplicar até 2040. Atualmente, a China controla mais de 60% da extração e cerca de 85% do processamento (refino) global dessas terras. Em busca de quebrar essa hegemonia, as potências ocidentais (Estados Unidos, Europa e Austrália) iniciaram uma corrida agressiva por novas reservas.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              O Brasil possui, segundo o Serviço Geológico dos Estados Unidos, a <strong className="text-white">segunda maior reserva mundial de terras raras</strong> (aproximadamente 21 milhões de toneladas), empatado com o Vietnã e atrás apenas da China.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Entretanto, o modelo de atuação das empresas estrangeiras em solo nacional levanta graves preocupações sobre a soberania. A australiana <em>Brazilian Rare Earths</em>, por exemplo, planeja extrair minério no estado da Bahia, mas o refino desse material está programado para ocorrer na França. Nesse formato, os lucros e a tecnologia ficam no exterior, enquanto o Brasil arca com o esgotamento mineral e os passivos ambientais. O avanço sobre o território é tamanho que o número de alvarás de pesquisa, que bateu 1.108 em 2024, já começou a cair (para 683 em 2025) simplesmente porque as melhores áreas geológicas já foram loteadas por empresas estrangeiras.
            </p>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 border-2 border-white/20 bg-black/40 p-6 sm:p-10 shadow-[8px_8px_0px_rgba(255,255,255,0.05)]">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-4 border-b-2 border-terra-yellow/20 pb-4">
            <span className="text-terra-yellow bg-terra-yellow/10 px-3 py-1">3.</span> Acordos Questionáveis e a Ameaça do PL 2780/2024
          </h2>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              A Constituição Federal do Brasil (Art. 176) é clara ao definir que as jazidas e recursos minerais do subsolo pertencem à União. Ignorando essa premissa, o governo do estado de Goiás assinou um memorando de entendimento com os EUA que, sob sigilo, dá prioridade e acesso exclusivo a empresas norte-americanas ao mapeamento geológico da região.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              No âmbito legislativo federal, o cenário é agravado pela tramitação em regime de urgência do Projeto de Lei (PL) 2780/2024. Apoiado pelo forte lobby do Instituto Brasileiro de Mineração (IBRAM), que representa majoritariamente o capital estrangeiro, o PL facilita a exportação de terras raras em estado bruto. O texto cria um regime aduaneiro especial que reduz impostos para a exportação do minério sem beneficiamento e estabelece uma alíquota irrisória de 0,6% para "investimentos em tecnologia", sem obrigar a industrialização no Brasil.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Enquanto isso, a atuação do governo federal tem sido marcada por uma omissão estratégica. Apesar da retórica de soberania, plataformas governamentais como o <em>Eco Invest</em> chegam a oferecer cobertura de risco cambial (com recursos do Tesouro) para atrair capital estrangeiro para o setor mineral, sem exigir transferência tecnológica em troca. Em paralelo, a Apex elaborou catálogos junto ao IBRAM para ofertar nossos minerais no exterior.
            </p>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 border-2 border-white/20 bg-black/40 p-6 sm:p-10 shadow-[8px_8px_0px_rgba(255,255,255,0.05)]">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-4 border-b-2 border-terra-yellow/20 pb-4">
            <span className="text-terra-yellow bg-terra-yellow/10 px-3 py-1">4.</span> O Paradoxo do Mercado e as Lições Internacionais
          </h2>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              O debate público brasileiro frequentemente esbarra no argumento de que o Estado não deve intervir na mineração. Ocorre um evidente paradoxo: as mesmas vozes que pedem o afastamento do Estado brasileiro celebram os investimentos bilionários feitos pelos governos dos EUA, Austrália e Europa nas empresas que atuam aqui. Exige-se neutralidade apenas do Brasil, enquanto governos estrangeiros atuam como financiadores e compradores estratégicos.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Na contramão dessa passividade, outras nações estão protegendo suas riquezas:
            </p>
            <ul className="list-none space-y-4 text-base sm:text-lg leading-relaxed text-gray-300 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-terra-yellow font-black mt-1">→</span> 
                <div><strong className="text-white">México:</strong> Em 2022, o país criou uma empresa estatal exclusiva para monopolizar a exploração de suas reservas de lítio.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-terra-yellow font-black mt-1">→</span> 
                <div><strong className="text-white">Indonésia:</strong> Proibiu a exportação de níquel em estado bruto, forçando empresas internacionais a formarem parcerias (joint ventures) com estatais locais para desenvolver toda a cadeia de processamento e baterias dentro do seu próprio território.</div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 border-2 border-white/20 bg-black/40 p-6 sm:p-10 shadow-[8px_8px_0px_rgba(255,255,255,0.05)]">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-4 border-b-2 border-terra-yellow/20 pb-4">
            <span className="text-terra-yellow bg-terra-yellow/10 px-3 py-1">5.</span> A Alternativa em Pauta: A Criação da Terrabrás S.A.
          </h2>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Para evitar que o Brasil repita os erros do período colonial — exportando riqueza e importando produtos manufaturados —, parlamentares e pesquisadores propõem a criação de uma estatal focada no setor.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Dois Projetos de Lei (PL 1733/2026 e PL 1754/2026) balizam essa discussão. Eles propõem a criação da <strong className="text-white">Terrabrás (Terras Raras Brasileiras S.A.)</strong>, uma empresa pública com flexibilidade para atuar da pesquisa à comercialização.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              O destaque vai para a proposta de inserção da mineração estratégica em um <strong className="text-white">regime de partilha</strong>, semelhante ao que foi feito com o petróleo do pré-sal. Diferente do modelo atual de concessão (onde o Estado só cobra impostos), no regime de partilha a União atuaria como sócia ativa dos empreendimentos, com participação de 10% a 80%, garantindo que os dados geológicos fiquem sob titularidade nacional e inibindo a exportação predatória.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Além do domínio tecnológico, a presença de uma estatal forte é apontada como a única forma de garantir o rigor na proteção socioambiental, mitigando o risco de falhas estruturais, contaminação do solo e tragédias com barragens, priorizando o interesse coletivo e a segurança das nascentes e das populações locais.
            </p>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 bg-terra-copper border-2 border-terra-yellow p-6 sm:p-10 shadow-[8px_8px_0px_rgba(250,204,21,1)]">
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
            O Futuro em Disputa
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-gray-100">
            A gestão das terras raras é, hoje, o grande teste para a soberania do país. O Brasil tem a infraestrutura universitária, os geólogos e a capacidade diplomática para firmar parcerias estratégicas que exijam transferência de tecnologia. O que decidirá se seremos protagonistas na nova economia verde ou meros exportadores de "buracos de minas" será o nível de conscientização e mobilização da sociedade brasileira nos próximos meses.
          </p>
        </section>

        {/* Closing CTA */}
        <div className="mt-16 bg-black border-2 border-white/20 p-8 sm:p-12 text-center shadow-[8px_8px_0px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-6 drop-shadow-md relative z-10">
            A nossa terra é rara.<br className="hidden sm:block"/> O futuro do Brasil não está à venda!
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 font-medium mb-8 relative z-10 max-w-2xl mx-auto">
            Participe do movimento "Terrabrás Já!". Assine a petição e exija a aprovação imediata do controle estatal sobre o subsolo brasileiro.
          </p>
          <a 
            href="https://c.org/rHLH5fd6sP" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-terra-yellow hover:bg-white text-terra-dark px-8 py-5 font-black text-sm sm:text-base md:text-lg uppercase tracking-widest transition-all border-2 border-transparent hover:border-terra-dark shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 relative z-10 group"
          >
            Assinar a Petição Agora <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </article>

      {/* Footer Minimal */}
      <footer className="bg-black py-12 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/inicio" className="inline-block text-3xl font-black italic uppercase tracking-tighter text-white mb-6">
            Terra<span className="text-terra-yellow">brás</span>
          </Link>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
            A riqueza do nosso subsolo não é moeda de troca.<br/>
            Nenhuma grama de minério sai do Brasil sem gerar tecnologia nacional.
          </p>
        </div>
      </footer>
    </div>
  );
}
