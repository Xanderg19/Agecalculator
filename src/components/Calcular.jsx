import React, { useState } from 'react';
import { differenceInYears, differenceInMonths, differenceInDays, parseISO } from 'date-fns';


const Calcular = () => {
    const [fecha, setFecha] = useState(''); // Estado para almacenar el valor del input
    const [resultado, setResultado] = useState(null); // Estado para almacenar el resultado

    const handleFechas = (e) => {
        e.preventDefault();
        const date1 = parseISO(fecha);
        const date2 = new Date(); // Fecha actual

        const añosDiferencia = differenceInYears(date2, date1);
        const mesesDiferencia = differenceInMonths(date2, date1);
        const díasDiferencia = differenceInDays(date2, date1);

        // Almacenar el resultado en el estado
        setResultado({
            años: añosDiferencia,
            meses: mesesDiferencia,
            días: díasDiferencia,
        });
    }

    return (
        <div>  
            <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Calculadora de Edad</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"> Realice un seguimiento del progreso de su vida: Edad en Años, Meses, Dias,</p>
                <form className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4' onSubmit={handleFechas}>
                    {/* Vincular el valor del input al estado 'fecha' */}
                    <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'  type="submit" value="Calcular Diferencia" />
                </form>
                {resultado && (
                    <h4 className=' mt-10 text-2xl font-bold dark:text-white'>
                        Tienes {resultado.años} años, {resultado.meses} meses, y  {resultado.días} días
                    </h4>
                
            )}
                </div>
               
        </section>
          
        </div>
    );
}

export default Calcular;
