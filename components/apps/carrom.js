import React, { useState, useEffect } from 'react'

export default function CarromPool() {

    const [displayModal, setDisplayModal] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayModal(false);
        }, 5000); // This will hide the modal after 5 seconds.

        return () => clearTimeout(timer); // This clears the timer if the component is unmounted before the timeout.
    }, []);

    return (
        <div className="h-full w-full bg-ub-cool-grey">
            {displayModal && (
                <div className="modal fixed inset-0 flex items-center justify-center z-50">
                <div className="modal-content bg-white rounded-lg shadow-lg border border-black p-5 text-center">
                    <p className="mb-4">Please enable third-party cookies to play the game.</p>
                    <button onClick={() => setDisplayModal(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Okay</button>
                </div>
            </div>
            )}
            <iframe src="https://cdn.htmlgames.com/CarromPool/index.html?npa=1" frameBorder="0" title="Carrom Game" className="h-full w-full"></iframe>
        </div>
    ) 
}

export const displayCarromPool = () => <CarromPool />;
