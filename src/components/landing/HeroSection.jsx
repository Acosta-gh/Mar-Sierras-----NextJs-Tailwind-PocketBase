'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import Image from 'next/image';
import storefrontImage from '@/assets/storefront.png';
export default function HeroSection() {
    const { openAsociateModal } = useModal();

    return (
        <section className="relative pt-7 md:pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-bg">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center flex flex-col-reverse gap-10">

                    {/* Left: Content */}
                    <div className="flex flex-col gap-6 md:gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">

                        <h1 className="pt-6 md:pt-0 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
                            Potenciá tu negocio con <span className="text-primary block mt-2">Mar & Sierras</span>
                        </h1>

                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Somos la red cooperativa líder para comercios de artículos del hogar.
                            Unite para acceder a mejores precios, mayor poder de negociación y asesoramiento profesional constante.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
                            <button
                                onClick={openAsociateModal}
                                className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-text-on-primary bg-btn-primary hover:bg-btn-hover transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Asociate ahora <ArrowRight className="w-5 h-5" />
                            </button>
                            {/*
                            <Link
                                href="#contacto"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-primary bg-surface border border-border hover:border-primary/30 hover:bg-soft transition-all shadow-sm"
                            >
                                <Calendar className="w-5 h-5" /> Agendar llamada
                            </Link>
                            */}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full relative max-w-md mx-auto lg:max-w-none">
                        <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-primary-dark/5 bg-soft border border-border">
                            {/* Soft placeholder for image */}
                            <div className="absolute inset-0 flex items-center justify-center text-text-secondary p-12 text-center font-medium">
                                <Image
                                    src={storefrontImage}
                                    alt="Local de Mar & Sierras"
                                    fill
                                    priority
                                    className="object-cover object-[30%_center]" />
                            </div>
                        </div>

                        {/* Floating Badge  */}
                        <div className="absolute -bottom-6 -left-2 md:bottom-10 md:-left-10 bg-surface p-4 rounded-2xl shadow-xl shadow-text-primary/5 border border-divider flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="w-12 h-12 rounded-full bg-soft flex items-center justify-center text-primary font-bold text-xl">
                                +45
                            </div>
                            <div>
                                <p className="text-sm font-bold text-text-primary">Años</p>
                                <p className="text-xs text-text-secondary">en el mercado</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
