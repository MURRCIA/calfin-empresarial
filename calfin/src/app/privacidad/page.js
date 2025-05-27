import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Política de Privacidad
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
              En CalFin Empresarial, valoramos y respetamos su privacidad. Esta Política de Privacidad 
              describe cómo recopilamos, utilizamos, almacenamos y protegemos su información personal 
              cuando utiliza nuestros servicios. Nos comprometemos a mantener la confidencialidad y 
              seguridad de sus datos empresariales y personales.
            </p>
          </section>

          {/* Información que recopilamos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Información Personal</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono (opcional)</li>
              <li>Nombre de la empresa</li>
              <li>Información de contacto empresarial</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 Información Financiera del Negocio</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Costos fijos y variables</li>
              <li>Datos de ingresos y ventas</li>
              <li>Información de producción</li>
              <li>Proyecciones y metas financieras</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">2.3 Información Técnica</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Dirección IP</li>
              <li>Tipo de navegador y versión</li>
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Cookies y tecnologías similares</li>
            </ul>
          </section>

          {/* Cómo utilizamos la información */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo Utilizamos su Información</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-blue-800">
                <strong>Propósito Principal:</strong> Utilizamos su información exclusivamente para 
                proporcionar y mejorar nuestros servicios de análisis financiero.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Usos Específicos:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Realizar cálculos y análisis financieros personalizados</li>
              <li>Generar reportes y proyecciones para su negocio</li>
              <li>Proporcionar soporte técnico y atención al cliente</li>
              <li>Mejorar la funcionalidad y experiencia de usuario</li>
              <li>Enviar comunicaciones relacionadas con el servicio</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
            </ul>
          </section>

          {/* Protección de datos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Protección y Seguridad de Datos</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">4.1 Medidas de Seguridad</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Encriptación SSL/TLS para todas las transmisiones de datos</li>
              <li>Servidores seguros con certificaciones internacionales</li>
              <li>Acceso restringido a datos sensibles</li>
              <li>Monitoreo continuo de seguridad</li>
              <li>Copias de seguridad regulares y seguras</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">4.2 Almacenamiento de Datos</h3>
            <p className="text-gray-700 leading-relaxed">
              Sus datos se almacenan en servidores seguros ubicados en centros de datos certificados. 
              Implementamos controles de acceso estrictos y auditamos regularmente nuestras prácticas 
              de seguridad para garantizar la protección continua de su información.
            </p>
          </section>

          {/* Compartir información */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compartir Información con Terceros</h2>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
              <p className="text-green-800">
                <strong>Compromiso:</strong> No vendemos, alquilamos ni compartimos su información 
                personal o financiera con terceros para fines comerciales.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Excepciones Limitadas:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Proveedores de servicios técnicos bajo estrictos acuerdos de confidencialidad</li>
              <li>Cumplimiento de órdenes judiciales o requerimientos legales</li>
              <li>Protección de nuestros derechos legales o seguridad</li>
              <li>Con su consentimiento explícito y específico</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies y Tecnologías Similares</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">6.1 Tipos de Cookies que Utilizamos</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Cookies Esenciales</h4>
                <p className="text-gray-700 text-sm">Necesarias para el funcionamiento básico del sitio web</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Cookies de Rendimiento</h4>
                <p className="text-gray-700 text-sm">Nos ayudan a entender cómo los usuarios interactúan con el sitio</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Cookies de Funcionalidad</h4>
                <p className="text-gray-700 text-sm">Permiten recordar sus preferencias y configuraciones</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">6.2 Control de Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              Puede controlar y eliminar cookies a través de la configuración de su navegador. 
              Sin embargo, deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web.
            </p>
          </section>

          {/* Derechos del usuario */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Sus Derechos de Privacidad</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Usted tiene los siguientes derechos respecto a su información personal:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Acceso</h4>
                <p className="text-blue-800 text-sm">Solicitar una copia de los datos que tenemos sobre usted</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Rectificación</h4>
                <p className="text-green-800 text-sm">Corregir información inexacta o incompleta</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Eliminación</h4>
                <p className="text-yellow-800 text-sm">Solicitar la eliminación de sus datos personales</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Portabilidad</h4>
                <p className="text-purple-800 text-sm">Recibir sus datos en un formato estructurado</p>
              </div>
            </div>
          </section>

          {/* Retención de datos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Retención de Datos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conservamos su información personal solo durante el tiempo necesario para cumplir 
              con los propósitos descritos en esta política:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Datos de cuenta: Mientras mantenga una cuenta activa</li>
              <li>Datos financieros: Según sus preferencias o requerimientos legales</li>
              <li>Datos técnicos: Máximo 24 meses para análisis de rendimiento</li>
              <li>Comunicaciones: Según sea necesario para soporte y servicio</li>
            </ul>
          </section>

          {/* Menores de edad */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Protección de Menores</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-red-800">
                <strong>Importante:</strong> CalFin Empresarial no está dirigido a menores de 18 años. 
                No recopilamos intencionalmente información personal de menores de edad.
              </p>
            </div>
          </section>

          {/* Cambios en la política */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cambios en esta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios 
              en nuestras prácticas o por razones legales. Le notificaremos sobre cambios significativos 
              por correo electrónico o mediante un aviso prominente en nuestro sitio web. 
              La fecha de la última actualización se indica al inicio de esta política.
            </p>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto para Asuntos de Privacidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos 
              de privacidad, puede contactarnos:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email de Privacidad:</strong> privacidad@calfin.com</p>
              <p className="text-gray-700"><strong>Teléfono:</strong> +1 (555) 123-4567</p>
              <p className="text-gray-700"><strong>Dirección:</strong> 123 Business Avenue, Tech District, TD 12345</p>
              <p className="text-gray-700"><strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
            </div>
          </section>

          {/* Fecha de vigencia */}
          <section className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              Esta Política de Privacidad es efectiva a partir del 1 de diciembre de 2024 y 
              reemplaza todas las versiones anteriores.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 