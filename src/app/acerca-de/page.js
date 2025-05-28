import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function AcercaDePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Acerca de Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un equipo apasionado por ayudar a los emprendedores a tener un análisis financiero empresarial rapido y sencillo.
          </p>
        </div>

        {/* Misión */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Misión</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            En CalFin Empresarial, creemos que todos los emprendedores y empresarios merecen tener acceso 
            a herramientas financieras poderosas, sin importar su nivel de conocimiento en matemáticas o cálculo.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nuestra misión es simplificar los cálculos empresariales complejos y convertirlos en insights 
            accionables que impulsen el crecimiento y la rentabilidad de tu negocio.
          </p>
        </div>

        {/* Equipo */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestro Equipo</h2>
          
          <div className=" grid md:grid-cols-1 gap-8">
            {/* Miembro 1 */}
            <div className="text-center">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src="/images/jesus.png" alt="Ing. Jesus Murcia" width={100} height={100} className="rounded-full flex items-center justify-center mx-auto mb-4"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ing. Jesus Murcia </h3>
              <p className="text-blue-600 font-medium mb-3">Director de Desarrollo y Fundador</p>
              <p className="text-gray-600 text-sm">
                Estudiante de Ingenieria en Sistemas, con experiencia en desarrollo de software y 5 años de experiencia en el sector financiero.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestros Valores</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Simplicidad</h3>
              <p className="text-gray-600 text-sm">
                Convertimos lo complejo en simple, haciendo accesible el calculo y el análisis financiero para todos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovación</h3>
              <p className="text-gray-600 text-sm">
                Utilizamos tecnología de vanguardia para crear soluciones que realmente impacten.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compromiso</h3>
              <p className="text-gray-600 text-sm">
                Estamos comprometidos con el éxito de cada emprendedor que confía en nosotros.
              </p>
            </div>
          </div>
        </div>

        {/* Historia */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2025 - La Idea</h3>
                <p className="text-gray-700">
                  Identificamos la necesidad de tener herramientas para calcular y analizar el estado financiero.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2025 - Desarrollo</h3>
                <p className="text-gray-700">
                  Creamos los primeros prototipos y validamos nuestras hipótesis basado en estudios.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Presente - Lanzamiento</h3>
                <p className="text-gray-700">
                  CalFin Empresarial está aquí para transformar la manera en que analizas tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 