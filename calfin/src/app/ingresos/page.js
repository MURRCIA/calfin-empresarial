'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function IngresosPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    precioUnitario: '',
    unidadesVendidas: '',
    ventasHistoricas: '',
    estacionalidad: '',
    crecimientoEsperado: ''
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
            Ingresos Acumulados
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proyecta tus ingresos futuros basándose en datos históricos y tendencias de mercado. 
            Obtén predicciones precisas para planificar tu crecimiento.
          </p>
        </div>

        {/* Indicador de progreso */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? 'bg-yellow-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600 max-w-xs mx-auto">
            <span>Datos de ventas</span>
            <span>Proyección</span>
          </div>
        </div>

        {/* Contenido del paso */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Paso 1: Datos de ventas actuales</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="precioUnitario" className="block text-sm font-medium text-gray-700 mb-2">
                    Precio Promedio por Unidad ($)
                  </label>
                  <input
                    type="number"
                    id="precioUnitario"
                    name="precioUnitario"
                    value={formData.precioUnitario}
                    onChange={handleInputChange}
                    placeholder="Ej: 50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Precio promedio de venta de tu producto o servicio
                  </p>
                </div>

                <div>
                  <label htmlFor="unidadesVendidas" className="block text-sm font-medium text-gray-700 mb-2">
                    Unidades Vendidas por Mes (Actual)
                  </label>
                  <input
                    type="number"
                    id="unidadesVendidas"
                    name="unidadesVendidas"
                    value={formData.unidadesVendidas}
                    onChange={handleInputChange}
                    placeholder="Ej: 150"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Cantidad promedio de unidades vendidas mensualmente
                  </p>
                </div>

                <div>
                  <label htmlFor="ventasHistoricas" className="block text-sm font-medium text-gray-700 mb-2">
                    Ingresos del Mes Anterior ($)
                  </label>
                  <input
                    type="number"
                    id="ventasHistoricas"
                    name="ventasHistoricas"
                    value={formData.ventasHistoricas}
                    onChange={handleInputChange}
                    placeholder="Ej: 7500"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Total de ingresos del mes pasado para comparación
                  </p>
                </div>

                <div>
                  <label htmlFor="estacionalidad" className="block text-sm font-medium text-gray-700 mb-2">
                    Estacionalidad del Negocio
                  </label>
                  <select
                    id="estacionalidad"
                    name="estacionalidad"
                    value={formData.estacionalidad}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Selecciona el patrón estacional</option>
                    <option value="constante">Ventas constantes todo el año</option>
                    <option value="verano">Mayor actividad en verano</option>
                    <option value="invierno">Mayor actividad en invierno</option>
                    <option value="navidad">Picos en temporada navideña</option>
                    <option value="escolar">Relacionado con calendario escolar</option>
                    <option value="otro">Otro patrón</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">
                    Esto ayuda a ajustar las proyecciones según la época del año
                  </p>
                </div>

                <div>
                  <label htmlFor="crecimientoEsperado" className="block text-sm font-medium text-gray-700 mb-2">
                    Crecimiento Esperado (% mensual)
                  </label>
                  <input
                    type="number"
                    id="crecimientoEsperado"
                    name="crecimientoEsperado"
                    value={formData.crecimientoEsperado}
                    onChange={handleInputChange}
                    placeholder="Ej: 5"
                    min="0"
                    max="100"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Porcentaje de crecimiento mensual que esperas (0-100%)
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Paso 2: Proyección de Ingresos</h2>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Función de Ingresos Sugerida</h3>
                  <p className="text-yellow-800 mb-4">
                    Basándose en tus datos, proyectamos tus ingresos con crecimiento compuesto:
                  </p>
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <p className="font-mono text-lg">
                      I(t) = {formData.precioUnitario * formData.unidadesVendidas || '0'} × (1 + {formData.crecimientoEsperado || '0'}%)^t
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Donde t = número de meses desde ahora
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Ingresos Actuales</h4>
                    <p className="text-2xl font-bold text-yellow-600">
                      ${(formData.precioUnitario * formData.unidadesVendidas) || '0'}
                    </p>
                    <p className="text-sm text-gray-600">Por mes con ventas actuales</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Crecimiento Mensual</h4>
                    <p className="text-2xl font-bold text-green-600">+{formData.crecimientoEsperado || '0'}%</p>
                    <p className="text-sm text-gray-600">Incremento esperado mensual</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Proyección a 6 meses:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[1, 3, 6].map(month => {
                      const baseIncome = formData.precioUnitario * formData.unidadesVendidas || 0;
                      const growthRate = (formData.crecimientoEsperado || 0) / 100;
                      const projectedIncome = baseIncome * Math.pow(1 + growthRate, month);
                      
                      return (
                        <div key={month} className="bg-green-50 p-4 rounded-lg text-center">
                          <h5 className="font-medium text-green-900">Mes {month}</h5>
                          <p className="text-xl font-bold text-green-700">
                            ${Math.round(projectedIncome)}
                          </p>
                          <p className="text-sm text-green-600">
                            +{Math.round(((projectedIncome - baseIncome) / baseIncome) * 100)}%
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Ingresos Acumulados (6 meses)</h4>
                  <p className="text-3xl font-bold text-blue-700">
                    ${(() => {
                      const baseIncome = formData.precioUnitario * formData.unidadesVendidas || 0;
                      const growthRate = (formData.crecimientoEsperado || 0) / 100;
                      let total = 0;
                      for (let i = 1; i <= 6; i++) {
                        total += baseIncome * Math.pow(1 + growthRate, i);
                      }
                      return Math.round(total);
                    })()}
                  </p>
                  <p className="text-sm text-blue-700">Total proyectado en los próximos 6 meses</p>
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
                  : 'bg-yellow-600 text-white hover:bg-yellow-700'
              }`}
            >
              {step === 2 ? 'Generar Reporte' : 'Continuar'}
            </button>
          </div>
        </div>

        {/* Espacio reservado para resultados futuros */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Gráficos y Análisis Detallado</h3>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <p className="text-gray-600">
              Aquí aparecerán gráficos de tendencias, comparativas y análisis de estacionalidad
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