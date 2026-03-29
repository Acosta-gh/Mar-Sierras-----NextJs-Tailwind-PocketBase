export default function HowItWorks() {
    const steps = [
        {
            num: '01',
            title: 'Contactanos',
            description: 'Llená el formulario o llamanos para que un asesor te cuente todos los detalles.'
        },
        {
            num: '02',
            title: 'Asociate',
            description: 'Completá los requisitos mínimos y sumate a nuestra red cooperativa nacional.'
        },
        {
            num: '03',
            title: 'Comprá mejor',
            description: 'Accedé inmediatamente a nuestros acuerdos, marcas y listas de precios exclusivas.'
        },
        {
            num: '04',
            title: 'Crecé',
            description: 'Aumentá tus márgenes, ofrecé mejores precios a tus clientes y expandí tu negocio.'
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">Cómo funciona</h2>
                    <p className="text-lg text-text-secondary">
                        Un proceso simple y transparente para que empieces a disfrutar de los beneficios lo antes posible.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-soft border-8 border-surface flex items-center justify-center z-10 shadow-sm mb-6">
                                <span className="text-2xl font-black text-primary">{step.num}</span>
                            </div>
                            <h4 className="text-xl font-bold text-text-primary mb-3">{step.title}</h4>
                            <p className="text-text-secondary text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
