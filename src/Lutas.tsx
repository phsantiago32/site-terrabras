import React from 'react';
import { ArrowRight, MessageCircle, Twitter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

export default function Lutas() {
  const whatsappMessage = `Brasil, a nossa Terra é Rara!\n\nAs terras raras são essenciais para o futuro, e o Brasil tem a 2ª maior reserva do mundo. Mas estão tentando entregar nosso subsolo para corporações estrangeiras!\n\nAssine a petição pela criação da TERRABRÁS e ajude a barrar o PL 2780/2024.\n\nAssine aqui: https://c.org/rHLH5fd6sP\nConheça a campanha: assinaterrabras.com.br`;
  
  const twitterMessage = `O futuro do Brasil não está à venda! Nossas Terras Raras estão sendo entregues ao capital estrangeiro.\n\nExigimos a criação da TERRABRÁS JÁ e a derrubada do PL 2780/2024. A nossa riqueza tem que gerar tecnologia aqui!\n\nAssine a petição: https://c.org/rHLH5fd6sP #TerrabrasJa`;

  return (
    <div className="min-h-screen bg-terra-dark text-white font-sans overflow-x-hidden selection:bg-terra-yellow selection:text-terra-dark">
      <Header />
      
      <div className="pt-24 pb-8">
        {/* Principais Lutas (Brutalist Grid) */}
        <section id="lutas" className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-8 border-b-4 border-terra-yellow pb-2 inline-block">
            Principais Lutas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Card 1 */}
            <div className="border-2 border-white/20 bg-black/40 p-8 sm:p-10 flex flex-col hover:-translate-y-1 transition-transform hover:shadow-[8px_8px_0px_rgba(250,204,21,1)]">
              <span className="text-4xl sm:text-5xl font-black text-terra-yellow mb-4 leading-none block">01</span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">Abaixo o PL 2780/2024.</h3>
              <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                Derrubada imediata do projeto de lei que escancara a exportação de terras raras em estado bruto e isenta o capital estrangeiro de impostos sem contrapartida de industrialização.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-white/20 bg-black/40 p-8 sm:p-10 flex flex-col hover:-translate-y-1 transition-transform hover:shadow-[8px_8px_0px_rgba(250,204,21,1)]">
              <span className="text-4xl sm:text-5xl font-black text-terra-yellow mb-4 leading-none block">02</span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">Fim do Saque Imperialista.</h3>
              <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                Anulação dos memorandos inconstitucionais que entregam nossa soberania geológica e rejeição do modelo colonial de extrair aqui para refinar no exterior.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-white/20 bg-black/40 p-8 sm:p-10 flex flex-col hover:-translate-y-1 transition-transform hover:shadow-[8px_8px_0px_rgba(250,204,21,1)]">
              <span className="text-4xl sm:text-5xl font-black text-terra-yellow mb-4 leading-none block">03</span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">Criação da Terrabrás S.A.</h3>
              <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                Aprovação imediata de uma empresa estatal (Terras Raras Brasileiras S.A.) sob o regime de partilha, garantindo que a União seja sócia ativa na exploração e no domínio tecnológico.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border-2 border-white/20 bg-black/40 p-8 sm:p-10 flex flex-col hover:-translate-y-1 transition-transform hover:shadow-[8px_8px_0px_rgba(250,204,21,1)]">
              <span className="text-4xl sm:text-5xl font-black text-terra-yellow mb-4 leading-none block">04</span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">Ação do Poder Executivo.</h3>
              <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                Exigimos que a CAMEX decrete imediatamente uma alíquota de até 150% para a exportação de terras raras <em>in natura</em>, forçando a industrialização interna como fizeram México e Indonésia.
              </p>
            </div>
          </div>
        </section>

        {/* Lute Junto Com a Gente (Brutalist Section) */}
        <section className="bg-terra-copper border-t-4 border-terra-yellow py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-white/20 shadow-[8px_8px_0px_rgba(255,255,255,0.05)] bg-black/20">
              
              {/* Left side */}
              <div className="lg:col-span-6 p-6 sm:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-white/20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-8 drop-shadow-lg leading-tight">
                  Lute junto <br/>com a gente
                </h2>
                <ul className="space-y-4 sm:space-y-6">
                  <li className="flex items-start gap-4 text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    <div className="bg-terra-yellow p-1 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-terra-dark shrink-0" />
                    </div>
                    <span className="pt-0.5">Assine e divulgue a petição</span>
                  </li>
                  <li className="flex items-start gap-4 text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    <div className="bg-terra-yellow p-1 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-terra-dark shrink-0" />
                    </div>
                    <span className="pt-0.5">Compartilhe nossos conteúdos nas redes</span>
                  </li>
                  <li className="flex items-start gap-4 text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    <div className="bg-terra-yellow p-1 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-terra-dark shrink-0" />
                    </div>
                    <span className="pt-0.5">Pressione os deputados contra o PL 2780</span>
                  </li>
                  <li className="flex items-start gap-4 text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    <div className="bg-terra-yellow p-1 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-terra-dark shrink-0" />
                    </div>
                    <span className="pt-0.5">Leve o debate sobre a Terrabrás para sua comunidade</span>
                  </li>
                </ul>
              </div>
              
              {/* Right side - Actions */}
              <div className="lg:col-span-6 p-6 sm:p-10 bg-black/40 flex flex-col gap-4 justify-center">
                <a 
                  href="https://c.org/rHLH5fd6sP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-terra-yellow hover:bg-white text-terra-dark p-5 sm:p-6 flex items-center justify-between group border-2 border-transparent transition-all shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-black text-lg sm:text-xl uppercase tracking-tighter">Assinar a Petição</span>
                    <span className="font-bold text-xs tracking-widest opacity-70">change.org</span>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
                <button 
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                  className="bg-terra-dark text-white p-5 sm:p-6 flex items-center justify-between group border-2 border-white/20 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-black text-sm sm:text-base uppercase tracking-tighter">Compartilhar no WhatsApp</span>
                  </div>
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterMessage)}`, '_blank')}
                  className="bg-terra-dark text-white p-5 sm:p-6 flex items-center justify-between group border-2 border-white/20 hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-colors"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-black text-sm sm:text-base uppercase tracking-tighter">Postar no Twitter</span>
                  </div>
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
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
