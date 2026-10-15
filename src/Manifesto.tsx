import React from 'react';
import { ArrowRight, Share2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

export default function Manifesto() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Manifesto Terrabrás Já!',
        text: 'Leia o manifesto: A nossa Terra é Rara e o nosso futuro não está à venda!',
        url: window.location.href,
      }).catch(console.error);
    }
  };

  return (
    <div className="min-h-screen bg-terra-dark text-white font-sans overflow-x-hidden selection:bg-terra-yellow selection:text-terra-dark">
      <Header />

      {/* Hero Content */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-8 leading-[0.95]">
          MANIFESTO AO POVO BRASILEIRO: A <span className="text-terra-yellow">TERRABRÁS</span> É NOSSA E O NOSSO FUTURO NÃO ESTÁ À VENDA!
        </h1>
        <div className="flex justify-center mt-12">
           <Link to="/dossie" className="inline-flex items-center justify-center gap-2 border-2 border-terra-yellow text-terra-yellow hover:bg-terra-yellow hover:text-terra-dark transition-colors px-6 py-3 font-bold text-xs sm:text-sm uppercase tracking-widest">
             <FileText className="w-4 h-4" /> Ler o dossiê com os dados completos
           </Link>
        </div>
      </section>

      {/* Context / Diagnosis (Brutalist) */}
      <section className="bg-black/40 py-16 sm:py-24 border-y-2 border-white/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-white/20 bg-black/60 p-6 sm:p-12 shadow-[8px_8px_0px_rgba(255,255,255,0.05)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-terra-yellow uppercase tracking-tight mb-8 border-b-2 border-white/10 pb-4 inline-block">
              O Diagnóstico: O Maior Saque Desde o Período Colonial
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              <p>
                O Brasil encontra-se diante de uma encruzilhada histórica. Em nosso subsolo, repousa a segunda maior reserva mundial de terras raras. Estes minerais são o motor do século XXI, peças fundamentais para a transição energética, veículos elétricos, tecnologia digital e defesa nacional.
              </p>
              <p>
                O atual modelo de exploração mineral no Brasil atingiu um nível de subordinação que, para continuar existindo, dependerá da entrega total de nossa soberania. Apoiado pelas frações rentista e mineral do mercado, o imperialismo pretende nos manter como meros exportadores de "buracos de minas", garantindo que a nossa riqueza natural financie a industrialização e o poderio tecnológico de potências estrangeiras.
              </p>
              <p>
                Não aceitaremos que a história se repita! O povo brasileiro não permitira que o Brasil fique apenas com a poluição, o esgotamento dos solos e a miséria. Se o imperialismo pretende nos manter de joelhos, nossa resposta deve ser a organização soberana do Estado para explorar, processar e desenvolver tecnologia em solo nacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Programa de Luta (Brutalist Grid) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-16 text-center border-b-4 border-terra-yellow pb-2 inline-block mx-auto flex w-fit">
          O Programa de Luta
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Card 1 */}
          <div className="border-2 border-white/20 bg-black/40 p-8 sm:p-10 flex flex-col hover:-translate-y-1 transition-transform hover:shadow-[8px_8px_0px_rgba(250,204,21,1)]">
            <span className="text-4xl sm:text-5xl font-black text-terra-yellow mb-4 leading-none block">01</span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
              ABAIXO O PL 2780: O PL DO ENTREGUISMO!
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
              Exigimos a derrubada imediata do Projeto de Lei 2780/2024, que corre em regime de urgência na Câmara dos Deputados. Esse projeto é a expressão máxima da subordinação do Brasil aos interesses externos. Escrito para atender ao lobby das mineradoras estrangeiras, o PL escancara a exportação de terras raras em estado bruto, não exige nenhuma contrapartida de industrialização no nosso território e ainda cria privilégios que reduzem os impostos para a exportação de minério cru. É um crime de lesa-pátria!
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-white/20 bg-black/40 p-8 sm:p-10 flex flex-col hover:-translate-y-1 transition-transform hover:shadow-[8px_8px_0px_rgba(250,204,21,1)]">
            <span className="text-4xl sm:text-5xl font-black text-terra-yellow mb-4 leading-none block">02</span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
              FIM DO SAQUE IMPERIALISTA E DOS ACORDOS ILEGAIS!
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
              Denunciamos a venda da mina Serra Verde (Goiás) para a <em>USA Rare Earth</em>, braço do governo dos Estados Unidos, que recebeu aportes bilionários para garantir um monopólio de 15 anos sobre a nossa produção. A Constituição Federal (Art. 176) é clara: o subsolo pertence à União. Exigimos a anulação do memorando inconstitucional firmado pelo governo de Goiás com os EUA. Não aceitaremos o modelo colonial da australiana <em>Brazilian Rare Earths</em>, que planeja extrair nossas riquezas na Bahia para refiná-las na França. <strong className="text-white">A Bahia não é colônia! O Brasil não é a fazenda do mundo!</strong>
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-white/20 bg-black/40 p-8 sm:p-10 flex flex-col hover:-translate-y-1 transition-transform hover:shadow-[8px_8px_0px_rgba(250,204,21,1)]">
            <span className="text-4xl sm:text-5xl font-black text-terra-yellow mb-4 leading-none block">03</span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
              CRIAÇÃO IMEDIATA DA TERRABRÁS S.A.!
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
              A mineração estratégica não pode ficar à mercê do "livre mercado". Exigimos a aprovação dos projetos que instituem a <strong className="text-terra-yellow">Terrabrás (Terras Raras Brasileiras S.A.)</strong> e o regime de partilha. A União precisa ser sócia ativa, garantindo pesquisa, exploração, processamento e o desenvolvimento tecnológico em solo nacional. Somente uma estatal, sob controle popular, pode assegurar soberania e rigorosas medidas de proteção ambiental, protegendo nossas águas e nascentes.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border-2 border-white/20 bg-black/40 p-8 sm:p-10 flex flex-col hover:-translate-y-1 transition-transform hover:shadow-[8px_8px_0px_rgba(250,204,21,1)]">
            <span className="text-4xl sm:text-5xl font-black text-terra-yellow mb-4 leading-none block">04</span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
              AÇÃO IMEDIATA DO PODER EXECUTIVO
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
              O Governo Federal não pode se omitir ou ser refém do Congresso. Exigimos que a Câmara de Comércio Exterior (CAMEX) decrete imediatamente uma alíquota de até 150% para a exportação de terras raras <em>in natura</em>, inviabilizando o envio da nossa riqueza sem processamento. Se o México nacionalizou o seu lítio e a Indonésia proibiu a exportação bruta do seu níquel para forçar a industrialização interna, o Brasil tem o dever e a força para fazer o mesmo!
            </p>
          </div>
        </div>
      </section>

      {/* Synthesis */}

      {/*  <section className="bg-black py-16 sm:py-24 border-t border-white/5 text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl font-bold text-gray-300 leading-relaxed mb-12">
            O debate está posto: ou defendemos a soberania nacional, gerando emprego, renda e tecnologia aqui, ou seremos os fiadores do imperialismo. Não daremos nem um passo atrás! 
          </p>
          <div className="space-y-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-black italic text-terra-yellow uppercase tracking-tighter">Nossas terras raras, nosso futuro!</p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-black italic text-terra-yellow uppercase tracking-tighter">Nenhuma grama de minério sai do Brasil sem gerar tecnologia nacional!</p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-black italic text-terra-yellow uppercase tracking-tighter">Abaixo o PL 2780!</p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black italic text-white uppercase tracking-tighter mt-8">TERRABRÁS JÁ!</p>
          </div>
        </div>
      </section> */}
     

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="bg-black border-2 border-white/20 p-8 sm:p-12 text-center shadow-[8px_8px_0px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col items-center">
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
      </section>
      
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
