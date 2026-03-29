import { TrendingUp, Truck, Map, ShieldCheck } from 'lucide-react';

const benefits = [
    {
        title: 'Poder de negociación',
        description: 'Al ser parte de una red de cientos de comercios, tu negocio negocia como uno grande.',
        icon: TrendingUp
    },
    {
        title: 'Acceso a precios de fábrica',
        description: 'Eliminamos la cadena de intermediarios para que compres directamente en origen.',
        icon: Truck
    },
    {
        title: 'Red nacional de comercios',
        description: 'Intercambiá experiencias, stock y estrategias con colegas de todo el país.',
        icon: Map
    },
    {
        title: 'Soporte profesional',
        description: 'Respaldo institucional, legal y comercial continuo por parte de la cooperativa.',
        icon: ShieldCheck
    }
];

export default function BenefitsSection() {
    return (
        <section id="beneficios" className="py-20 md:py-28 bg-soft relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/3 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">Beneficios de ser parte</h2>
                        <p className="text-lg text-text-secondary mb-8">
                            No estás solo. Sumate a un ecosistema comercial pensado exclusivamente para defender y potenciar a los comercios independientes de artículos del hogar.
                        </p>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4 md:gap-6">
                        {benefits.map((benefit, idx) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={idx} className="bg-surface p-6 md:p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-soft flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-text-primary mb-2">{benefit.title}</h4>
                                            <p className="text-text-secondary text-sm leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
