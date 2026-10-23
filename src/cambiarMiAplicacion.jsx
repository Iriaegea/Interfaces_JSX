






export default function CambiarMiAplicacion({textoDisponibilidad, gratuito, nombrePista, textoBotonReservar, textoLugar}){
    return(
        <>
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition">
                            <div className="flex justify-between items-start mb-2">
                                <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> {textoDisponibilidad}
                                </span>
                                <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">{gratuito}</span>
                            </div>
                            <h3 className= "font-bold text-gray-900 text-sm">{nombrePista}</h3>
                            <p className="text-xs text-gray-500 mt-1 mb-3 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="navigation" aria-hidden="true" class="lucide lucide-navigation w-3 h-3"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>{textoLugar}
                            </p>
                            <button onclick="openBookingForm('Pista Polideportiva Municipal Centro', 'Baloncesto / Fútbol Sala', 'Gratis')" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-4 rounded-lg transition shadow-sm focus:ring-2 focus:ring-emerald-400">
                                {textoBotonReservar}
                            </button>
                        </div>
        </>
    )
}




