import { MapPin, Users2, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
    const stats = [
        {
            value: '1977',
            label: 'Año de fundación — casi cinco décadas en el mercado',
            icon: ShieldCheck
        },
        {
            value: 'Red nacional',
            label: 'Comercios de hogar y tecnología en todo el país',
            icon: MapPin
        },
        {
            value: 'Cooperativa de provisión',
            label: 'Estructura legal que garantiza la autonomía de cada asociado',
            icon: Users2
        }
    ];

    return (
        <section id="quienes-somos" className="py-20 md:py-28 bg-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
                            Quiénes somos
                        </h2>
                        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                            Mar & Sierras es una cooperativa de provisión que desde 1977 agrupa a los principales comercios independientes de artículos para el hogar y tecnología de Argentina.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            Nuestro modelo es claro: la suma de muchos negocios independientes genera el poder de compra de una gran cadena. Cada asociado conserva su identidad, su gestión y su libertad — y a cambio accede a condiciones comerciales que por su cuenta serían imposibles de obtener.
                        </p>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={idx} className="bg-surface rounded-2xl p-6 md:p-8 flex items-center gap-6 shadow-sm border border-border">
                                        <div className="w-16 h-16 rounded-2xl bg-soft flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-3xl md:text-4xl font-black text-text-primary mb-1">{stat.value}</div>
                                            <div className="text-sm font-semibold text-text-secondary uppercase tracking-widest">{stat.label}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}