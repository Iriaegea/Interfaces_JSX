






export default function Tarjeta({contido}){
    return(
        <>
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition">
                            <div className="flex justify-between items-start mb-2">
                                <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> {contido.textoDisponibilidad}
                                </span>
                                <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">{contido.gratuito}</span>
                            </div>
                            <h3 className= "font-bold text-gray-900 text-sm">{contido.nombrePista}</h3>
                            <p className="text-xs text-gray-500 mt-1 mb-3 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" datalucide="navigation" aria-hidden="true" className="lucide lucideNavigation w-3 h-3"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>{contido.textoLugar}
                            </p>
                            <button onClick="openBookingForm('Pista Polideportiva Municipal Centro', 'Baloncesto / Fútbol Sala', 'Gratis')" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-4 rounded-lg transition shadow-sm focus:ring-2 focus:ring-emerald-400">
                                {contido.textoBotonReservar}
                            </button>
                        </div>
        </>
    )
}




