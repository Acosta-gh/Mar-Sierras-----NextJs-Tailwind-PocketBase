'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const steps = [
    { id: 1, title: 'Datos personales' },
    { id: 2, title: 'Datos del negocio' }
];

export default function AsociateModal() {
    const { isAsociateModalOpen, closeAsociateModal } = useModal();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        nombreApellido: '',
        telefono: '',
        email: '',
        nombreNegocio: '',
        tieneLocal: 'si',
        localidad: '',
        inscripcion: 'Monotributista',
        sucursales: '1',
        antiguedad: 'Menos de 1 año',
        aceptaComunicaciones: false,
    });

    // Reset form when modal closes
    useEffect(() => {
        if (!isAsociateModalOpen) {
            const timer = setTimeout(() => {
                setStep(1);
                setIsSuccess(false);
                setIsSubmitting(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isAsociateModalOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeAsociateModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [closeAsociateModal]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        console.log('Form submitted:', formData);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    if (!isAsociateModalOpen && !isSuccess) return null;

    return (
        <AnimatePresence>
            {(isAsociateModalOpen || isSuccess) && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-0 md:p-4">
                    {/* Blur */}
                    <div className="fixed inset-0 backdrop-blur-sm" />

                    {/* Overlay (animado) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeAsociateModal}
                        className="fixed inset-0 bg-primary-dark/40"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="border-1 border-gray-200 relative w-full max-w-lg md:max-w-3xl lg:max-w-4xl bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[90dvh] md:min-h-[600px] md:h-auto "
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeAsociateModal}
                            className="absolute top-4 right-4 z-50 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-text-primary transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Left Side: Brand Content */}
                        <div className="hidden md:flex w-[40%] bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-10 text-white flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4 text-surface">
                                        Te queremos ayudar a crecer tu negocio
                                    </h2>
                                    <p className="text-accent/80 mb-8 font-light text-sm">
                                        Dejanos tus datos y nos comunicamos a la brevedad con vos.
                                    </p>
                                </motion.div>

                                <ul className="space-y-4">
                                    {[
                                        "Juntá fuerzas con más de 190 comercios",
                                        "Mejorá tus márgenes",
                                        "Comprá directo"
                                    ].map((text, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                                                <Check className="w-3.5 h-3.5 text-accent" />
                                            </div>
                                            <span className="text-sm font-medium">{text}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>


                        </div>

                        {/* Right Side: Form */}
                        <div className="w-full md:w-[60%] p-6 lg:p-10 bg-white flex flex-col pt-16 md:pt-10">
                            {!isSuccess ? (
                                <>
                                    {/* Step Indicator */}
                                    <div className="flex items-center justify-center mb-10">
                                        <div className="flex items-center w-full max-w-xs justify-between relative px-4">
                                            {/* Connecting Line */}
                                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 px-4" />
                                            <div
                                                className="absolute top-1/2 left-4 h-0.5 bg-primary transition-all duration-300 -translate-y-1/2"
                                                style={{ width: step === 1 ? '0%' : 'calc(100% - 32px)' }}
                                            />

                                            {steps.map((s) => (
                                                <div key={s.id} className="relative z-10 flex flex-col items-center">
                                                    <div
                                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s.id ? 'bg-primary text-white border-2 border-primary' : 'bg-white text-gray-400 border-2 border-gray-100'
                                                            }`}
                                                    >
                                                        {step > s.id ? <Check className="w-4 h-4" /> : s.id}
                                                    </div>
                                                    <span className={`absolute -bottom-6 text-[10px] whitespace-nowrap font-bold tracking-tight uppercase ${step >= s.id ? 'text-primary' : 'text-gray-400'
                                                        }`}>
                                                        {s.title}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Form Content */}
                                    <div className="flex-grow mt-4">
                                        <form onSubmit={step === 1 ? handleNext : handleSubmit} className="h-full flex flex-col">
                                            <AnimatePresence mode="wait">
                                                {step === 1 ? (
                                                    <motion.div
                                                        key="step1"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        className="space-y-4"
                                                    >
                                                        <div className="grid grid-cols-1 gap-4">
                                                            <div>
                                                                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">Nombre y Apellido</label>
                                                                <input
                                                                    required
                                                                    type="text"
                                                                    name="nombreApellido"
                                                                    value={formData.nombreApellido}
                                                                    onChange={handleChange}
                                                                    placeholder="Ej: Juan Pérez"
                                                                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                                                />
                                                            </div>
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                <div>
                                                                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">Teléfono</label>
                                                                    <input
                                                                        required
                                                                        type="tel"
                                                                        name="telefono"
                                                                        value={formData.telefono}
                                                                        onChange={handleChange}
                                                                        placeholder="Ej: 223..."
                                                                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">Email</label>
                                                                    <input
                                                                        required
                                                                        type="email"
                                                                        name="email"
                                                                        value={formData.email}
                                                                        onChange={handleChange}
                                                                        placeholder="email@ejemplo.com"
                                                                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">¿Cómo se llama tu negocio?</label>
                                                                <input
                                                                    required
                                                                    type="text"
                                                                    name="nombreNegocio"
                                                                    value={formData.nombreNegocio}
                                                                    onChange={handleChange}
                                                                    placeholder="Ej: Bazar Avenida"
                                                                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                                                />
                                                            </div>
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                <div>
                                                                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">¿Tenés local?</label>
                                                                    <div className="flex p-1 bg-gray-100 rounded-xl">
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => setFormData(prev => ({ ...prev, tieneLocal: 'si' }))}
                                                                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${formData.tieneLocal === 'si' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'
                                                                                }`}
                                                                        >Sí</button>
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => setFormData(prev => ({ ...prev, tieneLocal: 'no' }))}
                                                                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${formData.tieneLocal === 'no' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'
                                                                                }`}
                                                                        >No</button>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">Localidad</label>
                                                                    <input
                                                                        required
                                                                        type="text"
                                                                        name="localidad"
                                                                        value={formData.localidad}
                                                                        onChange={handleChange}
                                                                        placeholder="Ej: Mar del Plata"
                                                                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="pt-6">
                                                            <button
                                                                type="submit"
                                                                className="cursor-pointer w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
                                                            >
                                                                Siguiente
                                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="step2"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        className="space-y-4"
                                                    >
                                                        <div>
                                                            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">¿Cómo estás inscripto?</label>
                                                            <div className="relative">
                                                                <select
                                                                    name="inscripcion"
                                                                    value={formData.inscripcion}
                                                                    onChange={handleChange}
                                                                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none cursor-pointer"
                                                                >
                                                                    <option value="Monotributista">Monotributista</option>
                                                                    <option value="Responsable Inscripto">Responsable Inscripto</option>
                                                                    <option value="Consumidor Final">Consumidor Final</option>
                                                                    <option value="Otro">Otro</option>
                                                                </select>
                                                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">¿Cuántas sucursales tenés?</label>
                                                            <div className="relative">
                                                                <select
                                                                    name="sucursales"
                                                                    value={formData.sucursales}
                                                                    onChange={handleChange}
                                                                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none cursor-pointer"
                                                                >
                                                                    <option value="1">1</option>
                                                                    <option value="2-5">2-5</option>
                                                                    <option value="6-10">6-10</option>
                                                                    <option value="Más de 10">Más de 10</option>
                                                                </select>
                                                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 px-1">¿Cuál es tu antigüedad en el rubro?</label>
                                                            <div className="relative">
                                                                <select
                                                                    name="antiguedad"
                                                                    value={formData.antiguedad}
                                                                    onChange={handleChange}
                                                                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none cursor-pointer"
                                                                >
                                                                    <option value="Menos de 1 año">Menos de 1 año</option>
                                                                    <option value="1-3 años">1-3 años</option>
                                                                    <option value="3-5 años">3-5 años</option>
                                                                    <option value="Más de 5 años">Más de 5 años</option>
                                                                </select>
                                                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="pt-2">
                                                            <label className="flex items-start gap-4 cursor-pointer group">
                                                                <div className="mt-0.5">
                                                                    <input
                                                                        required
                                                                        type="checkbox"
                                                                        name="aceptaComunicaciones"
                                                                        checked={formData.aceptaComunicaciones}
                                                                        onChange={handleChange}
                                                                        className="sr-only"
                                                                    />
                                                                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${formData.aceptaComunicaciones ? 'bg-primary border-primary' : 'bg-gray-100 border-gray-200 group-hover:border-primary'
                                                                        }`}>
                                                                        {formData.aceptaComunicaciones && <Check className="w-3.5 h-3.5 text-white" />}
                                                                    </div>
                                                                </div>
                                                                <span className="text-xs text-gray-500 leading-tight">
                                                                    Al hacer click acepto recibir comunicaciones comerciales de Mar & Sierras LTDA.
                                                                </span>
                                                            </label>
                                                        </div>

                                                        <div className="pt-6 grid grid-cols-2 gap-4">
                                                            <button
                                                                type="button"
                                                                onClick={handleBack}
                                                                className="bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                                                            >
                                                                <ArrowLeft className="w-4 h-4" />
                                                                Volver
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                disabled={isSubmitting}
                                                                className="bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                                            >
                                                                {isSubmitting ? (
                                                                    <div className="cursor-pointer w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                                ) : (
                                                                    <>Enviar</>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </form>
                                    </div>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex-grow flex flex-col items-center justify-center text-center py-10"
                                >
                                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.2 }}
                                        >
                                            <Check className="w-10 h-10 text-primary" strokeWidth={3} />
                                        </motion.div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-3">¡Gracias!</h3>
                                    <p className="text-gray-500 max-w-xs mx-auto mb-8 font-medium">
                                        Nos comunicamos pronto.
                                    </p>
                                    <button
                                        onClick={closeAsociateModal}
                                        className="px-10 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                                    >
                                        Cerrar
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
