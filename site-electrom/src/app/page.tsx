import HeroSection from "../components/HeroSection";
import TrustBar from "../components/TrustBar";
import SolutionsGrid from "../components/SolutionsGrid";
import ServicesHorizontalScroll from "../components/ServicesHorizontalScroll";
import SlotMachineCases from "../components/SlotMachineCases";
import ImpactNumbers from "../components/ImpactNumbers";
import BlogPreview from "../components/BlogPreview";
import PartnersCarousel from "../components/PartnersCarousel";
import ContactCTA from "../components/ContactCTA";

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quais os requisitos para uma empresa migrar para o Mercado Livre de Energia (ACL)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Qualquer empresa atendida em média ou alta tensão (Grupo A) pode migrar imediatamente para o Mercado Livre de Energia com a ElectROM Engenharia, alcançando economia média de 25% a 40% nos custos de eletricidade. A ElectROM audita faturas, projeta o ganho líquido e cuida de toda a representação técnica e regulatória perante a CCEE e distribuidora local.'
      }
    },
    {
      '@type': 'Question',
      name: 'Como funcionam os sistemas de armazenamento BESS na indústria com a Lei nº 15.269/2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Lei nº 15.269/2025 regulamentou o armazenamento de energia em baterias no Brasil sem bitributação. Permite o corte de consumo nos horários de pico mais caros (peak shaving), estabilidade instantânea contra apagões e integração direta com usinas solares fotovoltaicas industriais para autoprodução.'
      }
    },
    {
      '@type': 'Question',
      name: 'Por que o laudo de SPDA segundo a NBR 5419 é obrigatório para indústrias e galpões?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O laudo de SPDA (Sistema de Proteção contra Descargas Atmosféricas) com emissão de ART assinada por engenheiro habilitado é exigência compulsória do Corpo de Bombeiros (para obtenção e renovação do AVCB) e de seguradoras corporativas para cobertura de sinistros e danos elétricos em maquinários.'
      }
    },
    {
      '@type': 'Question',
      name: 'Qual é a periodicidade recomendada para manutenção de cabines primárias e subestações?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A norma ABNT NBR 14039 recomenda inspeção termográfica periódica e manutenção preventiva anual completa com ensaios dielétricos de óleo em transformadores, calibração de relés secundários e reaperto de barramentos para evitar paradas não planejadas de produção.'
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-petrol">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <TrustBar />
      <SolutionsGrid />
      <ServicesHorizontalScroll />
      <SlotMachineCases />
      <ImpactNumbers />
      <BlogPreview />
      <PartnersCarousel />
      <ContactCTA />
    </div>
  );
}

