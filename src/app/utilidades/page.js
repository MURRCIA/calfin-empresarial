'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function UtilidadesPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ingresosMensuales: '',
    costosFijos: '',
    costosVariables: '',
    impuestos: '',
    metaUtilidad: '',
    periodoAnalisis: '6'
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

  const calcularUtilidad = () => {
    const ingresos = parseFloat(formData.ingresosMensuales) || 0;
    const costosFijos = parseFloat(formData.costosFijos) || 0;
    const costosVariables = parseFloat(formData.costosVariables) || 0;
    const impuestos = parseFloat(formData.impuestos) || 0;
    
    const utilidadBruta = ingresos - costosFijos - costosVariables;
    const utilidadNeta = utilidadBruta - (utilidadBruta * impuestos / 100);
    
    return { utilidadBruta, utilidadNeta };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyección de Utilidades
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visualiza tus ganancias futuras y optimiza tu estrategia empresarial. 
            Analiza diferentes escenarios para maximizar tu rentabilidad.
          </p>
        </div>

        {/* Indicador de progreso */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600 max-w-xs mx-auto">
            <span>Datos financieros</span>
            <span>Análisis</span>
          </div>
        </div>

        {/* Contenido del paso */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Paso 1: Datos financieros del negocio</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="ingresosMensuales" className="block text-sm font-medium text-gray-700 mb-2">
                    Ingresos Mensuales Promedio ($)
                  </label>
                  <input
                    type="number"
                    id="ingresosMensuales"
                    name="ingresosMensuales"
                    value={formData.ingresosMensuales}
                    onChange={handleInputChange}
                    placeholder="Ej: 15000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Total de ingresos brutos mensuales de tu negocio
                  </p>
                </div>

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
                    placeholder="Ej: 5000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Alquiler, salarios, seguros y otros gastos fijos
                  </p>
                </div>

                <div>
                  <label htmlFor="costosVariables" className="block text-sm font-medium text-gray-700 mb-2">
                    Costos Variables Mensuales ($)
                  </label>
                  <input
                    type="number"
                    id="costosVariables"
                    name="costosVariables"
                    value={formData.costosVariables}
                    onChange={handleInputChange}
                    placeholder="Ej: 6000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Materiales, comisiones y gastos que varían con las ventas
                  </p>
                </div>

                <div>
                  <label htmlFor="impuestos" className="block text-sm font-medium text-gray-700 mb-2">
                    Porcentaje de Impuestos (%)
                  </label>
                  <input
                    type="number"
                    id="impuestos"
                    name="impuestos"
                    value={formData.impuestos}
                    onChange={handleInputChange}
                    placeholder="Ej: 25"
                    min="0"
                    max="100"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Porcentaje aproximado de impuestos sobre utilidades
                  </p>
                </div>

                <div>
                  <label htmlFor="metaUtilidad" className="block text-sm font-medium text-gray-700 mb-2">
                    Meta de Utilidad Mensual ($)
                  </label>
                  <input
                    type="number"
                    id="metaUtilidad"
                    name="metaUtilidad"
                    value={formData.metaUtilidad}
                    onChange={handleInputChange}
                    placeholder="Ej: 3000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Objetivo de utilidad neta que deseas alcanzar mensualmente
                  </p>
                </div>

                <div>
                  <label htmlFor="periodoAnalisis" className="block text-sm font-medium text-gray-700 mb-2">
                    Período de Análisis
                  </label>
                  <select
                    id="periodoAnalisis"
                    name="periodoAnalisis"
                    value={formData.periodoAnalisis}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="3">3 meses</option>
                    <option value="6">6 meses</option>
                    <option value="12">12 meses</option>
                    <option value="24">24 meses</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">
                    Período para el análisis de proyección de utilidades
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Paso 2: Análisis de Utilidades</h2>
              
              <div className="space-y-6">
                {/* Resumen actual */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <h4 className="font-semibold text-green-900 mb-2">Ingresos</h4>
                    <p className="text-2xl font-bold text-green-700">${formData.ingresosMensuales || '0'}</p>
                    <p className="text-sm text-green-600">Por mes</p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg text-center">
                    <h4 className="font-semibold text-red-900 mb-2">Costos Totales</h4>
                    <p className="text-2xl font-bold text-red-700">
                      ${(parseFloat(formData.costosFijos || 0) + parseFloat(formData.costosVariables || 0))}
                    </p>
                    <p className="text-sm text-red-600">Por mes</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-900 mb-2">Utilidad Bruta</h4>
                    <p className="text-2xl font-bold text-blue-700">
                      ${calcularUtilidad().utilidadBruta}
                    </p>
                    <p className="text-sm text-blue-600">Antes de impuestos</p>
                  </div>
                </div>

                {/* Utilidad neta */}
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Utilidad Neta Mensual</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-purple-700">
                        ${Math.round(calcularUtilidad().utilidadNeta)}
                      </p>
                      <p className="text-sm text-purple-600">Después de impuestos ({formData.impuestos || 0}%)</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-purple-900">
                        Margen: {formData.ingresosMensuales ? 
                          Math.round((calcularUtilidad().utilidadNeta / parseFloat(formData.ingresosMensuales)) * 100) : 0}%
                      </p>
                      <p className="text-sm text-purple-600">De los ingresos totales</p>
                    </div>
                  </div>
                </div>

                {/* Comparación con meta */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Análisis vs Meta</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Meta mensual</p>
                      <p className="text-xl font-bold text-gray-900">${formData.metaUtilidad || '0'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Diferencia</p>
                      <p className={`text-xl font-bold ${
                        (calcularUtilidad().utilidadNeta - parseFloat(formData.metaUtilidad || 0)) >= 0 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }`}>
                        ${Math.round(calcularUtilidad().utilidadNeta - parseFloat(formData.metaUtilidad || 0))}
                      </p>
                    </div>
                  </div>
                  
                  {(calcularUtilidad().utilidadNeta - parseFloat(formData.metaUtilidad || 0)) < 0 && (
                    <div className="mt-4 p-4 bg-yellow-50 rounded border-l-4 border-yellow-400">
                      <p className="text-yellow-800 font-medium">Recomendación:</p>
                      <p className="text-yellow-700 text-sm mt-1">
                        Necesitas aumentar ingresos en ${Math.abs(Math.round(calcularUtilidad().utilidadNeta - parseFloat(formData.metaUtilidad || 0)))}   
                        . o reducir costos para alcanzar tu meta.
                      </p>
                    </div>
                  )}
                </div>

                {/* Proyección */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Proyección a {formData.periodoAnalisis} meses:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h5 className="font-medium text-blue-900 mb-2">Utilidades Acumuladas</h5>
                      <p className="text-2xl font-bold text-blue-700">
                        ${Math.round(calcularUtilidad().utilidadNeta * parseInt(formData.periodoAnalisis))}
                      </p>
                      <p className="text-sm text-blue-600">En {formData.periodoAnalisis} meses</p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h5 className="font-medium text-green-900 mb-2">ROI Proyectado</h5>
                      <p className="text-2xl font-bold text-green-700">
                        {formData.ingresosMensuales ? 
                          Math.round((calcularUtilidad().utilidadNeta / parseFloat(formData.ingresosMensuales)) * 100 * 12) : 0}%
                      </p>
                      <p className="text-sm text-green-600">Anualizado</p>
                    </div>
                  </div>
                </div>

                {/* Punto de equilibrio */}
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Punto de Equilibrio</h4>
                  <p className="text-xl font-bold text-orange-700">
                    ${parseFloat(formData.costosFijos || 0) + parseFloat(formData.costosVariables || 0)}
                  </p>
                  <p className="text-sm text-orange-600">
                    Ingresos mínimos necesarios para no tener pérdidas
                  </p>
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
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {step === 2 ? 'Generar Reporte' : 'Continuar'}
            </button>
          </div>
        </div>

        {/* Espacio reservado para resultados futuros */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Análisis Avanzado y Escenarios</h3>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            <p className="text-gray-600">
              Aquí aparecerán análisis de sensibilidad, escenarios optimista/pesimista y recomendaciones estratégicas
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