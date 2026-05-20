import React, { useState } from 'react';

const AngryAl = () => {
    const [isExploding, setIsExploding] = useState(false);
    const [particles, setParticles] = useState([]);
    const [shouts, setShouts] = useState([]);
    const [text, setText] = useState({ title: "EAT\nMY\nSHIT!", button: "FUCK OFF." });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Handle the pupil tracking
    const handleMouseMove = (e) => {
        // Calculate mouse position relative to the center of the screen
        const x = (e.clientX / window.innerWidth - 0.5) * 30; // Max 15px movement each way
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        setMousePos({ x, y });
    };

    // The core chaotic action
    const triggerChaos = () => {
        // 1. Trigger dramatic shake & change text
        setIsExploding(true);
        setText({ title: "EAT\nMY\nSHIT!", button: "FUCK OFF." });

        setTimeout(() => {
            setIsExploding(false);
            setText({ title: "GO\nFUCK\nYOURSELF", button: "CLICK ME, BITCH." });
        }, 1500);

        // 2. Generate exploding particles
        const newParticles = Array.from({ length: 60 }).map((_, i) => {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 100;
            return {
                id: Date.now() + i,
                size: Math.random() * 20 + 10,
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                duration: Math.random() * 0.5 + 0.5,
                delay: Math.random() * 0.1
            };
        });
        setParticles(newParticles);
        setTimeout(() => setParticles([]), 1100);

        // 3. Generate random shouts
        const shoutWords = ["BLAM!", "POW!", "KABOOM!", "POP!", "RAGE!"];
        const newShouts = Array.from({ length: 3 }).map((_, i) => ({
            id: Date.now() + i + 100,
            word: shoutWords[Math.floor(Math.random() * shoutWords.length)],
            left: Math.random() * 80 + 10,
            top: Math.random() * 50 + 10,
            delay: Math.random() * 0.2
        }));
        setShouts(newShouts);
        setTimeout(() => setShouts([]), 1000);
    };

    return (
        <div
            className="angry-wrapper"
            onMouseMove={handleMouseMove}
        >
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

          .angry-wrapper {
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            background-color: #1a0000;
            font-family: 'Anton', 'Impact', sans-serif;
            cursor: none;
            position: relative;
          }

          .angry-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            z-index: 2;
          }

          .popcorn-body {
            width: 250px;
            height: 250px;
            background-color: #ff3333;
            border-radius: 50% 60% 45% 70%;
            box-shadow: 
                0 0 100px 30px #ff0000,
                inset -20px -30px 60px #800000;
            border: 5px solid #fff;
            animation: body-shake 0.1s infinite alternate;
            transform-origin: center bottom;
            position: relative;
          }

          .popcorn-body.exploding {
             animation: body-shake 0.05s infinite alternate; /* Faster shake */
          }

          .popcorn-body::after {
            content: "🤬";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 130px;
            opacity: 0.2;
          }

          .face {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            top: 40px;
            z-index: 10;
          }

          .eye {
            width: 70px;
            height: 70px;
            background: #fff;
            border-radius: 50%;
            position: relative;
            animation: eye-vibrate 0.05s infinite;
            border: 4px solid #000;
            overflow: hidden;
          }

          .pupil {
            width: 25px;
            height: 25px;
            background: #000;
            border-radius: 50%;
            position: absolute;
            top: 20px;
            left: 20px;
            border: 3px solid #fff;
            transition: transform 0.1s ease-out;
          }

          .angry-text {
            color: #fff;
            text-transform: uppercase;
            text-align: center;
            font-size: 80px;
            line-height: 0.9;
            letter-spacing: -2px;
            -webkit-text-stroke: 4px #ff0000;
            animation: text-pulse 0.4s infinite;
            user-select: none;
            white-space: pre-line;
          }

          .action-btn {
            padding: 20px 50px;
            font-size: 30px;
            background-color: #fff;
            color: #ff0000;
            border: 5px solid #ff0000;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.1s;
            text-transform: uppercase;
            font-family: inherit;
            outline: none;
            box-shadow: 0 10px #800000;
          }

          .action-btn:active {
            box-shadow: 0 0px #800000;
            transform: translateY(10px);
            background-color: #ffeaea;
          }

          .particle {
            position: absolute;
            background: radial-gradient(circle, #fff 20%, #ff3333 80%);
            border: 2px solid #fff;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            z-index: 1;
          }

          .shout {
            position: absolute;
            color: white;
            font-size: 60px;
            -webkit-text-stroke: 2px black;
            font-weight: bold;
            pointer-events: none;
            opacity: 0;
            z-index: 10;
          }

          @keyframes body-shake {
            0% { transform: scale(1) translate(1px, 1px) rotate(0deg); }
            100% { transform: scale(1.03) translate(-1px, -2px) rotate(1deg); }
          }

          @keyframes eye-vibrate {
            0% { transform: translate(1px, -1px); }
            100% { transform: translate(-1px, 2px); }
          }

          @keyframes text-pulse {
            0%, 100% { transform: scale(1); text-shadow: 0 0 10px #ff0000; }
            50% { transform: scale(1.1); text-shadow: 0 0 40px #ff0000; }
          }

          @keyframes pop-effect {
            0% { 
                transform: translate(0, 0) scale(0) rotate(0deg);
                opacity: 1;
            }
            100% { 
                transform: translate(var(--x), var(--y)) scale(1.5) rotate(720deg);
                opacity: 0;
            }
          }

          @keyframes shout-fade {
            0% { opacity: 0; transform: translateY(0) scale(0.5) rotate(-10deg); }
            10% { opacity: 1; transform: translateY(-20px) scale(1.2) rotate(5deg); }
            100% { opacity: 0; transform: translateY(-100px) scale(1) rotate(15deg); }
          }
        `}
            </style>

            <div className="angry-container">
                {/* Popcorn Character */}
                <div className={`popcorn-body ${isExploding ? 'exploding' : ''}`}>
                    <div className="face">
                        <div className="eye">
                            <div
                                className="pupil"
                                style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
                            />
                        </div>
                        <div className="eye">
                            <div
                                className="pupil"
                                style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Animated Text */}
                <h1 className="angry-text">{text.title}</h1>

                {/* Action Button */}
                <button className="action-btn" onClick={triggerChaos}>
                    {text.button}
                </button>
            </div>

            {/* Render Explosion Particles */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: '50%',
                        top: '40%', // Roughly the center of the character
                        '--x': `${p.x}px`,
                        '--y': `${p.y}px`,
                        animation: `pop-effect ${p.duration}s ${p.delay}s ease-out forwards`
                    }}
                />
            ))}

            {/* Render Comic Shouts */}
            {shouts.map((s) => (
                <div
                    key={s.id}
                    className="shout"
                    style={{
                        left: `${s.left}%`,
                        top: `${s.top}%`,
                        animation: `shout-fade 0.8s ${s.delay}s ease-out forwards`
                    }}
                >
                    {s.word}
                </div>
            ))}
        </div>
    );
};

export default AngryAl;