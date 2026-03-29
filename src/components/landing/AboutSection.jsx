import { MapPin, Users2, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
    const stats = [
        { value: '+150', label: 'Comercios', icon: Users2 },
        { value: '+5', label: 'Provincias', icon: MapPin },
        { value: '+40', label: 'Años de experiencia', icon: ShieldCheck }
    ];

    return (
        <section id="quienes-somos" className="py-20 md:py-28 bg-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">Quiénes somos</h2>
                        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                            Mar & Sierras es una cooperativa de provisión nacida de la necesidad de los comercios locales de unir fuerzas para competir en un mercado cada vez más concentrado.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            Desde hace más de 40 años agrupamos a los principales vendedores de artículos para el hogar, tecnología y afines de todo el país, garantizando siempre autonomía a cada comercio pero con la fuerza compradora de una gran cadena.
                        </p>
                    </div>

                    {/* Stats Grid */}
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
