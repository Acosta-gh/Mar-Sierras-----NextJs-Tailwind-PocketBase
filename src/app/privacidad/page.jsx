import React from 'react';

export const metadata = {
    title: 'Política de Privacidad | Mar & Sierras',
    description: 'Información detallada sobre cómo tratamos y protegemos tus datos personales en Mar & Sierras.',
};

export default function PrivacyPolicyPage() {
    const lastUpdate = '31 de marzo de 2026';

    return (
        <div className="bg-white min-h-screen py-16 px-6 lg:py-24">
            <article className="max-w-3xl mx-auto">
                {/* Header Section */}
                <header className="mb-12 border-b border-gray-100 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#092f1d] mb-4 font-display">
                        Política de Privacidad
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed font-sans">
                        En Mar & Sierras nos comprometemos a proteger la privacidad de nuestra comunidad. Esta página detalla nuestras prácticas respecto a la gestión de su información.
                    </p>
                    <p className="text-xs text-gray-400 mt-6 uppercase tracking-widest font-sans">
                        Última actualización: {lastUpdate}
                    </p>
                </header>

                {/* Content Sections */}
                <div className="space-y-12 text-gray-700 leading-relaxed font-sans">

                    <section id="introduccion" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-[#092f1d]">1. Introducción</h2>
                        <p>
                            Esta Política de Privacidad describe cómo <strong>Mar & Sierras</strong> recopila, utiliza y protege la información personal que los usuarios proporcionan a través de nuestro sitio web. Al utilizar nuestros servicios o proporcionarnos sus datos, usted acepta las prácticas descritas en este documento.
                        </p>
                    </section>

                    <section id="datos-recopilados" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-[#092f1d]">2. Datos que recopilamos</h2>
                        <p>
                            Recopilamos información personal únicamente cuando el usuario decide proporcionarla de manera voluntaria al completar nuestro formulario de contacto o de solicitud de asociación.
                        </p>
                        <p>La información recopilada puede incluir:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-emerald-800">
                            <li>Nombre y apellido</li>
                            <li>Teléfono de contacto</li>
                            <li>Correo electrónico</li>
                            <li>Información del negocio o actividad profesional</li>
                        </ul>
                    </section>

                    <section id="uso-informacion" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-[#092f1d]">3. Uso de la información</h2>
                        <p>
                            Utilizamos los datos recopilados con el fin exclusivo de gestionar las solicitudes y mejorar nuestra comunicación con los usuarios. Específicamente, los datos se utilizan para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-emerald-800">
                            <li>Establecer contacto directo con el usuario para responder a sus consultas.</li>
                            <li>Gestionar el proceso de solicitud de asociación o requerimiento de servicios.</li>
                            <li>Elaborar estadísticas internas anónimas que nos ayuden a mejorar nuestra plataforma y atención.</li>
                        </ul>
                    </section>

                    <section id="proteccion-datos" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-[#092f1d]">4. Protección de los datos</h2>
                        <p>
                            La seguridad de su información es nuestra prioridad. En <strong>Mar & Sierras</strong>, manejamos sus datos de manera responsable y confidencial conforme a los estándares vigentes.
                        </p>
                        <p>
                            Implementamos medidas administrativas y técnicas para garantizar que la información no sea accesible a personas no autorizadas. <strong>Bajo ninguna circunstancia vendemos, alquilamos ni compartimos sus datos personales con terceros</strong> con fines comerciales o publicitarios externos.
                        </p>
                    </section>

                    <section id="derechos-usuario" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-[#092f1d]">5. Derechos del usuario</h2>
                        <p>
                            Como titular de sus datos personales, usted tiene derecho a saber qué información tenemos sobre usted, así como a solicitar su corrección o eliminación definitiva de nuestras bases de datos en cualquier momento.
                        </p>
                        <p>
                            Si desea ejercer alguno de estos derechos o tiene preguntas adicionales sobre el tratamiento de su información, por favor póngase en contacto con nosotros a través de los canales oficiales proporcionados en este sitio web.
                        </p>
                    </section>

                </div>

                <footer className="mt-20 pt-8 border-t border-gray-100 italic text-sm text-gray-500">
                    Esta política puede ser actualizada periódicamente para reflejar cambios en nuestras prácticas o requerimientos legales.
                </footer>
            </article>
        </div>
    );
}
