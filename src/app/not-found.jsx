'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
            <div className="max-w-2xl w-full text-center space-y-8">
                {/* Visual element */}
                <div className="relative">
                    <span className="text-[12rem] md:text-[16rem] font-bold text-[#092f1d]/5 font-display leading-none select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex flex-col items-center justify-center mt-8">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#092f1d] font-display">
                            Página no encontrada
                        </h1>
                    </div>
                </div>

                <div className="max-w-md mx-auto space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed font-sans">
                        Lo sentimos, el enlace que seguiste puede estar roto o la página puede haber sido eliminada.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-[#29563F] hover:bg-[#092f1d] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Home className="w-5 h-5" />
                            Volver al Inicio
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-[#092f1d] bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all cursor-pointer"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Regresar
                        </button>
                    </div>
                </div>

                {/* Decorative horizontal rule */}
                <div className="pt-12">
                    <div className="w-20 h-1 bg-[#c9a84c] mx-auto rounded-full opacity-30" />
                </div>
            </div>
        </div>
    );
}
