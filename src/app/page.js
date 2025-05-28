import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Sección principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Calculadora Empresarial
            <span className="block text-blue-600">Inteligente & Gratuita</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Descubre tus costos, ingresos y utilidades sin saber cálculo
          </p>
        </div>

        {/* Tarjetas de módulos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Módulo Costos Totales */}
          <Link href="/costos" className="group">
            <div className="bg-white rounded-2xl h-75 p-8 shadow-lg hover:shadow-xl transition-all duration-300 btn-hover border border-gray-100">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Costos Totales</h3>
                <p className="text-gray-600 leading-relaxed">
                  Calcula tus costos fijos, variables y marginales de manera automática
                </p>
              </div>
            </div>
          </Link>

          {/* Módulo Ingresos Acumulados */}
          <Link href="/ingresos" className="group">
            <div className="bg-white rounded-2xl h-75 p-8 shadow-lg hover:shadow-xl transition-all duration-300 btn-hover border border-gray-100">
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ingresos Acumulados</h3>
                <p className="text-gray-600 leading-relaxed">
                  Proyecta tus ingresos futuros basándose en datos históricos
                </p>
              </div>
            </div>
          </Link>

          {/* Módulo Proyección de Utilidades */}
          <Link href="/utilidades" className="group">
            <div className="bg-white rounded-2xl h-75 p-8 shadow-lg hover:shadow-xl transition-all duration-300 btn-hover border border-gray-100">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proyección de Utilidades</h3>
                <p className="text-gray-600 leading-relaxed">
                  Visualiza tus ganancias futuras y optimiza tu estrategia empresarial
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Sección adicional */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué usar CalFin?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Rápido y Fácil</h3>
                <p className="text-gray-600 text-sm">Sin complicaciones matemáticas</p>
              </div>
              <div className="text-center">
                <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Resultados Precisos</h3>
                <p className="text-gray-600 text-sm">Cálculos automáticos confiables</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Visualización Clara</h3>
                <p className="text-gray-600 text-sm">Gráficos y reportes intuitivos</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

