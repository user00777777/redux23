import React, { useState, useEffect } from 'react'

const formulas = [
    { name: "Закон Ома", expression: "I = U / R" },
    { name: "Мощность", expression: "P = U · I" },
    { name: "Напряжение", expression: "U = I · R" },
    { name: "Мощность (через R)", expression: "P = I² · R" },
    { name: "Работа", expression: "A = P · t" }
];

function Duty() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade out
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % formulas.length);
                setFade(true); // Start fade in
            }, 500); // Wait for fade out to finish
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

	return (
		<div style={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            minHeight: '100px'
        }}>
            <div style={{
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease',
                opacity: fade ? 1 : 0,
                transform: fade ? 'scale(1)' : 'scale(0.95)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <div style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                }}>
                    {formulas[currentIndex].name}
                </div>
                <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: 'var(--accent-cyan)',
                    textShadow: '0 0 15px rgba(6, 182, 212, 0.4)',
                    fontFamily: 'monospace'
                }}>
                    {formulas[currentIndex].expression}
                </div>
            </div>
		</div>
	)
}
export default Duty



// import React, { useEffect,useState } from 'react';
// import getDuty from './_dutyWorkers';
// import s from './duty.module.css';

// function Duty({ duty }) {
//   // Встроенный компонент для определения бренда или типа устройствdiv
//   console.log(duty);
  
//   <getDuty={duty} >
  

// }

// export default Duty;

