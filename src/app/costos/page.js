'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CostosPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    costosFijos: '',
    costosVariablesUnitarios: '',
    unidadesProducidas: '',
    tipoNegocio: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContinue = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Costos Totales
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calcula automáticamente tus costos fijos, variables y marginales. 
            Solo necesitas proporcionar algunos datos básicos de tu negocio.
          </p>
        </div>

        {/* Indicador de progreso */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600 max-w-xs mx-auto">
            <span>Datos básicos</span>
            <span>Configuración</span>
          </div>
        </div>

        {/* Contenido del paso */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Paso 1: Ingresa los datos de tu negocio</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="costosFijos" className="block text-sm font-medium text-gray-700 mb-2">
                    Costos Fijos Mensuales ($)
                  </label>
                  <input
                    type="number"
                    id="costosFijos"
                    name="costosFijos"
                    value={formData.costosFijos}
                    onChange={handleInputChange}
                    placeholder="Ej: 5.000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Incluye alquiler, salarios fijos, seguros, etc.
                  </p>
                </div>

                <div>
                  <label htmlFor="costosVariablesUnitarios" className="block text-sm font-medium text-gray-700 mb-2">
                    Costo Variable por Unidad ($)
                  </label>
                  <input
                    type="number"
                    id="costosVariablesUnitarios"
                    name="costosVariablesUnitarios"
                    value={formData.costosVariablesUnitarios}
                    onChange={handleInputChange}
                    placeholder="Ej: 25.000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Materiales, comisiones, costos de producción por unidad
                  </p>
                </div>

                <div>
                  <label htmlFor="unidadesProducidas" className="block text-sm font-medium text-gray-700 mb-2">
                    Unidades Producidas/Vendidas por Mes
                  </label>
                  <input
                    type="number"
                    id="unidadesProducidas"
                    name="unidadesProducidas"
                    value={formData.unidadesProducidas}
                    onChange={handleInputChange}
                    placeholder="Ej: 200"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Cantidad promedio mensual de productos o servicios
                  </p>
                </div>

                <div>
                  <label htmlFor="tipoNegocio" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Negocio
                  </label>
                  <select
                    id="tipoNegocio"
                    name="tipoNegocio"
                    value={formData.tipoNegocio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona tu tipo de negocio</option>
                    <option value="manufactura">Manufactura</option>
                    <option value="servicios">Servicios</option>
                    <option value="comercio">Comercio/Retail</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="restaurante">Restaurante/Alimentación</option>
                    <option value="otro">Otro</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">
                    Esto nos ayuda a sugerir la mejor función de costos
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Paso 2: Configuración de Análisis</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Función de Costo Sugerida</h3>
                  <p className="text-green-800 mb-4">
                    Basándose en tus datos, recomendamos usar una función de costo lineal:
                  </p>
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <p className="font-mono text-lg">
                      C(x) = {formData.costosFijos || '0'} + {formData.costosVariablesUnitarios || '0'} × x
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Donde x = número de unidades producidas
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Costo Fijo Total</h4>
                    <p className="text-2xl font-bold text-blue-600">${formData.costosFijos || '0'}</p>
                    <p className="text-sm text-gray-600">Por mes, independiente de la producción</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Costo Variable Total</h4>
                    <p className="text-2xl font-bold text-blue-600">
                      ${(formData.costosVariablesUnitarios * formData.unidadesProducidas) || '0'}
                    </p>
                    <p className="text-sm text-gray-600">Para {formData.unidadesProducidas || '0'} unidades</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Costo Total Estimado</h4>
                  <p className="text-3xl font-bold text-green-700">
                    ${(parseInt(formData.costosFijos || 0) + (formData.costosVariablesUnitarios * formData.unidadesProducidas)) || '0'}
                  </p>
                  <p className="text-sm text-green-700">Por mes con la producción actual</p>
                </div>
              </div>
            </div>
          )}

          {/* Botones de navegación */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`px-6 py-3 rounded-lg font-medium ${
                step === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Anterior
            </button>
            
            <button
              onClick={handleContinue}
              disabled={step === 2}
              className={`px-6 py-3 rounded-lg font-medium ${
                step === 2
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {step === 2 ? 'Calcular' : 'Continuar'}
            </button>
          </div>
        </div>

        {/* Espacio reservado para resultados futuros */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Resultados y Análisis</h3>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p className="text-gray-600">
              Aquí aparecerán los gráficos de costos vs unidades y análisis detallados
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Funcionalidad en desarrollo
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 