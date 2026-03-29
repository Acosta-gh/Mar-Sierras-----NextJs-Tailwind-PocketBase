import { Package, Users, Tag, HeadphonesIcon } from 'lucide-react';

const offerings = [
    {
        title: 'Compras grupales',
        description: 'Consolidamos el volumen de compra de todos los asociados para obtener mejores condiciones frente a los fabricantes.',
        icon: Package,
    },
    {
        title: 'Acceso a proveedores',
        description: 'Trabajamos con las principales marcas de electrodomésticos, tecnología y artículos para el hogar del país.',
        icon: Users,
    },
    {
        title: 'Mejores precios',
        description: 'Mejoramos significativamente tus márgenes de ganancia al acceder a precios directos de fábrica sin intermediarios.',
        icon: Tag,
    },
    {
        title: 'Asesoramiento personalizado',
        description: 'Te acompañamos en cada paso con un equipo experto para optimizar tus compras y hacer crecer tu negocio.',
        icon: HeadphonesIcon,
    },
];

export default function ValueProposition() {
    return (
        <section id="que-ofrecemos" className="py-20 md:py-28 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Valor Agregado</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">¿Qué ofrecemos?</h3>
                    <p className="text-lg text-text-secondary">
                        Nuestra cooperativa está diseñada para brindarte todas las herramientas y ventajas que necesitas para competir en el mercado actual.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {offerings.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-bg rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 border border-border group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-surface shadow-sm flex items-center justify-center mb-6 border border-divider group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="text-xl font-bold text-text-primary mb-3">{item.title}</h4>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
