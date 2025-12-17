import React, { useState, useEffect } from 'react';
import { Check, Star, Heart, AlertCircle, ShieldCheck, Lock, ArrowRight, Menu, X, Gift } from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { AccordionItem } from './components/Accordion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-stone-800 antialiased selection:bg-brand-200 selection:text-brand-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-100 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold font-serif text-brand-600">Mãe Consciente</div>
          
          <div className="hidden md:flex gap-6 items-center">
            <Button onClick={scrollToPricing} className="py-2 px-4 text-sm">Quero começar</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-stone-600" /> : <Menu className="text-stone-600" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 p-4 flex flex-col gap-4 shadow-xl">
            <Button onClick={scrollToPricing} fullWidth>Quero começar</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-brand-50 to-white overflow-hidden relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-200 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
          <div className="space-y-8">
            <span className="inline-block bg-brand-100 text-brand-700 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase animate-fade-in">
              COMBO MÃE CONSCIENTE
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 leading-tight">
              Quebre o ciclo de <span className="text-brand-600">telas, birras e culpa</span> — e reconstrua a conexão com seu filho.
            </h1>
            <h2 className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
              Um sistema completo de 8 semanas para transformar sua casa do caos à conexão em apenas 8 semanas, sem gritos e sem permissividade.
            </h2>
            <div className="pt-8 flex flex-col items-center gap-6">
              <Button onClick={scrollToPricing} className="w-full md:w-auto px-12 py-5 text-xl shadow-brand-300 shadow-2xl">
                Sim, eu quero quebrar esse ciclo
              </Button>
              <div className="flex flex-wrap items-center justify-center gap-6 text-stone-500">
                <p className="text-sm flex items-center gap-2">
                  <ShieldCheck size={18} className="text-brand-500" /> Garantia de 7 dias
                </p>
                <p className="text-sm flex items-center gap-2">
                  <Check size={18} className="text-brand-500" /> Acesso imediato
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The Problem (Identification) */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800">
            Você não grita porque quer. <br/>
            <span className="text-stone-500 text-xl md:text-2xl italic font-normal">Você não entrega telas porque é negligente.</span>
          </h2>
          <div className="space-y-6 text-lg text-stone-600 text-left md:text-center leading-relaxed">
            <p>E você não perdeu a conexão com seu filho porque falhou como mãe. Você está presa em um ciclo invisível que ninguém nunca te explicou como quebrar.</p>
            <p className="font-medium text-brand-700">Se isso está acontecendo na sua casa, essa oferta é pra você.</p>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-stone-800">
              <AlertCircle className="text-brand-500" /> O Ciclo da Culpa
            </h3>
            <ul className="space-y-4 text-stone-600">
              <li className="flex gap-3"><span className="text-brand-400">✖</span> Promete que hoje não vai gritar.</li>
              <li className="flex gap-3"><span className="text-brand-400">✖</span> Promete que não vai ceder à tela.</li>
              <li className="flex gap-3"><span className="text-brand-400">✖</span> Mas o cansaço vence e a birra aparece.</li>
              <li className="flex gap-3"><span className="text-brand-400">✖</span> Resultado: Tela, Explosão, Grito, Culpa.</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl font-serif text-stone-800 italic">
              "À noite, quando a casa finalmente silencia, vem o pensamento que dói mais do que qualquer birra: <span className="font-bold text-brand-600">E se eu estiver estragando meu filho sem perceber?</span>"
            </p>
          </div>
        </div>
      </Section>

      {/* The Root Cause */}
      <Section dark className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-8">
          A verdade que ninguém te contou <br/>(e que muda tudo)
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p>O problema não é o seu filho. E não é você.</p>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-100 my-8">
            <h3 className="text-xl font-bold text-brand-700 mb-4 uppercase tracking-widest">Modo Sobrevivência Emocional</h3>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="bg-brand-100 p-2 rounded-lg text-brand-600 mt-1"><AlertCircle size={20}/></div>
                <p>A criança perde autorregulação</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-100 p-2 rounded-lg text-brand-600 mt-1"><AlertCircle size={20}/></div>
                <p>A mãe perde clareza e vive no automático</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-100 p-2 rounded-lg text-brand-600 mt-1"><AlertCircle size={20}/></div>
                <p>A conexão vira negociação</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-100 p-2 rounded-lg text-brand-600 mt-1"><AlertCircle size={20}/></div>
                <p>A autoridade vira grito (mesmo sem querer)</p>
              </div>
            </div>
          </div>
          <p className="font-bold text-stone-700">E nenhuma dica solta do Instagram resolve isso.</p>
        </div>
      </Section>

      {/* The Solution */}
      <Section id="metodo">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">A Solução</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">O que realmente funciona</h2>
          <p className="text-stone-500 mt-4">(e quase ninguém ensina)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Regular o Ambiente", desc: "Antes de exigir comportamento da criança.", icon: "🏠" },
            { title: "Autoridade Emocional", desc: "Antes de impor limites duros.", icon: "❤️" },
            { title: "Conexão Real", desc: "Antes de eliminar as telas.", icon: "🔗" }
          ].map((item, idx) => (
            <div key={idx} className="bg-brand-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-brand-100">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{item.title}</h3>
              <p className="text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Apresento a você: <br/><span className="text-brand-600 text-4xl font-serif">O COMBO MÃE CONSCIENTE</span></h3>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Um sistema completo de 8 semanas que te leva de onde você está hoje (presa no ciclo de culpa) para onde você quer estar: com paz, conexão e controle emocional.
          </p>
          <Button onClick={scrollToPricing} variant="primary">Quero conhecer os planos</Button>
        </div>
      </Section>

      {/* Deliverables (What's included) */}
      <Section id="conteudo" dark className="bg-stone-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold">O que você recebe ao entrar</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col">
            <div className="mb-4">
              <span className="bg-brand-100 text-brand-700 text-xs font-bold px-2 py-1 rounded">NOVO</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">#1: Protocolo Menos Tela, Mais Conexão</h3>
            <p className="text-sm text-stone-500 mb-4 font-mono">Valor: R$ 197</p>
            <ul className="space-y-2 mb-4 flex-grow">
              {['Passo a passo da quebra de ciclo', 'Identifique uso, abuso ou dependência', '3 fases da desintoxicação neurológica', 'Scripts prontos pra birras'].map((i, k) => (
                <li key={k} className="flex gap-2 text-sm text-stone-600"><Check size={16} className="text-green-500 min-w-[16px]"/> {i}</li>
              ))}
            </ul>
            <div className="bg-stone-50 p-3 rounded-lg text-sm text-stone-700 italic border-l-4 border-brand-500">
              Transformação: Você quebra o ciclo na raiz e resgata seu filho das telas.
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col">
            <h3 className="text-xl font-bold text-stone-900 mb-2">#2: Programa Pais Conscientes</h3>
            <p className="text-sm text-stone-500 mb-4 font-mono">Valor: R$ 997</p>
            <ul className="space-y-2 mb-4 flex-grow">
              {['13 módulos + 100 vídeo-aulas', 'Base emocional sólida', 'Blindagem emocional da criança'].map((i, k) => (
                <li key={k} className="flex gap-2 text-sm text-stone-600"><Check size={16} className="text-green-500 min-w-[16px]"/> {i}</li>
              ))}
            </ul>
            <div className="bg-stone-50 p-3 rounded-lg text-sm text-stone-700 italic border-l-4 border-brand-500">
              Transformação: Você se torna a mãe que seu filho precisa em CADA fase.
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col">
            <h3 className="text-xl font-bold text-stone-900 mb-2">#3: Imersão Birras Sem Estresse</h3>
            <p className="text-sm text-stone-500 mb-4 font-mono">Valor: R$ 297</p>
            <ul className="space-y-2 mb-4 flex-grow">
              {['Desativar ciclo neurológico das birras', 'Scripts de co-regulação', 'Imersão de 4 semanas'].map((i, k) => (
                <li key={k} className="flex gap-2 text-sm text-stone-600"><Check size={16} className="text-green-500 min-w-[16px]"/> {i}</li>
              ))}
            </ul>
            <div className="bg-stone-50 p-3 rounded-lg text-sm text-stone-700 italic border-l-4 border-brand-500">
              Transformação: Você nunca mais perde o controle.
            </div>
          </div>

           {/* Card 4 */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col">
            <h3 className="text-xl font-bold text-stone-900 mb-2">#4: Fórmula da Autoridade & Conexão</h3>
            <p className="text-sm text-stone-500 mb-4 font-mono">Valor: R$ 197</p>
            <ul className="space-y-2 mb-4 flex-grow">
              {['Estrutura de 3 passos para qualquer idade', 'Obediência sem gritos', 'CNV + Neurociência'].map((i, k) => (
                <li key={k} className="flex gap-2 text-sm text-stone-600"><Check size={16} className="text-green-500 min-w-[16px]"/> {i}</li>
              ))}
            </ul>
            <div className="bg-stone-50 p-3 rounded-lg text-sm text-stone-700 italic border-l-4 border-brand-500">
              Transformação: Seu filho coopera naturalmente.
            </div>
          </div>

          {/* Quick List for Smaller Bonuses */}
          <div className="md:col-span-2 grid gap-4 md:grid-cols-2 mt-4">
            {[
              { title: "#5: Mini Curso Criança Protegida", val: "R$ 97", desc: "Como blindar seu filho de abusos e riscos invisíveis." },
              { title: "#6: Curso Irmãos Sim, Rivais Não", val: "R$ 97", desc: "Acabe com brigas e crie vínculo entre irmãos." },
              { title: "#7: Guia da Separação Consciente", val: "R$ 197", desc: "Proteja o emocional do seu filho durante crises." },
              { title: "#8: Workshop Destrave a Mãe", val: "R$ 297", desc: "Cure seus bloqueios ocultos e padrões herdados." },
              { title: "#9: Checklist da Rotina Sem Gritos", val: "R$ 197", desc: "Sistemas visuais para manhãs e noites de paz." },
              { title: "#10: Comunidade Mãe Consciente", val: "R$ 997/ano", desc: "Grupo exclusivo, áudios e apoio constante." },
            ].map((bonus, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-lg border border-stone-100">
                <div className="bg-brand-50 p-2 rounded text-brand-500"><Gift size={20}/></div>
                <div>
                  <h4 className="font-bold text-stone-800">{bonus.title}</h4>
                  <p className="text-xs text-stone-400 mb-1">Valor: {bonus.val}</p>
                  <p className="text-sm text-stone-600">{bonus.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Value Stack Summary */}
        <div className="mt-16 bg-stone-900 text-stone-300 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif text-white mb-8">Deixa eu somar tudo isso pra você:</h3>
          <div className="space-y-3 text-left max-w-2xl mx-auto text-sm md:text-base mb-10 opacity-90">
            <div className="flex justify-between border-b border-stone-800 pb-2">
              <span>✅ Protocolo Menos Tela, Mais Conexão</span>
              <span className="font-mono text-brand-400">R$ 197</span>
            </div>
            <div className="flex justify-between border-b border-stone-800 pb-2">
              <span>✅ Programa Pais Conscientes</span>
              <span className="font-mono text-brand-400">R$ 997</span>
            </div>
            <div className="flex justify-between border-b border-stone-800 pb-2">
              <span>✅ Imersão Birras sem Estresse</span>
              <span className="font-mono text-brand-400">R$ 297</span>
            </div>
            <div className="flex justify-between border-b border-stone-800 pb-2">
              <span>✅ Fórmula Autoridade & Conexão</span>
              <span className="font-mono text-brand-400">R$ 197</span>
            </div>
            <div className="flex justify-between border-b border-stone-800 pb-2">
              <span>✅ BÔNUS: Mini Curso Criança Protegida</span>
              <span className="font-mono text-brand-400">R$ 97</span>
            </div>
            <div className="flex justify-between border-b border-stone-800 pb-2">
              <span>✅ BÔNUS: Irmãos Sim, Rivais Não</span>
              <span className="font-mono text-brand-400">R$ 97</span>
            </div>
            <div className="flex justify-between border-b border-stone-800 pb-2">
              <span>✅ BÔNUS: Guia Separação Consciente</span>
              <span className="font-mono text-brand-400">R$ 197</span>
            </div>
            <div className="flex justify-between border-b border-stone-800 pb-2">
              <span>✅ BÔNUS: Workshop Destrave a Mãe</span>
              <span className="font-mono text-brand-400">R$ 297</span>
            </div>
            <div className="flex justify-between border-b border-stone-800 pb-2">
              <span>✅ BÔNUS: Checklist Rotina sem Gritos</span>
              <span className="font-mono text-brand-400">R$ 197</span>
            </div>
            <div className="flex justify-between border-b border-stone-800 pb-2">
              <span>✅ BÔNUS: Comunidade Mãe Consciente (12 meses)</span>
              <span className="font-mono text-brand-400">R$ 997</span>
            </div>
          </div>
          <div className="pt-6">
            <p className="text-stone-400 uppercase tracking-widest text-sm mb-2">Valor Total</p>
            <p className="text-4xl md:text-5xl font-bold text-white line-through decoration-brand-500 decoration-4">R$ 3.570</p>
            <p className="mt-4 text-brand-300 font-medium">Mas preparei algo muito melhor para você.</p>
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" className="bg-gradient-to-br from-brand-50 to-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900">Escolha como começar</h2>
          <p className="text-stone-600 mt-2">Ambas as opções dão acesso ao mesmo método transformador.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          
          {/* Annual Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 transform transition hover:-translate-y-1 relative">
            <h3 className="text-xl font-bold text-stone-600 uppercase tracking-wide mb-2">Acesso Anual</h3>
            <p className="text-sm text-stone-500 mb-6">Acesso completo por 12 meses</p>
            <div className="mb-6">
              <span className="text-sm text-stone-400 line-through">De R$ 997</span>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-stone-800">12x R$ 61,38</span>
              </div>
              <p className="text-stone-500 text-sm mt-1">ou R$ 597 à vista</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2 text-stone-600 text-sm"><Check size={18} className="text-brand-500"/> Todo o conteúdo gravado</li>
              <li className="flex gap-2 text-stone-600 text-sm"><Check size={18} className="text-brand-500"/> Atualizações por 1 ano</li>
              <li className="flex gap-2 text-stone-600 text-sm"><Check size={18} className="text-brand-500"/> Comunidade por 1 ano</li>
            </ul>
            <Button variant="outline" fullWidth onClick={() => window.open('https://payfast.greenn.com.br/redirect/249442', '_blank')}>
              Quero Acesso Anual
            </Button>
          </div>

          {/* Lifetime Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-brand-500 transform scale-105 relative z-10">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              MAIS ESCOLHIDO
            </div>
            <h3 className="text-xl font-bold text-brand-600 uppercase tracking-wide mb-2">Acesso Vitalício</h3>
            <p className="text-sm text-stone-500 mb-6">Uma única vez. Sem renovações.</p>
            <div className="mb-6">
              <span className="text-sm text-stone-400 line-through">De R$ 1.297</span>
              <div className="flex items-end gap-1">
                <span className="text-5xl font-bold text-brand-700">12x R$ 92,23</span>
              </div>
              <p className="text-stone-500 text-sm mt-1">ou R$ 897 à vista</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2 text-stone-800 font-medium"><Star size={18} className="text-yellow-400 fill-yellow-400"/> Acesso Vitalício a TUDO</li>
              <li className="flex gap-2 text-stone-800"><Check size={18} className="text-brand-500"/> Sem prazos, sem pressa</li>
              <li className="flex gap-2 text-stone-800"><Check size={18} className="text-brand-500"/> Atualizações futuras gratuitas</li>
              <li className="flex gap-2 text-stone-800"><Check size={18} className="text-brand-500"/> Economia a longo prazo</li>
            </ul>
            <Button variant="primary" fullWidth onClick={() => window.open('https://payfast.greenn.com.br/redirect/249443', '_blank')}>
              QUERO ACESSO VITALÍCIO
            </Button>
            <p className="text-center text-xs text-stone-400 mt-4 flex justify-center items-center gap-1">
              <Lock size={12}/> Pagamento Seguro
            </p>
          </div>

        </div>

        {/* Guarantee */}
        <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-xl border border-stone-200 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="flex-shrink-0">
             <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
               <ShieldCheck size={48} />
             </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Garantia Incondicional de 7 Dias</h3>
            <p className="text-stone-600 mb-4">
              Entre, acesse tudo, implemente. Se em 7 dias você não sentir a melhora nas birras e na sua conexão, eu devolvo 100% do seu dinheiro. Sem perguntas. O risco é todo meu.
            </p>
          </div>
        </div>
      </Section>

      {/* Bio Section */}
      <Section id="autora">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="md:w-2/5">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/renata-machado.jpg" 
              alt="Renata Machado" 
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[3/4] border-4 border-white"
            />
          </div>
          <div className="md:w-3/5 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-800">Quem é Renata Machado?</h2>
            <div className="space-y-4 text-stone-600 text-lg">
              <p>Renata Machado é psicóloga há 17 anos, mãe de duas meninas e especialista em desenvolvimento emocional materno.</p>
              <p>Mas mais importante: <strong>já esteve exatamente onde você está agora.</strong></p>
              <p>Depois de anos atendendo famílias, viveu o próprio colapso — divórcio, luto e exaustão. Descobriu na pele que teoria nenhuma impede uma mãe de gritar se ela não tiver regulação.</p>
              <p>Foi desse fundo que nasceu o método Pais Conscientes: ferramentas reais para mães reais. Hoje, Renata já guiou centenas de mães do automático para a presença.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section dark className="bg-stone-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold">Perguntas Frequentes</h2>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-2">
          <AccordionItem title="Não tenho tempo. Como vou fazer?">
            Você tem tempo para birras diárias e exaustão? Aqui você começa com 20 minutos por dia e economiza horas de estresse depois. O curso é desenhado para mães ocupadas.
          </AccordionItem>
          <AccordionItem title="Meu parceiro não vai apoiar.">
            Você não precisa de permissão, precisa de resultado. Quando as mudanças na criança e no clima da casa começam a aparecer (e é rápido), o apoio vem naturalmente pelo exemplo.
          </AccordionItem>
          <AccordionItem title="Meu filho já está muito dependente. Ainda funciona?">
            Sim. O cérebro da criança é plástico e moldável. A mudança é possível em qualquer idade, desde que você tenha o sistema certo para reconduzir esse comportamento.
          </AccordionItem>
          <AccordionItem title="E se eu falhar?">
            Falhar sozinha machuca mais. Aqui você tem estrutura, suporte e direção. Você não estará tentando adivinhar o caminho, estará seguindo um mapa testado.
          </AccordionItem>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-brand-50 text-stone-800 text-center py-24 border-t border-brand-100">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-stone-900">Agora é decisão</h2>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-12">
          Daqui a 6 meses, você pode continuar presa no mesmo ciclo, ou olhar pra trás e agradecer por ter quebrado isso agora. O tempo vai passar de qualquer forma.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="primary" className="px-12 py-5 text-xl" onClick={scrollToPricing}>
            Quero começar minha transformação hoje
          </Button>
        </div>
        <p className="mt-8 text-stone-500 text-sm flex items-center justify-center gap-2">
          <ShieldCheck size={16} className="text-brand-500" /> Acesso imediato • Pagamento Seguro • Garantia de 7 dias
        </p>
      </Section>

      <footer className="bg-stone-900 text-stone-500 py-12 text-center text-sm">
        <div className="container mx-auto px-4">
          <p className="mb-4">© 2024 Renata Machado - Combo Mãe Consciente. Todos os direitos reservados.</p>
          <p>
            <a href="#" className="hover:text-stone-300">Termos de Uso</a> • <a href="#" className="hover:text-stone-300">Política de Privacidade</a>
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-stone-200 shadow-2xl md:hidden z-50 flex items-center justify-between animate-slide-up">
          <div className="text-sm">
             <p className="font-bold text-brand-600">Apenas R$ 61,38/mês</p>
             <p className="text-xs text-stone-500">Acesso anual</p>
          </div>
          <Button onClick={scrollToPricing} className="py-2 px-6 text-sm">
            Quero Agora
          </Button>
        </div>
      )}

    </div>
  );
}

export default App;