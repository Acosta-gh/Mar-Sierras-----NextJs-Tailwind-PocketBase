"use client"

import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function CtaSection() {
    const { openAsociateModal } = useModal();
    return (
        <section className="py-24 relative overflow-hidden bg-primary" id="asociarse">
            {/* Background circles */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-surface/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-on-primary mb-8 leading-tight">
                    Sumate a la red y empezá a crecer hoy
                </h2>
                <p className="text-xl md:text-2xl text-text-on-primary/80 mb-12 max-w-2xl mx-auto">
                    Dejá de competir solo. Unite a la cooperativa de artículos del hogar más grande del país y llevá tu negocio al próximo nivel.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={openAsociateModal}
                        className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl text-lg font-bold text-primary bg-surface hover:bg-bg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Quiero asociarme <ArrowRight className="w-6 h-6" />
                    </button>
                    <a
                        href="https://wa.me/5492615388178"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl text-lg font-bold text-text-on-primary bg-transparent border-2 border-surface/30 hover:bg-surface/10 transition-all"
                    >
                        <MessageCircle className="w-6 h-6" /> Hablar con un asesor
                    </a>
                </div>
            </div>
        </section>
    );
}
