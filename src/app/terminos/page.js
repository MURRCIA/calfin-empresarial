import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Términos de Uso
          </h1>
          <p className="text-lg text-gray-600">
            Última actualización: Diciembre 2024
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Introducción */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              Bienvenido a CalFin Empresarial. Estos términos de uso (&quot;Términos&quot;) rigen el uso de nuestro sitio web 
              y servicios. Al acceder o utilizar CalFin Empresarial, usted acepta estar sujeto a estos Términos. 
              Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.
            </p>
          </section>

          {/* Descripción del servicio */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CalFin Empresarial es una plataforma de análisis financiero que proporciona herramientas para:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Cálculo de costos totales empresariales</li>
              <li>Proyección de ingresos acumulados</li>
              <li>Análisis de utilidades y rentabilidad</li>
              <li>Generación de reportes financieros básicos</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Nuestro servicio está diseñado para fines informativos y de análisis. Los resultados no constituyen 
              asesoramiento financiero profesional.
            </p>
          </section>

          {/* Uso aceptable */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Uso Aceptable</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al utilizar CalFin Empresarial, usted se compromete a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Proporcionar información precisa y veraz</li>
              <li>Utilizar el servicio únicamente para fines legítimos de negocio</li>
              <li>No intentar acceder a áreas restringidas del sistema</li>
              <li>No interferir con el funcionamiento del servicio</li>
              <li>Respetar los derechos de propiedad intelectual</li>
            </ul>
          </section>

          {/* Limitaciones */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitaciones del Servicio</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-yellow-800">
                <strong>Importante:</strong> CalFin Empresarial proporciona herramientas de análisis, 
                no asesoramiento financiero profesional.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los usuarios reconocen que:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Los resultados son estimaciones basadas en los datos proporcionados</li>
              <li>Las proyecciones no garantizan resultados futuros</li>
              <li>Se recomienda consultar con profesionales financieros para decisiones importantes</li>
              <li>El servicio puede tener interrupciones ocasionales por mantenimiento</li>
            </ul>
          </section>

          {/* Propiedad intelectual */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todo el contenido, diseño, algoritmos y funcionalidades de CalFin Empresarial son propiedad 
              exclusiva de nuestra empresa. Los usuarios obtienen una licencia limitada, no exclusiva y 
              revocable para utilizar el servicio según estos términos. Está prohibida la reproducción, 
              distribución o modificación del contenido sin autorización expresa.
            </p>
          </section>

          {/* Privacidad de datos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacidad y Protección de Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              La recopilación y uso de datos personales se rige por nuestra Política de Privacidad. 
              Nos comprometemos a proteger la confidencialidad de la información empresarial proporcionada 
              y a utilizarla únicamente para los fines del servicio. Los datos financieros ingresados 
              permanecen bajo el control del usuario.
            </p>
          </section>

          {/* Limitación de responsabilidad */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitación de Responsabilidad</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <p className="text-red-800">
                <strong>Exención de Responsabilidad:</strong> CalFin Empresarial se proporciona &quot;tal como está&quot; 
                sin garantías de ningún tipo.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              En ningún caso seremos responsables por daños directos, indirectos, incidentales o consecuentes 
              que resulten del uso o la imposibilidad de usar nuestro servicio. Esto incluye, pero no se limita a, 
              pérdidas financieras basadas en análisis o proyecciones proporcionadas por la plataforma.
            </p>
          </section>

          {/* Modificaciones */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificaciones de los Términos</h2>
            <p className="text-gray-700 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones 
              entrarán en vigor inmediatamente después de su publicación en el sitio web. Es responsabilidad 
              del usuario revisar periódicamente estos términos. El uso continuado del servicio después de 
              las modificaciones constituye la aceptación de los nuevos términos.
            </p>
          </section>

          {/* Terminación */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Terminación del Servicio</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos suspender o terminar el acceso al servicio en cualquier momento, con o sin causa, 
              con o sin previo aviso. Los usuarios pueden cancelar su cuenta en cualquier momento. 
              Tras la terminación, cesarán todos los derechos y licencias otorgados bajo estos términos.
            </p>
          </section>

          {/* Ley aplicable */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Ley Aplicable y Jurisdicción</h2>
            <p className="text-gray-700 leading-relaxed">
              Estos términos se rigen por las leyes del país donde opera CalFin Empresarial. 
              Cualquier disputa relacionada con estos términos será resuelta en los tribunales 
              competentes de dicha jurisdicción. Los usuarios renuncian a cualquier objeción 
              sobre la competencia o conveniencia del foro.
            </p>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Información de Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para preguntas sobre estos términos de uso, puede contactarnos a través de:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> legal@calfin.com</p>
              <p className="text-gray-700"><strong>Teléfono:</strong> +57 (555) 123-4567</p>
              <p className="text-gray-700"><strong>Dirección:</strong> Carrera 100 # 100-100, Bogotá, Colombia</p>
            </div>
          </section>

          {/* Fecha de vigencia */}
          <section className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              Estos términos de uso son efectivos a partir del 1 de diciembre de 2024 y reemplazan 
              todas las versiones anteriores.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 