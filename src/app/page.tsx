"use client"

import { useState, useEffect } from "react"

export default function Home() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer) // Cleanup interval
    }, [])

    function calculateTimeLeft() {
        // Set target date to February 2, 2025, 2:30 PM UTC
        const targetDate = new Date("2025-02-02T14:30:00Z")
        const now = new Date()
        const difference = targetDate.getTime() - now.getTime()

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }
        return timeLeft
    }

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source
                    src="/Background.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Countdown Content */}
            <div className="flex flex-col items-center justify-center h-full text-white text-center bg-black bg-opacity-50">
                <h1 className="text-6xl font-bold mb-4">Coming Soon</h1>
                <p className="text-lg mb-8">Launching at 2:30 PM UTC, February 2, 2025!</p>

                <div className="flex gap-4 text-4xl font-semibold">
                    <div>
                        <p>{timeLeft.days}</p>
                        <span className="text-sm">Days</span>
                    </div>
                    <div>
                        <p>{timeLeft.hours}</p>
                        <span className="text-sm">Hours</span>
                    </div>
                    <div>
                        <p>{timeLeft.minutes}</p>
                        <span className="text-sm">Minutes</span>
                    </div>
                    <div>
                        <p>{timeLeft.seconds}</p>
                        <span className="text-sm">Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
