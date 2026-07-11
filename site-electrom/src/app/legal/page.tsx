'use client';

import { useState } from 'react';

const LegalPage = () => {
  const [activeTab, setActiveTab] = useState<'termos' | 'privacidade'>('termos');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Informações Legais</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('termos')}
            className={`${
              activeTab === 'termos'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Termos de Uso
          </button>
          <button
            onClick={() => setActiveTab('privacidade')}
            className={`${
              activeTab === 'privacidade'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Política de Privacidade
          </button>
        </nav>
      </div>

      {/* Conteúdo */}
      <div className="prose prose-blue max-w-none">
        {activeTab === 'termos' ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Termos de Uso</h2>
            <p className="mb-4">
              Bem-vindo ao site da Electrom Engenharia. Ao acessar e utilizar este site, você concorda com os seguintes termos e condições:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1. Uso do Site</h3>
            <p className="mb-4">
              O conteúdo deste site é fornecido apenas para fins informativos. A Electrom Engenharia reserva-se o direito de modificar ou descontinuar qualquer aspecto do site a qualquer momento.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Propriedade Intelectual</h3>
            <p className="mb-4">
              Todo o conteúdo presente neste site, incluindo textos, imagens, logotipos e design, é propriedade da Electrom Engenharia e está protegido por leis de direitos autorais.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Limitação de Responsabilidade</h3>
            <p className="mb-4">
              A Electrom Engenharia não se responsabiliza por danos causados pelo uso ou impossibilidade de uso deste site, incluindo perdas diretas ou indiretas.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Política de Privacidade</h2>
            <p className="mb-4">
              Esta política descreve como a Electrom Engenharia coleta, usa e protege suas informações pessoais.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1. Coleta de Informações</h3>
            <p className="mb-4">
              Podemos coletar informações como nome, e-mail e telefone quando você preenche formulários em nosso site ou entra em contato conosco.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Uso das Informações</h3>
            <p className="mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Responder suas solicitações</li>
              <li>Enviar informações sobre nossos serviços</li>
              <li>Melhorar nossa comunicação</li>
              <li>Atender obrigações legais</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Proteção de Dados</h3>
            <p className="mb-4">
              Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado ou alteração.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4. Seus Direitos</h3>
            <p className="mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acessar suas informações pessoais</li>
              <li>Solicitar correções</li>
              <li>Solicitar exclusão de dados</li>
              <li>Retirar seu consentimento</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalPage; 