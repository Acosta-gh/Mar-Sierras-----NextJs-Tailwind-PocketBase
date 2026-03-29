import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-primary-dark pt-20 pb-10 border-t border-divider/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/logoblanco.png"
                                    alt="Logo"
                                    width={128}
                                    height={128}
                                    className="object-contain"
                                />
                                <span className="font-bold text-xl text-text-on-primary tracking-tight">
                                    MAR & SIERRAS
                                </span>
                            </div>
                        </Link>
                        <p className="text-text-on-primary/60 text-sm leading-relaxed mb-6">
                            Cooperativa de Provisión de Artículos del Hogar. Potenciando a comercios independientes desde hace más de 40 años.
                        </p>
                    </div>

                    {/* Links Col 1 - Empresa */}
                    <div>
                        <h4 className="font-bold text-text-on-primary mb-6 uppercase tracking-wider text-sm">Navegación</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-text-on-primary/60 hover:text-text-on-primary transition-colors text-sm">Inicio</Link>
                            </li>
                            <li>
                                <Link href="#quienes-somos" className="text-text-on-primary/60 hover:text-text-on-primary transition-colors text-sm">Quiénes somos</Link>
                            </li>
                            <li>
                                <Link href="#que-ofrecemos" className="text-text-on-primary/60 hover:text-text-on-primary transition-colors text-sm">Servicios</Link>
                            </li>
                            <li>
                                <Link href="#beneficios" className="text-text-on-primary/60 hover:text-text-on-primary transition-colors text-sm">Beneficios</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links Col 2 - Utilidades */}
                    <div>
                        <h4 className="font-bold text-text-on-primary mb-6 uppercase tracking-wider text-sm">Legal & Soporte</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#faq" className="text-text-on-primary/60 hover:text-text-on-primary transition-colors text-sm">Preguntas Frecuentes</Link>
                            </li>
                            <li>
                                <Link href="/terminos" className="text-text-on-primary/60 hover:text-text-on-primary transition-colors text-sm">Términos y condiciones</Link>
                            </li>
                            <li>
                                <Link href="/privacidad" className="text-text-on-primary/60 hover:text-text-on-primary transition-colors text-sm">Políticas de privacidad</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="font-bold text-text-on-primary mb-6 uppercase tracking-wider text-sm">Contacto</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-text-on-primary/60 text-sm">Av. Ejemplo 1234, CABA, Argentina</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                                <span className="text-text-on-primary/60 text-sm">+54 11 0000-0000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                                <span className="text-text-on-primary/60 text-sm">asociados@marysierras.com.ar</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-divider/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-on-primary/40 text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} Cooperativa Mar & Sierras LTDA. Todos los derechos reservados.
                    </p>
                    <p className="text-text-on-primary/40 text-xs">
                        Desarrollado para la fuerza cooperativa.
                    </p>
                </div>
            </div>
        </footer>
    );
}