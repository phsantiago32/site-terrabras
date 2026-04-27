/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  ShieldAlert, 
  FileText, 
  TrendingUp, 
  Download, 
  Share2, 
  MessageCircle, 
  Twitter, 
  ChevronRight,
  ChevronDown,
  Target,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement | Document;
      if (target === document || target === window) {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled((target as HTMLElement).scrollTop > 50);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Mensagem copiada para a área de transferência!');
  };

  const whatsappMessage = `🚨 URGENTE: O NOVO OURO DO BRASIL ESTÁ SENDO ROUBADO AGORA! 🚨
O Governo Federal acabou de ceder ao mercado e rejeitou a criação da TERRABRÁS para as Terras Raras. Eles querem aprovar o relatório do dep. Arnaldo Jardim, abrindo nosso patrimônio para empresas estrangeiras.
Diga NÃO ao entreguismo! Cobre o Governo e o Congresso.
Acesse o manifesto e assine a petição: https://assinaterrabras.com.br`;

  const twitterMessage = `Absurdo! O Governo e o relator Arnaldo Jardim querem entregar de bandeja as nossas Terras Raras ao capital estrangeiro e rejeitaram a criação da TERRABRÁS. Não aceitaremos o Brasil como fazenda do mundo! Exigimos controle soberano. Acesse o dossiê: https://assinaterrabras.com.br #TerrabrasJa #SoberaniaNacional @LulaOficial @ArnaldoJardim`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Terrabrás Já!',
          text: 'O Novo Ouro do Brasil está sendo roubado. Diga NÃO ao entreguismo! Assine a petição pela criação da TERRABRÁS.',
          url: 'https://assinaterrabras.com.br',
        });
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          copyToClipboard(whatsappMessage);
        }
      }
    } else {
      copyToClipboard(whatsappMessage);
    }
  };

  return (
    <div 
      ref={scrollContainerRef}
      className="md:h-auto h-[100dvh] overflow-x-hidden overflow-y-auto md:overflow-y-visible snap-y snap-proximity scroll-smooth min-h-screen text-white selection:bg-terra-yellow selection:text-black hide-scrollbar"
    >
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-terra-yellow/20 ${scrolled ? 'bg-terra-dark/95 backdrop-blur-md py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-terra-yellow flex items-center justify-center shadow-lg shadow-terra-yellow/20 shrink-0">
              <ShieldAlert className="text-terra-dark w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-terra-yellow uppercase">Terrabrás Já</span>
          </div>
          <nav className="hidden lg:flex gap-6 text-sm font-bold tracking-widest uppercase text-white/80">
            <a href="#entenda" className="hover:text-terra-yellow transition-colors">O Contexto</a>
            <a href="#solucao" className="hover:text-terra-yellow transition-colors">A Solução</a>
            <a href="#mural" className="hover:text-terra-yellow transition-colors">O Entreguismo</a>
            <Link to="/sobre" className="hover:text-terra-yellow transition-colors text-terra-yellow">Sobre o Movimento</Link>
            <a href="#mobilize" className="hover:text-terra-yellow transition-colors">Mobilize-se</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/sobre" className="flex lg:hidden bg-transparent border border-terra-yellow text-terra-yellow hover:bg-terra-yellow hover:text-terra-dark px-3 py-2 sm:px-6 sm:py-2 font-black text-[10px] sm:text-xs uppercase tracking-tighter transition-colors text-center leading-tight">
              Dossiê
            </Link>
            <a href="https://c.org/rHLH5fd6sP" target="_blank" rel="noopener noreferrer" className="bg-terra-yellow hover:bg-white text-terra-dark px-3 py-2 sm:px-6 sm:py-2 font-black text-[10px] sm:text-xs uppercase tracking-tighter transition-colors shadow-lg text-center leading-tight">
              Assinar <span className="hidden sm:inline">Petição</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-x-clip bg-terra-dark xl:min-h-0 xl:snap-align-none">
        <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-terra-green opacity-20 transform lg:skew-x-[-12deg] lg:translate-x-20"></div>
        <div className="absolute bottom-[20%] left-[-50px] w-64 h-64" style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.2) 0%, transparent 70%)' }}></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621640786029-220e8ff8dd08?q=50&w=800&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        
        {/* Topographic pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-[100dvh] lg:min-h-0 snap-start md:snap-align-none flex flex-col justify-between px-4 sm:px-6 lg:px-8 relative pt-[120px] pb-20 lg:pt-48 lg:pb-32"
          >
            
            <div className="flex-1 flex flex-col justify-center lg:justify-start">
              <h1 className="text-[44px] leading-[0.95] sm:text-5xl lg:text-[72px] lg:leading-[0.9] font-black text-white italic tracking-tighter mb-6 uppercase">
                O Novo Ouro<br/>do Brasil está sendo<br/>
                <span className="text-terra-yellow not-italic">Levado.</span>
              </h1>
              <div className="text-[15px] sm:text-lg leading-relaxed text-gray-300 max-w-xl border-l-2 border-terra-yellow pl-4 italic">
                <p className="mb-4">
                  O capital estrangeiro, com forte financiamento estatal dos EUA, está se apropriando da nossa única mina ativa de Terras Raras — os minerais críticos que movem a tecnologia do século XXI.
                </p>
                <p>
                  Se não agirmos agora, potências estrangeiras levarão todo o lucro, deixando para os brasileiros apenas a destruição e os buracos das minas. Precisamos criar a <strong className="text-white">Terrabrás</strong> para reter a riqueza, garantir milhares de empregos de alta tecnologia e o controle do nosso futuro!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 lg:mt-12 shrink-0 relative z-20">
              <a href="https://c.org/rHLH5fd6sP" target="_blank" rel="noopener noreferrer" className="bg-terra-yellow hover:bg-white text-terra-dark px-6 py-4 sm:px-8 sm:py-5 font-black text-xs sm:text-sm uppercase tracking-tighter transition-colors flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                Assinar na Change.org <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
              <Link to="/sobre" className="border-2 border-terra-yellow text-terra-yellow px-6 py-4 sm:px-8 sm:py-5 font-black text-xs sm:text-sm uppercase tracking-tighter hover:bg-terra-yellow/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                Ler o Dossiê
              </Link>
            </div>

            {/* Scroll Indicator Mobile */}
            <motion.div 
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center lg:hidden text-white/50"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <span className="text-[10px] uppercase tracking-widest font-bold mb-1">Deslize</span>
              <ChevronDown className="w-5 h-5 text-terra-yellow opacity-70" />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-h-[100dvh] lg:min-h-0 snap-start md:snap-align-none flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative py-16 lg:py-48"
          >
            {/* Fact Sheet Card */}
            <div className="bg-black/90 border border-red-500/50 p-5 sm:p-8 shadow-2xl relative text-sm leading-relaxed text-gray-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500 animate-pulse"></div>
              
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-red-500/20">
                <AlertTriangle className="w-8 h-8 text-red-500 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-red-500 tracking-widest leading-tight">Alerta Máximo</p>
                  <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tighter">A Capitulação do Governo</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#1DA1F2] mb-1 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#1DA1F2] animate-pulse"></span> Breaking News (22/ABR)</p>
                  <p className="text-white font-bold bg-[#1DA1F2]/10 p-3 border border-[#1DA1F2]/20">
                    O Governo Lula <span className="text-[#1DA1F2]">rejeitou oficialmente a criação da Terrabrás</span> em reunião no Palácio da Alvorada.
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-terra-yellow mb-1">A Escolha pelo Mercado</p>
                  <p className="text-white font-bold bg-white/5 p-3 border border-white/10">
                    O Planalto decidiu apoiar o relatório entreguista do deputado <strong>Arnaldo Jardim</strong>, priorizando o <span className="text-terra-yellow">capital privado estrangeiro</span>.
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">O Fim da Indústria</p>
                  <p className="border-l-2 border-red-500 pl-3 text-gray-400 italic">
                    Sem estatal, privatizam nossa maior riqueza (como a mina de Serra Verde/GO para os EUA) e nos condenam a ser apenas a "Fazenda do Mundo".
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-red-500/20 flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-widest font-black text-red-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> RISCO DE PRIVATIZAÇÃO
                </p>
                <div className="flex gap-1" aria-hidden="true">
                  <span className="w-1 h-3 bg-red-500/20"></span>
                  <span className="w-1 h-3 bg-red-500/40"></span>
                  <span className="w-1 h-3 bg-red-500"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Manifesto / Entenda - Parte 1 */}
      <section id="entenda" className="py-16 sm:py-24 bg-terra-dark relative border-t border-terra-yellow/20 min-h-[100dvh] xl:min-h-0 snap-start flex flex-col justify-center xl:snap-align-none">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[10px] uppercase font-bold tracking-widest text-terra-yellow mb-4">Dossiê de Entrega</h2>
            <h3 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase leading-tight mb-8">
              A Maior Pilhagem<br />Nacional do Século
            </h3>
            <div className="w-24 h-1 bg-terra-yellow mx-auto"></div>
          </div>

          <div className="max-w-none flex flex-col gap-6">
            <p className="text-lg sm:text-2xl font-medium leading-relaxed text-gray-200 border-l-4 border-terra-yellow pl-4 sm:pl-6">
              <span className="text-4xl sm:text-5xl text-terra-yellow font-black float-left mr-2 mt-1 leading-none">O</span>
              Brasil possui a <strong className="text-white font-bold">segunda maior reserva mundial de terras raras</strong>. Esses minerais são o grande motor do século XXI, essenciais para tecnologias avançadas. No entanto, nossa principal riqueza está sendo roubada.
            </p>

            <p className="text-base sm:text-xl font-medium leading-relaxed text-gray-300 pl-4 sm:pl-6">
              O Governo Federal tomou uma decisão inaceitável: <strong className="text-red-400">rejeitou a criação da Terrabrás</strong> para apoiar regras que favorecem a exploração por gigantes estrangeiras. A votação final no Congresso será no início de maio e <strong className="text-white">temos poucos dias para barrar a entrega do nosso futuro!</strong>
            </p>
          </div>
        </div>

        {/* Scroll Indicator Mobile */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center xl:hidden text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-[10px] uppercase tracking-widest font-bold mb-1">Deslize</span>
          <ChevronDown className="w-5 h-5 text-terra-yellow opacity-70" />
        </motion.div>
      </section>

      {/* Manifesto / Entenda - Parte 2 */}
      <section id="entenda-2" className="py-16 sm:py-24 bg-terra-dark relative min-h-[100dvh] xl:min-h-0 snap-start flex flex-col justify-center xl:snap-align-none xl:border-t-0 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <h4 className="text-3xl font-black italic tracking-tighter uppercase text-red-500 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8" /> Cronologia do Entreguismo
            </h4>

            <div className="space-y-6">
              <div className="bg-white/5 p-5 border-l-2 border-red-500 shadow-xl">
                <h5 className="text-xl font-black tracking-tighter uppercase text-white mb-2">1. A Hipocrisia do "Livre Mercado" (A Compra da Nossa Mina)</h5>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  A nossa única mina em operação, a Serra Verde (GO), acaba de ser comprada pela USA Rare Earth. O detalhe que tentam esconder: a compra foi financiada com um pacote de US$ 565 milhões da DFC, uma agência governamental dos Estados Unidos. Ou seja, os EUA usam o dinheiro do próprio Estado para comprar nossa riqueza, enquanto exigem que o Estado brasileiro fique de fora. É a prova definitiva de que não é livre mercado, é imperialismo. <strong className="text-white font-bold">Exportarão tudo sem refinar uma grama sequer aqui.</strong>
                </p>
              </div>

              <div className="bg-white/5 p-5 border-l-2 border-red-500 shadow-xl">
                <h5 className="text-xl font-black tracking-tighter uppercase text-white mb-2">2. A Recusa Nacional</h5>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Mesmo com projetos em tramitação para criar a Terrabrás, políticos abandonam a ideia da estatal sob a desculpa de "melhorar o investimento". Na prática, isso mantém a <strong className="text-white font-bold">exportação irrestrita do minério bruto</strong>, desperdiçando nosso potencial.
                </p>
              </div>

              <div className="bg-white/5 p-5 border-l-2 border-red-500 shadow-xl">
                <h5 className="text-xl font-black tracking-tighter uppercase text-white mb-2">3. O Risco de um Novo Ciclo do Ouro e Novos "Brumadinhos"</h5>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Se não criarmos a Terrabrás, o mercado privado estrangeiro vai apenas extrair e exportar o minério bruto. Reviveremos a tragédia do ouro de Minas Gerais: a nossa riqueza vai financiar a industrialização de potências estrangeiras, enquanto ficamos apenas com os buracos. Pior: sem controle estatal, ficamos à mercê de desastres ecológicos incalculáveis e do risco constante de rompimento de barragens, <strong className="text-white font-bold">repetindo a tragédia de Brumadinho.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Mobile */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center xl:hidden text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-[10px] uppercase tracking-widest font-bold mb-1">Deslize</span>
          <ChevronDown className="w-5 h-5 text-terra-yellow opacity-70" />
        </motion.div>
      </section>

      {/* Manifesto / Entenda - Parte 3 */}
      <section id="entenda-3" className="py-16 sm:py-24 bg-terra-dark relative min-h-[100dvh] xl:min-h-0 snap-start flex flex-col justify-center xl:snap-align-none xl:border-t-0 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            <h4 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase text-terra-yellow mt-12 sm:mt-16 mb-6 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8" /> A Única Saída: A Criação da Terrabrás
            </h4>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              O mercado privado estrangeiro só quer extrair e exportar cru. Para que o povo seja dono da sua própria riqueza, precisamos do controle do Estado. A solução é a criação imediata da <strong className="text-white font-bold">Terrabrás (Terras Raras Brasileiras S.A.)</strong>, inspirada no legado da Petrobras.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-terra-copper p-6 shadow-xl border border-terra-yellow/20">
                <h6 className="text-white text-lg font-black tracking-tight uppercase mb-3 text-terra-yellow">Controle Soberano</h6>
                <p className="text-sm text-gray-200 leading-relaxed font-bold">O Estado assume a pesquisa, exploração, separação e processamento industrial, rompendo o monopólio estrangeiro.</p>
              </div>
              <div className="bg-terra-copper p-6 shadow-xl border border-terra-yellow/20">
                <h6 className="text-white text-lg font-black tracking-tight uppercase mb-3 text-terra-yellow">Industrialização</h6>
                <p className="text-sm text-gray-200 leading-relaxed font-bold">Investimento para processar produtos de alto valor agregado (ímãs, semicondutores) no Brasil, gerando empregos via regime de partilha.</p>
              </div>
              <div className="bg-terra-copper p-6 shadow-xl border border-terra-yellow/20">
                <h6 className="text-white text-lg font-black tracking-tight uppercase mb-3 text-terra-yellow">Proteção Ambiental</h6>
                <p className="text-sm text-gray-200 leading-relaxed font-bold">Garantia de uma extração responsável por uma empresa que responde aos interesses sociais, não apenas ao lucro predatório.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Mobile */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center xl:hidden text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-[10px] uppercase tracking-widest font-bold mb-1">Deslize</span>
          <ChevronDown className="w-5 h-5 text-terra-yellow opacity-70" />
        </motion.div>
      </section>

      {/* Seção 4: Projetos de Lei */}
      <section id="solucao" className="py-16 sm:py-24 bg-terra-dark border-t border-white/5 min-h-[100dvh] md:min-h-0 snap-start flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-terra-yellow flex sm:items-center gap-3 flex-col sm:flex-row">
              Nossa Defesa em Risco
            </h2>
            <p className="text-xl text-gray-400 italic max-w-2xl">Não é utopia. Existem proposições na Câmara aprovando essa estatal, mas foram abandonadas pelo Governo. Exija a votação agora!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-terra-copper p-6 sm:p-8 hover:bg-terra-copper/80 transition-colors shadow-2xl flex flex-col">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
                <div className="flex items-center gap-3">
                  <FileText className="text-white w-6 h-6 shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-black">PL 1733/2026</h3>
                </div>
                <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm text-center">Aguardando Despacho</span>
              </div>
              <h4 className="text-[10px] tracking-widest text-white/80 mb-3 uppercase font-bold">Resumo: Estrutura da Terrabrás</h4>
              <p className="text-sm text-gray-200 leading-relaxed font-bold flex-1 mb-8">
                Autoriza a criação da estatal Terrabrás vinculada ao Ministério de Minas e Energia. Permite participação privada minoritária, mas garante o controle acionário da União para operar autonomamente em toda a cadeia produtiva, garantindo que o mercado livre não dite as regras sem orientação de soberania nacional.
              </p>
              
              <div className="border-t border-white/20 pt-5 mt-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-widest font-bold mb-1">Autor</p>
                    <p className="text-xs font-bold text-white">Rodrigo Rollemberg - PSB/DF</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-widest font-bold mb-1">Situação Atual</p>
                    <p className="text-xs font-bold text-white leading-tight">Mesa Diretora da Câmara dos Deputados</p>
                  </div>
                </div>
                <a href="https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2614995" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-white text-terra-copper hover:bg-gray-200 font-black text-xs uppercase tracking-tighter py-3 transition-colors shadow-md">
                  Ver Tramitação Oficial <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-terra-green p-6 sm:p-8 border border-terra-yellow/20 hover:border-terra-yellow/40 transition-colors shadow-2xl flex flex-col">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
                <div className="flex items-center gap-3">
                  <FileText className="text-terra-yellow w-6 h-6 shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-black text-terra-yellow">PL 1754/2026</h3>
                </div>
                <span className="bg-terra-yellow text-terra-dark text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm text-center">Aguardando Despacho</span>
              </div>
              <h4 className="text-[10px] tracking-widest text-terra-yellow/80 mb-3 uppercase font-bold">Resumo: Regime de Partilha</h4>
              <p className="text-sm text-gray-300 leading-relaxed font-bold flex-1 mb-8">
                Inspirado no sucesso do Pré-Sal, introduz o regime de partilha da produção mineral. A União atua como sócia ativa nos grandes empreendimentos geológicos de longo prazo, inibindo a exportação bruta contínua e vetando categoricamente a dependência bélica do uso de insumos brasileiros por potências de guerra.
              </p>
              
              <div className="border-t border-terra-yellow/20 pt-5 mt-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-[10px] text-terra-yellow/60 uppercase tracking-widest font-bold mb-1">Autor</p>
                    <p className="text-xs font-bold text-terra-yellow leading-tight">Pedro Uczai - PT/SC e outros</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-terra-yellow/60 uppercase tracking-widest font-bold mb-1">Situação Atual</p>
                    <p className="text-xs font-bold text-terra-yellow leading-tight">Mesa Diretora da Câmara dos Deputados</p>
                  </div>
                </div>
                <a href="https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2615287" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-terra-yellow text-terra-dark hover:bg-white font-black text-xs uppercase tracking-tighter py-3 transition-colors shadow-md shadow-terra-yellow/20">
                  Ver Tramitação Oficial <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Mural da Vergonha */}
      <section id="mural" className="py-16 sm:py-24 bg-terra-dark border-t border-terra-yellow/20 min-h-[100dvh] md:min-h-0 snap-start flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-red-500">Quem Articula o Entreguismo</h2>
            <p className="text-xl text-gray-400 italic">
              Conheça as faces, as omissões e os lobbies que estão lucrando com o saque do subsolo.
            </p>
          </div>

          <div className="space-y-6">
            
            <div className="bg-red-950/40 border-l-4 border-red-500 p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center relative shadow-2xl">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] uppercase font-black px-3 py-1 tracking-widest animate-pulse">
                Urgente: Capitulação (22/ABR)
              </div>
              <div className="flex-1 w-full mt-4 sm:mt-0">
                <h4 className="text-[14px] font-bold text-red-500 mb-2 uppercase tracking-wide">A Traição do Governo Federal</h4>
                <p className="text-xs text-red-100/80 italic font-medium leading-relaxed">
                  Em reunião no Palácio da Alvorada, o Planalto contrariou sua própria base e <strong>rejeitou oficialmente a criação da estatal Terrabrás</strong> para a exploração de minerais críticos. A justificativa governamental de evitar "entraves regulatórios" significa, na prática, deixar o caminho livre para a exportação predatória e crua do nosso futuro.
                </p>
              </div>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("Presidente @LulaOficial, como o governo recua da criação da Terrabrás e entrega nossas Terras Raras ao mercado estrangeiro? Exigimos o fim desse entreguismo no relatório! Junte-se ao movimento e assine a petição: https://assinaterrabras.com.br #TerrabrasJa #SoberaniaNacional")}`, '_blank')}
                className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-4 py-3 font-black text-xs uppercase tracking-tighter flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto transition-colors mt-4 sm:mt-0"
               >
                <Twitter className="w-4 h-4 fill-white shrink-0" /> Pressionar Planalto
              </button>
            </div>

            <div className="bg-black/40 border-l-4 border-terra-yellow p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center relative shadow-2xl">
              <div className="flex-1 w-full">
                <h4 className="text-[14px] font-bold text-terra-yellow mb-2 uppercase tracking-wide">O Relatório Entreguista de Arnaldo Jardim</h4>
                <p className="text-xs text-gray-300 italic leading-relaxed">
                  Com o recuo do Governo Federal, a principal ameaça agora reside na aprovação iminente (início de maio) do relatório do Deputado <strong>Arnaldo Jardim (Cidadania-SP)</strong>. O texto exclui completamente o controle do Estado e "incentiva o setor privado", uma senha clara para leiloar nossas jazidas ao capital estrangeiro.
                </p>
              </div>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("O relatório do deputado @ArnaldoJardim não pode ser aprovado! Exigimos a criação da #TerrabrasJá e o controle do Estado sobre os minerais críticos. O Brasil não está à venda! Leia o dossiê: https://assinaterrabras.com.br")}`, '_blank')}
                className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-4 py-3 font-black text-xs uppercase tracking-tighter flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto transition-colors"
               >
                <Twitter className="w-4 h-4 fill-white shrink-0" /> Exigir Mudança
              </button>
            </div>

            <div className="bg-terra-green-card p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center shadow-2xl">
              <div className="flex-1 w-full">
                <h4 className="text-[14px] font-bold text-white mb-2 uppercase tracking-wide">Lobbies e Entidades Mineradoras</h4>
                <p className="text-xs text-gray-400 italic">Instituições de composição majoritariamente estrangeira que ecoam o discurso de "ambiente de investimentos" apenas para afastar a regulação e o monopólio estatal, permitindo a exploração desenfreada.</p>
              </div>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("As entidades mineradoras estrangeiras não vão ditar as regras das NOSSAS Terras Raras. O Brasil exige controle estatal e a criação imediata da #TerrabrasJa! Saiba mais: https://assinaterrabras.com.br")}`, '_blank')}
                className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-4 py-3 font-black text-xs uppercase tracking-tighter flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto transition-colors"
               >
                <Twitter className="w-4 h-4 fill-white shrink-0" /> Cobrar Explicações
              </button>
            </div>

            <div className="bg-black/40 border-l-4 border-terra-yellow p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center relative shadow-2xl">
              <div className="flex-1 w-full">
                <h4 className="text-[14px] font-bold text-terra-yellow mb-2 uppercase tracking-wide">Senador Flávio Bolsonaro (A Oferta do Subsolo Brasileiro)</h4>
                <p className="text-xs text-gray-300 italic leading-relaxed">
                  <strong>A Traição Internacional:</strong> Em discurso para a extrema-direita norte-americana (CPAC 2026, no Texas), o senador ofereceu o subsolo brasileiro como a "solução dos EUA para quebrar a dependência da China" em minerais críticos. O patrimônio nacional foi abertamente oferecido como peça de reposição para o complexo militar-industrial americano, em uma explícita troca de favores por apoio político internacional.
                </p>
              </div>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("O senador @FlavioBolsonaro foi aos EUA oferecer nossas Terras Raras como peça de reposição para americanos. O subsolo brasileiro não é moeda de troca eleitoral! Exigimos a criação da #TerrabrasJa! https://assinaterrabras.com.br")}`, '_blank')}
                className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-4 py-3 font-black text-xs uppercase tracking-tighter flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto transition-colors"
               >
                <Twitter className="w-4 h-4 fill-white shrink-0" /> Exigir Soberania
              </button>
            </div>

            <div className="bg-black/40 border-l-4 border-terra-yellow p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center relative shadow-2xl">
              <div className="flex-1 w-full">
                <h4 className="text-[14px] font-bold text-terra-yellow mb-2 uppercase tracking-wide">Ronaldo Caiado e o Governo de Goiás (O Acordo Secreto)</h4>
                <p className="text-xs text-gray-300 italic leading-relaxed">
                  <strong>Soberania Ameaçada:</strong> Ignorando a Constituição, o governador assinou um memorando de entendimento inconstitucional com o governo dos Estados Unidos. O acordo prevê dar às empresas americanas acesso exclusivo e sigiloso ao mapeamento geológico do estado de Goiás. Na prática, isso dá aos EUA prioridade na busca pelos minerais e esconde os dados do próprio Governo Federal brasileiro.
                </p>
              </div>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("Absurdo! O governador @ronaldocaiado assinou acordo dando acesso exclusivo e sigiloso aos EUA sobre nossas reservas de minerais críticos em Goiás. Nossa geologia não é quintal estrangeiro! #TerrabrasJa https://assinaterrabras.com.br")}`, '_blank')}
                className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-4 py-3 font-black text-xs uppercase tracking-tighter flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto transition-colors"
               >
                <Twitter className="w-4 h-4 fill-white shrink-0" /> Denunciar Sigilo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6: Kit de Mobilização */}
      <section id="mobilize" className="py-16 sm:py-24 bg-terra-green relative overflow-hidden border-t border-terra-yellow/20 min-h-[100dvh] md:min-h-0 snap-start flex flex-col justify-center">
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-2 text-white">Kit de Mobilização</h2>
              <p className="text-lg text-gray-300 italic mb-4">
                A nossa maior arma é a informação. A mídia hegemônica não vai falar sobre isso. Depende de você compartilhar a verdade no seu WhatsApp, Instagram e Twitter.
              </p>
              
              <div className="space-y-4">
                <div className="bg-black/40 p-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center border-[1px] border-terra-yellow/10">
                  <div className="flex justify-between items-center sm:hidden mb-2">
                    <p className="text-[12px] uppercase font-bold text-terra-yellow tracking-widest">Para o WhatsApp</p>
                    <div className="w-8 h-8 bg-green-500 flex items-center justify-center shrink-0 rounded-full">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="hidden sm:flex w-12 h-12 bg-green-500 items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 hidden sm:block">
                    <p className="text-[10px] uppercase font-bold text-terra-yellow tracking-widest mb-1">Para o WhatsApp</p>
                    <p className="text-xs text-white/60 truncate italic">{whatsappMessage.replace(/\n/g, ' ')}</p>
                  </div>
                  <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`, '_blank')} className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-colors w-full sm:w-auto text-center mt-2 sm:mt-0">
                    Enviar
                  </button>
                </div>
                
                 <div className="bg-black/40 p-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center border-[1px] border-terra-yellow/10">
                  <div className="flex justify-between items-center sm:hidden mb-2">
                    <p className="text-[12px] uppercase font-bold text-terra-yellow tracking-widest">Para o Twitter</p>
                    <div className="w-8 h-8 bg-[#1DA1F2] flex items-center justify-center shrink-0 rounded-full">
                      <Twitter className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="hidden sm:flex w-12 h-12 bg-[#1DA1F2] items-center justify-center shrink-0">
                    <Twitter className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 hidden sm:block">
                    <p className="text-[10px] uppercase font-bold text-terra-yellow tracking-widest mb-1">Para o Twitter</p>
                    <p className="text-xs text-white/60 truncate italic">{twitterMessage.replace(/\n/g, ' ')}</p>
                  </div>
                  <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterMessage)}`, '_blank')} className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-colors w-full sm:w-auto text-center mt-2 sm:mt-0">
                    Tweetar
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-terra-copper border border-terra-yellow/20 p-6 sm:p-10 shadow-2xl flex flex-col justify-center items-center text-center mt-8 lg:mt-0">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black italic tracking-tighter uppercase mb-6 text-white leading-tight">Junte-se a nós na<br/><span className="text-terra-yellow">Change.org</span></h3>
              <p className="text-xs sm:text-sm text-white/90 font-bold mb-8 max-w-sm">
                Nossa mobilização está acontecendo de forma centralizada. Junte-se a milhares de brasileiros, assine a petição e exija a criação da Terrabrás!
              </p>
              <a href="https://c.org/rHLH5fd6sP" target="_blank" rel="noopener noreferrer" className="w-full bg-terra-yellow hover:bg-white text-terra-dark font-black text-sm sm:text-lg uppercase tracking-tighter py-4 sm:py-5 transition-colors shadow-lg flex items-center justify-center gap-2">
                Assinar Petição <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              </a>
              <p className="text-[10px] uppercase tracking-widest text-white/50 mt-6">Você será redirecionado para a plataforma segura da Change.org.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Poster de Compartilhamento */}
      <footer className="bg-terra-dark min-h-[100dvh] flex flex-col items-center justify-between py-12 px-4 sm:px-6 relative snap-start snap-always border-t border-terra-yellow/20 overflow-hidden">
        {/* Background Texture/Gradient */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621640786029-220e8ff8dd08?q=50&w=800&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-terra-copper/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Print Area Border */}
        <div className="absolute inset-4 sm:inset-8 border border-white/10 rounded-sm pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full flex-1 gap-8 sm:gap-16 pt-8">
          
          {/* Block 1: O Grito de Guerra */}
          <div className="text-center w-full">
            <h2 className="text-[10.5vw] sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.95] drop-shadow-2xl">
              Brasil,<br/>
              Nossa Terra é <span className="text-terra-yellow">Rara.</span>
              <br/>
              Não Podemos <span className="text-terra-yellow">Abrir Mão!</span>
            </h2>
          </div>

          {/* Block 2: O Manifesto de 1 Linha */}
          <div className="text-center w-full max-w-2xl px-4">
            <p className="text-sm sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-gray-300 leading-relaxed">
              A riqueza do nosso subsolo não é moeda de troca para o capital estrangeiro.
            </p>
          </div>

          {/* Block 3: O "Selo" da Exigência */}
          <div className="relative w-full max-w-3xl flex flex-col items-center justify-center py-8 sm:py-16 my-2 border-y-2 border-terra-yellow/30 bg-terra-yellow/5">
           
            <h3 className="text-[7.5vw] sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-terra-yellow leading-[0.95] text-center px-4">
              Exigimos a criação da<br/>Terrabrás Já!
            </h3>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-white/50 italic font-medium px-6 text-center max-w-lg">
              Em defesa da soberania nacional, contra o entreguismo!
            </p>
             <p className="mt-4 sm:mt-4 text-xs sm:text-sm text-white/50 italic font-medium px-6 text-center max-w-lg">
              Não ao novo ciclo de commodities!
            </p>
            <p className="mt-4 sm:mt-4 text-xs sm:text-sm text-white/50 italic font-medium px-6 text-center max-w-lg">
              Nossas terras raras ficam no Brasil!
            </p>
          </div>
        </div>

        {/* Block 4: O Call to Action Literal */}
        <div className="relative z-10 w-full max-w-2xl text-center mt-auto pb-6 pt-12">
          <div className="bg-black border border-white/20 p-6 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <h4 className="flex items-center justify-center gap-3 text-xl sm:text-2xl font-black uppercase text-white mb-4 tracking-tight">
              <span className="text-2xl">📸</span> Tire Prints e Compartilhe <span className="text-2xl">📸</span>
            </h4>
            <p className="text-xs sm:text-sm font-medium text-gray-300 leading-relaxed mb-4 uppercase tracking-widest">
              Poste no Instagram, Whatsapp, Twitter, Facebook, marque seus deputados e senadores, e compartilhe o link: 
            </p>
            <button onClick={handleShare} className="inline-block border-2 border-terra-yellow bg-terra-yellow text-terra-dark px-6 py-3 font-black text-sm sm:text-lg uppercase tracking-widest break-all hover:bg-white transition-colors cursor-pointer rounded-sm shadow-xl shadow-terra-yellow/20">
              assinaterrabras.com.br
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
