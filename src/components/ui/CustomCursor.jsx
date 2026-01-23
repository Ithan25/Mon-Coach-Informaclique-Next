'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Detect if device has a fine pointer (mouse)
        const hasMouse = window.matchMedia('(pointer: fine)').matches
        if (!hasMouse) return

        setIsVisible(true)

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseEnter = (e) => {
            const target = e.target
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true)
            }
        }

        const handleMouseLeave = () => {
            setIsHovering(false)
        }

        window.addEventListener('mousemove', updateMousePosition)
        document.addEventListener('mouseover', handleMouseEnter)
        document.addEventListener('mouseout', handleMouseLeave)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            document.removeEventListener('mouseover', handleMouseEnter)
            document.removeEventListener('mouseout', handleMouseLeave)
        }
    }, [])

    if (!isVisible) return null

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
                style={{ backgroundColor: '#FFD93D' }}
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 0.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />
            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 rounded-full pointer-events-none z-[9998]"
                style={{ borderColor: '#FFD93D' }}
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.8 : 0.5,
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.8,
                }}
            />
        </>
    )
}
