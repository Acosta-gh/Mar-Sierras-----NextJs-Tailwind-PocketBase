import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Walter González',
        business: 'EFEGE Hogar',
        quote: 'Desde que me asocié a Mar & Sierras, mis márgenes de ganancia mejoraron un 30%. El acceso directo a las principales marcas sin intermediarios hizo toda la diferencia en mi ciudad.'
    },
    {
        name: 'Adolfo García',
        business: 'Laprida Confort',
        quote: 'El poder de negociación que tenemos al comprar en bloque es increíble. Además, el equipo siempre está dispuesto a asesorarnos. Ya no me siento solo compitiendo contra las grandes cadenas.'
    },
    {
        name: 'Acosta Leandro',
        business: 'CKS Hogar y Muebles',
        quote: 'Hace 10 años que soy parte de la cooperativa, mi negocio ha crecido exponencialmente desde que me uní. Fue un cambio radical en la forma de comprar; allí es donde se hace la diferencia.'
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 md:py-28 bg-primary-dark text-text-on-primary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-text-on-primary">Lo que dicen nuestros asociados</h2>
                    <p className="text-lg text-text-on-primary/70 max-w-2xl mx-auto">
                        Comercios de todo el país ya están potenciando sus ventas gracias a la fuerza cooperativa.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-surface/5 backdrop-blur-lg border border-surface/10 p-8 rounded-2xl flex flex-col h-full">
                            <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-text-on-primary/80 italic mb-8 flex-grow">
                                "{t.quote}"
                            </p>
                            <div>
                                <h4 className="font-bold text-text-on-primary text-lg">{t.name}</h4>
                                <p className="text-accent text-sm">{t.business}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
