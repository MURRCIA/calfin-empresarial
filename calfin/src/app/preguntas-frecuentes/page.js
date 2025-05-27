'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PreguntasFrecuentesPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "¿Qué es CalFin Empresarial?",
          answer: "CalFin Empresarial es una calculadora inteligente que te ayuda a analizar las finanzas de tu negocio sin necesidad de conocimientos avanzados en matemáticas o cálculo. Convierte datos básicos de tu empresa en insights accionables para mejorar tu rentabilidad."
        },
        {
          question: "¿CalFin es gratuito?",
          answer: "Sí, ofrecemos una versión gratuita con funcionalidades básicas que incluye los tres módulos principales: Costos Totales, Ingresos Acumulados y Proyección de Utilidades. También tenemos planes premium con características avanzadas para empresas con necesidades más complejas."
        },
        {
          question: "¿Para qué tipo de negocios funciona CalFin?",
          answer: "CalFin está diseñado para funcionar con cualquier tipo de negocio: desde pequeños emprendimientos hasta medianas empresas. Funciona especialmente bien con negocios de manufactura, servicios, comercio, restaurantes, y cualquier empresa que tenga costos fijos y variables claramente identificables."
        }
      ]
    },
    {
      category: "Uso y Funcionalidad",
      questions: [
        {
          question: "¿Necesito conocimientos de matemáticas para usar CalFin?",
          answer: "No, absolutamente no. CalFin está diseñado específicamente para empresarios que no tienen conocimientos avanzados en matemáticas. Solo necesitas proporcionar datos básicos de tu negocio que ya conoces, como costos fijos, variables, precios de venta, etc."
        },
        {
          question: "¿Qué datos necesito para empezar?",
          answer: "Los datos básicos que necesitas son: costos fijos mensuales (alquiler, salarios, seguros), costos variables por unidad (materiales, comisiones), precio de venta por unidad, cantidad de unidades que produces/vendes mensualmente, y opcionalmente datos históricos de ventas."
        },
        {
          question: "¿Cuánto tiempo toma obtener resultados?",
          answer: "Una vez que ingreses tus datos, los resultados aparecen inmediatamente. El proceso completo de análisis para un módulo toma entre 5-10 minutos, dependiendo de la complejidad de tu negocio y la cantidad de datos que proporciones."
        },
        {
          question: "¿Puedo guardar mis análisis?",
          answer: "Actualmente, los análisis se mantienen durante tu sesión. Estamos trabajando en una funcionalidad de guardado permanente que estará disponible próximamente en nuestros planes premium."
        }
      ]
    },
    {
      category: "Módulos Específicos",
      questions: [
        {
          question: "¿Qué hace el módulo de Costos Totales?",
          answer: "El módulo de Costos Totales calcula automáticamente tu función de costos optimizada, incluyendo costos fijos, variables y marginales. Te proporciona gráficos de costos vs unidades producidas y recomendaciones para optimizar tus gastos."
        },
        {
          question: "¿Cómo funciona la proyección de ingresos?",
          answer: "El módulo de Ingresos Acumulados analiza tus datos históricos de ventas y tendencias para proyectar ingresos futuros a 1, 3 y 6 meses. Considera factores como estacionalidad, crecimiento esperado y variaciones del mercado."
        },
        {
          question: "¿Qué incluye el análisis de utilidades?",
          answer: "El módulo de Utilidades calcula tu utilidad bruta y neta, margen de rentabilidad, punto de equilibrio, ROI proyectado y compara tus resultados con tus metas. También proporciona recomendaciones estratégicas para mejorar la rentabilidad."
        }
      ]
    },
    {
      category: "Seguridad y Privacidad",
      questions: [
        {
          question: "¿Mis datos están seguros?",
          answer: "Sí, la seguridad de tus datos es nuestra prioridad. Utilizamos encriptación de nivel bancario (SSL/TLS) para proteger toda la información. Nunca compartimos tus datos con terceros y puedes eliminar tu información en cualquier momento."
        },
        {
          question: "¿Dónde se almacenan mis datos?",
          answer: "Tus datos se procesan localmente en tu navegador para los cálculos básicos. Para funcionalidades avanzadas, utilizamos servidores seguros con certificaciones de seguridad internacionales. Todos los datos están encriptados tanto en tránsito como en reposo."
        },
        {
          question: "¿Puedo eliminar mis datos?",
          answer: "Sí, tienes control total sobre tus datos. Puedes eliminar toda tu información en cualquier momento desde la configuración de tu cuenta, o contactándonos directamente."
        }
      ]
    },
    {
      category: "Soporte y Ayuda",
      questions: [
        {
          question: "¿Ofrecen soporte técnico?",
          answer: "Sí, ofrecemos soporte técnico gratuito por email con tiempo de respuesta promedio de 2-4 horas en días laborables. Los usuarios premium tienen acceso a soporte prioritario y chat en vivo."
        },
        {
          question: "¿Hay tutoriales disponibles?",
          answer: "Sí, tenemos una biblioteca completa de tutoriales en video, guías paso a paso y ejemplos prácticos. También ofrecemos webinars gratuitos semanales para nuevos usuarios."
        },
        {
          question: "¿Puedo solicitar nuevas funcionalidades?",
          answer: "¡Absolutamente! Valoramos mucho el feedback de nuestros usuarios. Puedes enviar sugerencias a través de nuestro formulario de contacto o durante los webinars. Muchas de nuestras funcionalidades actuales surgieron de sugerencias de usuarios."
        },
        {
          question: "¿Ofrecen consultoría personalizada?",
          answer: "Sí, ofrecemos servicios de consultoría empresarial personalizada para ayudarte a interpretar los resultados y desarrollar estrategias específicas para tu negocio. Contacta nuestro equipo de consultores para más información."
        }
      ]
    },
    {
      category: "Planes y Precios",
      questions: [
        {
          question: "¿Cuáles son las diferencias entre el plan gratuito y premium?",
          answer: "El plan gratuito incluye los tres módulos básicos con funcionalidades estándar. El plan premium añade análisis avanzados, múltiples escenarios, exportación de reportes, soporte prioritario, y funcionalidades de guardado permanente."
        },
        {
          question: "¿Hay descuentos para startups o estudiantes?",
          answer: "Sí, ofrecemos descuentos especiales del 50% para startups registradas y estudiantes universitarios. También tenemos programas especiales para organizaciones sin fines de lucro."
        },
        {
          question: "¿Puedo cambiar de plan en cualquier momento?",
          answer: "Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplican inmediatamente y se prorratea el costo según corresponda."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre CalFin Empresarial. 
            Si no encuentras lo que buscas, no dudes en contactarnos.
          </p>
        </div>

        {/* Búsqueda rápida */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Búsqueda rápida</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Costos</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Ingresos</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Utilidades</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Seguridad</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Precios</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Soporte</span>
            </div>
          </div>
        </div>

        {/* FAQs por categoría */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6">
                <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          <svg
                            className={`w-5 h-5 text-gray-500 transform transition-transform ${
                              openFAQ === globalIndex ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {openFAQ === globalIndex && (
                          <div className="px-6 pb-4">
                            <div className="border-t border-gray-200 pt-4">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contacto adicional */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">¿No encontraste tu respuesta?</h2>
          <p className="text-blue-100 mb-6">
            Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta específica sobre tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Contactar Soporte
            </a>
            <a
              href="mailto:soporte@calfin.com"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 