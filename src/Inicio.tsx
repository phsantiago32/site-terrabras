import React from 'react';
import { ArrowRight, Share2, MessageCircle, Twitter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  const whatsappMessage = `Brasil, a nossa Terra é Rara!\n\nAs terras raras são essenciais para o futuro, e o Brasil tem a 2ª maior reserva do mundo. Mas estão tentando entregar nosso subsolo para corporações estrangeiras!\n\nAssine a petição pela criação da TERRABRÁS e ajude a barrar o PL 2780/2024.\n\nAssine aqui: https://c.org/rHLH5fd6sP\nConheça a campanha: assinaterrabras.com.br`;
  
  const twitterMessage = `O futuro do Brasil não está à venda! Nossas Terras Raras estão sendo entregues ao capital estrangeiro.\n\nExigimos a criação da TERRABRÁS JÁ e a derrubada do PL 2780/2024. A nossa riqueza tem que gerar tecnologia aqui!\n\nAssine a petição: https://c.org/rHLH5fd6sP #TerrabrasJa`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Terrabrás Já!',
        text: 'A nossa Terra é Rara. O futuro do Brasil não está à venda! Assine a petição pela criação da Terrabrás.',
        url: 'https://assinaterrabras.com.br',
      }).catch(console.error);
    }
  };

  return (
    <div className="min-h-screen bg-terra-dark text-white font-sans overflow-x-hidden selection:bg-terra-yellow selection:text-terra-dark">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-24 flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-terra-dark">
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40 scale-105"
          >
            <source src="https://player.vimeo.com/progressive_redirect/playback/704811802/rendition/1080p/file.mp4?loc=external&signature=5f29911e2f3d1323bdfcf24cf37ff390be103f6f1c4e976cb7df8e27c0067644" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-terra-dark via-terra-dark/80 to-transparent z-20"></div>
          {/* Custom Halftone overlay */}
          <div className="absolute inset-0 opacity-20 z-20 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
          <div className="max-w-4xl mt-4 sm:mt-0">
            <div className="inline-block bg-terra-yellow text-terra-dark font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] px-4 py-2 mb-4 sm:mb-6 shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
              Em defesa da soberania nacional
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter text-white leading-[0.9] mb-4 sm:mb-6 drop-shadow-2xl">
              O futuro do Brasil <br className="hidden sm:block"/>
              <span className="text-terra-yellow">não está à venda.</span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 font-medium mb-6 sm:mb-8 max-w-2xl leading-relaxed border-l-4 border-terra-yellow pl-4">
              A segunda maior reserva de terras raras do mundo repousa em nosso subsolo, mas o PL 2780 quer entregá-la ao capital estrangeiro. Junte-se à mobilização pela criação da <strong>TERRABRÁS S.A.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
               <a href="https://c.org/rHLH5fd6sP" target="_blank" rel="noopener noreferrer" className="bg-terra-yellow hover:bg-white text-terra-dark px-6 py-3.5 sm:py-4 font-black text-xs sm:text-base uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(250,204,21,0.2)] text-center flex items-center justify-center gap-2">
                 Assinar a Petição <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
               </a>
               <Link to="/lutas" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 sm:py-4 font-black text-xs sm:text-base uppercase tracking-widest transition-colors text-center flex items-center justify-center">
                 Conheça as Lutas
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Context & Political Positioning (Brutalist Box) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-white/20 shadow-[8px_8px_0px_rgba(255,255,255,0.05)]">
          
          {/* Context Text - Col 1 */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-white/20 bg-black/40 flex flex-col justify-center">
            <div className="inline-block bg-white text-terra-dark font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] px-4 py-2 mb-6 self-start shadow-[4px_4px_0px_rgba(250,204,21,1)]">
              O Diagnóstico
            </div>
            
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-gray-300 font-medium">
              <p className="text-xl sm:text-2xl text-white font-black uppercase tracking-tight leading-snug">
                O Brasil encontra-se diante de uma encruzilhada histórica.
              </p>
              <p>
                Em nosso subsolo, repousa a segunda maior reserva mundial de terras raras. Estes minerais são o motor do século XXI. No entanto, sob os nossos olhos, está em curso o maior saque das nossas riquezas desde o período colonial.
              </p>
              <p>
                O atual modelo consolidará nosso papel de mero exportador de "buracos de minas", enquanto o nosso minério financia a industrialização estrangeira. O entreguismo avança através do <strong className="text-white">PL 2780/2024</strong>, que escancara a exportação do nosso minério cru, isentando o capital internacional de impostos.
              </p>
            </div>
          </div>

          {/* Manifesto Quote Box - Col 2 */}
          <div className="lg:col-span-5 bg-terra-yellow text-terra-dark p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-[-20px] right-2 text-[180px] font-serif italic font-black text-terra-dark/10 leading-none pointer-events-none select-none">
              "
            </div>
            
            <div className="relative z-10 mb-8 lg:mb-0">
              <p className="text-base sm:text-lg lg:text-xl font-bold italic leading-tight">
                Este manifesto propõe uma inversão da lógica que hoje organiza o saque do nosso subsolo. A mineração estratégica não pode ficar à mercê do livre mercado estrangeiro. Se o imperialismo pretende nos manter como colônia mineral, a resposta precisa ser organização, controle estatal e soberania.
              </p>
            </div>
            
            <Link to="/manifesto" className="relative z-10 inline-flex items-center justify-center gap-2 text-white bg-terra-dark font-black uppercase tracking-widest text-xs hover:bg-black hover:text-terra-yellow px-6 py-4 transition-colors group self-start border-2 border-transparent hover:border-terra-yellow mt-6">
              Leia o manifesto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* Dossiê Promo Box (Like "home + lutas" book download) */}
      <section className="bg-black/50 py-24 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
             <div className="w-64 h-80 bg-terra-copper border-4 border-terra-yellow flex flex-col items-center justify-center p-6 text-center transform -rotate-3 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621640786029-220e8ff8dd08?q=50&w=800&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-multiply"></div>
               <h3 className="text-3xl font-black italic uppercase text-white mb-4 relative z-10">Dossiê</h3>
               <p className="text-terra-yellow font-bold uppercase tracking-widest text-sm relative z-10">A ameaça estrangeira e a solução soberana</p>
             </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
              Acesse o Dossiê Completo sobre as Terras Raras
            </h2>
            <p className="text-gray-400 text-lg">
              Entenda os dados, os bastidores do PL 2780/2024, as lições de países como México e Indonésia, e por que a criação da Terrabrás S.A. é a única saída viável.
            </p>
            <div>
              <Link to="/dossie" className="inline-block bg-white text-terra-dark px-8 py-4 font-black text-sm uppercase tracking-widest hover:bg-terra-yellow transition-colors shadow-lg border-2 border-transparent hover:border-white">
                Ler o Dossiê Completo
              </Link>
            </div>
          </div>
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