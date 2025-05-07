"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useMousePosition } from "@/hooks/use-mouse-position"

// Define the card types
const cards = [
  {
    id: "behance",
    type: "social",
    content: (
      <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-800/70 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border border-slate-100/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:bg-white/95 dark:hover:bg-slate-800/95">
        <div className="w-16 h-16 bg-gradient-to-br from-[#0057ff] to-[#0040b3] rounded-xl flex items-center justify-center text-white font-bold mb-4 shadow-lg text-xl transform transition-transform hover:scale-110 hover:rotate-3">
          Be
        </div>
        <span className="text-base font-semibold text-slate-700 dark:text-slate-200">Behance</span>
        <button className="mt-4 bg-gradient-to-r from-[#0057ff] to-[#0040b3] text-white text-sm px-6 py-2 rounded-full font-medium hover:from-[#0040b3] hover:to-[#0057ff] transition-all hover:scale-105 hover:shadow-lg">Follow 5.5k</button>
      </div>
    ),
    width: 240,
    height: 220,
  },
  {
    id: "linkedin",
    type: "social",
    content: (
      <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-800/70 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border border-slate-100/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:bg-white/95 dark:hover:bg-slate-800/95">
        <div className="w-16 h-16 bg-gradient-to-br from-[#0a66c2] to-[#004182] rounded-xl flex items-center justify-center text-white font-bold mb-4 shadow-lg text-xl transform transition-transform hover:scale-110 hover:rotate-3">
          in
        </div>
        <span className="text-base font-semibold text-slate-700 dark:text-slate-200">LinkedIn</span>
        <button className="mt-4 border-2 border-[#0a66c2] text-[#0a66c2] dark:border-blue-400 dark:text-blue-400 text-sm px-6 py-2 rounded-full font-medium hover:bg-[#0a66c2] hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-all hover:scale-105 hover:shadow-lg">Connect</button>
      </div>
    ),
    width: 240,
    height: 220,
  },
  {
    id: "dribbble",
    type: "social",
    content: (
      <div className="flex flex-col items-center justify-between p-8 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-800/70 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border border-slate-100/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:bg-white/95 dark:hover:bg-slate-800/95 h-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#ea4c89] to-[#d81b60] rounded-xl flex items-center justify-center text-white font-bold mr-4 shadow-lg transform transition-transform hover:scale-110 hover:rotate-3">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <span className="text-base font-semibold text-slate-700 dark:text-slate-200">Dribbble</span>
          </div>
          <button className="bg-gradient-to-r from-[#ea4c89] to-[#d81b60] text-white text-sm px-6 py-2 rounded-full font-medium hover:from-[#d81b60] hover:to-[#ea4c89] transition-all hover:scale-105 hover:shadow-lg">Hire Me</button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-full h-24 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-slate-700 dark:to-slate-600 rounded-xl shadow-sm flex items-center justify-center transition-all hover:scale-105 hover:shadow-md hover:from-pink-100 hover:to-pink-200 dark:hover:from-slate-600 dark:hover:to-slate-500"
            >
              {i % 2 === 0 ? (
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#ea4c89" strokeWidth="2" fill="none" className="transform transition-transform hover:scale-110">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#ea4c89" strokeWidth="2" fill="none" className="transform transition-transform hover:scale-110">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    width: 360,
    height: 320,
  },
  {
    id: "ios-kit",
    type: "design",
    content: (
      <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-800/70 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border border-slate-100/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:bg-white/95 dark:hover:bg-slate-800/95">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold mb-4 shadow-lg transform transition-transform hover:scale-110 hover:rotate-3">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <circle cx="15.5" cy="8.5" r="1.5" />
            <circle cx="15.5" cy="15.5" r="1.5" />
            <circle cx="8.5" cy="15.5" r="1.5" />
          </svg>
        </div>
        <span className="text-base font-semibold text-slate-700 dark:text-slate-200">iOS UI Kit</span>
        <div className="flex mt-4 space-x-3">
          <button className="flex items-center border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm px-4 py-2 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-all hover:scale-105 hover:shadow-lg">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="mr-2 transform transition-transform hover:scale-110"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            2.3k
          </button>
          <button className="flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm px-4 py-2 rounded-full font-medium hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all hover:scale-105 hover:shadow-lg">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="mr-2 transform transition-transform hover:scale-110"
            >
              <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            3.4k
          </button>
        </div>
      </div>
    ),
    width: 280,
    height: 240,
  },
  {
    id: "instagram",
    type: "social",
    content: (
      <div className="flex flex-col items-center justify-between p-8 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-800/70 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border border-slate-100/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:bg-white/95 dark:hover:bg-slate-800/95 h-full">
        <div className="flex items-center">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl flex items-center justify-center text-white font-bold mr-4 shadow-lg transform transition-transform hover:scale-110 hover:rotate-3">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="white" strokeWidth="2" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1" fill="white" stroke="none" />
            </svg>
          </div>
          <span className="text-base font-semibold text-slate-700 dark:text-slate-200">Instagram</span>
        </div>
        <div className="grid grid-cols-2 gap-4 my-6 w-full">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full h-32 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-md">
              <div className="w-full h-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 dark:from-pink-500/20 dark:to-purple-500/20 transform transition-transform hover:scale-110" />
            </div>
          ))}
        </div>
        <button className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-sm px-6 py-3 rounded-full font-medium hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 transition-all hover:scale-105 hover:shadow-lg">Follow 1.2k</button>
      </div>
    ),
    width: 280,
    height: 320,
  },
  {
    id: "twitter",
    type: "social",
    content: (
      <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-800/70 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border border-slate-100/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:bg-white/95 dark:hover:bg-slate-800/95">
        <div className="w-16 h-16 bg-gradient-to-br from-[#1DA1F2] to-[#0d8ecf] rounded-xl flex items-center justify-center text-white font-bold mb-4 shadow-lg transform transition-transform hover:scale-110 hover:rotate-3">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </div>
        <span className="text-base font-semibold text-slate-700 dark:text-slate-200">Twitter</span>
        <button className="mt-4 bg-gradient-to-r from-[#1DA1F2] to-[#0d8ecf] text-white text-sm px-6 py-2 rounded-full font-medium hover:from-[#0d8ecf] hover:to-[#1DA1F2] transition-all hover:scale-105 hover:shadow-lg">Follow 12k</button>
      </div>
    ),
    width: 240,
    height: 220,
  },
  {
    id: "github",
    type: "social",
    content: (
      <div className="flex flex-col items-center justify-between p-8 bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-800/70 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border border-slate-100/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:bg-white/95 dark:hover:bg-slate-800/95 h-full">
        <div className="flex items-center">
          <div className="w-14 h-14 bg-gradient-to-br from-black to-slate-800 dark:from-white dark:to-slate-200 rounded-xl flex items-center justify-center text-white dark:text-black font-bold mr-4 shadow-lg transform transition-transform hover:scale-110 hover:rotate-3">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </div>
          <span className="text-base font-semibold text-slate-700 dark:text-slate-200">Github</span>
        </div>
        <div className="grid grid-cols-8 gap-1.5 my-6 w-full">
          {Array(64)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={`w-full h-4 rounded-sm transition-all hover:scale-110 ${
                  Math.random() > 0.7
                    ? "bg-gradient-to-br from-green-500 to-green-400 dark:from-green-400 dark:to-green-500"
                    : Math.random() > 0.8
                      ? "bg-gradient-to-br from-green-400 to-green-300 dark:from-green-500 dark:to-green-400"
                      : Math.random() > 0.9
                        ? "bg-gradient-to-br from-green-300 to-green-200 dark:from-green-600 dark:to-green-500"
                        : "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600"
                }`}
              />
            ))}
        </div>
        <button className="w-full bg-gradient-to-r from-black to-slate-800 dark:from-white dark:to-slate-200 text-white dark:text-black text-sm px-6 py-3 rounded-full font-medium hover:from-slate-800 hover:to-black dark:hover:from-slate-200 dark:hover:to-white transition-all hover:scale-105 hover:shadow-lg">View Profile</button>
      </div>
    ),
    width: 280,
    height: 320,
  },
]

// Physics constants
const REPULSION_STRENGTH = 0.15
const ATTRACTION_STRENGTH = 0.01
const DAMPING = 0.8
const MOUSE_INFLUENCE = 0.2
const COLLISION_DISTANCE = 20

interface CardState {
  id: string
  x: number
  y: number
  vx: number
  vy: number
  width: number
  height: number
  targetX: number
  targetY: number
  zIndex: number
}

export default function FloatingGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cardStates, setCardStates] = useState<CardState[]>([])
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const mousePosition = useMousePosition()
  const animationFrameRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)

  // Initialize card positions
  useEffect(() => {
    if (!containerRef.current) return

    const containerWidth = containerRef.current.clientWidth
    const containerHeight = containerRef.current.clientHeight

    // Create initial card states with random positions
    const initialCardStates = cards.map((card, index) => {
      // Calculate random positions that ensure cards are fully visible
      const x = Math.random() * (containerWidth - card.width)
      const y = Math.random() * (containerHeight - card.height)

      return {
        id: card.id,
        x,
        y,
        vx: 0,
        vy: 0,
        width: card.width,
        height: card.height,
        targetX: x,
        targetY: y,
        zIndex: index,
      }
    })

    setCardStates(initialCardStates)
  }, [])

  // Animation loop
  useEffect(() => {
    if (cardStates.length === 0) return

    const animate = (time: number) => {
      const newCardStates = cardStates.map((card) => {
        let { x, y, vx, vy, targetX, targetY } = card

        // Add slight random movement
        if (!hoveredCard) {
          const noise = Math.sin(time * 0.001 + parseInt(card.id, 36)) * 0.5
          targetX += noise
          targetY += noise
        }

        // Smooth spring animation
        const dx = targetX - x
        const dy = targetY - y
        const springStrength = hoveredCard ? 0.2 : 0.1
        const dampening = 0.8

        // Apply spring physics
        vx += dx * springStrength
        vy += dy * springStrength
        vx *= dampening
        vy *= dampening

        // Update position
        x += vx
        y += vy

        // Add boundary constraints
        const margin = 20
        const maxX = containerRef.current ? containerRef.current.offsetWidth - card.width - margin : window.innerWidth - card.width - margin
        const maxY = containerRef.current ? containerRef.current.offsetHeight - card.height - margin : window.innerHeight - card.height - margin

        if (x < margin) {
          x = margin
          vx *= -0.5
        }
        if (x > maxX) {
          x = maxX
          vx *= -0.5
        }
        if (y < margin) {
          y = margin
          vy *= -0.5
        }
        if (y > maxY) {
          y = maxY
          vy *= -0.5
        }

        return {
          ...card,
          x,
          y,
          vx,
          vy,
          targetX,
          targetY,
        }
      })

      setCardStates(newCardStates)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [cardStates.length, hoveredCard])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.clientWidth
      const containerHeight = containerRef.current.clientHeight

      setCardStates((prevStates) => {
        return prevStates.map((card) => {
          // Adjust positions to stay within bounds
          const newX = Math.min(card.x, containerWidth - card.width)
          const newY = Math.min(card.y, containerHeight - card.height)

          return {
            ...card,
            x: newX,
            y: newY,
            targetX: newX,
            targetY: newY,
          }
        })
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle card hover
  const handleCardHover = (id: string) => {
    setHoveredCard(id)
    const newCardStates = cardStates.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          zIndex: 10,
        }
      }
      return {
        ...card,
        zIndex: 1,
      }
    })
    setCardStates(newCardStates)
  }

  const handleCardLeave = () => {
    setHoveredCard(null)
    const newCardStates = cardStates.map((card) => ({
      ...card,
      zIndex: 1,
    }))
    setCardStates(newCardStates)
  }

  // Handle card drag
  const handleCardDrag = (id: string, x: number, y: number) => {
    setCardStates((prevStates) => {
      return prevStates.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            x,
            y,
            targetX: x,
            targetY: y,
            vx: 0,
            vy: 0,
          }
        }
        return card
      })
    })
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative"
    >
      {cardStates.map((cardState) => {
        const cardData = cards.find((c) => c.id === cardState.id)
        if (!cardData) return null

        return (
          <motion.div
            key={cardState.id}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: cardState.width,
              height: cardState.height,
              transform: `translate3d(${cardState.x}px, ${cardState.y}px, 0)`,
              zIndex: cardState.zIndex,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: hoveredCard && hoveredCard !== cardState.id ? "brightness(0.7)" : "brightness(1)",
            }}
            transition={{
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1],
              scale: {
                type: "spring",
                damping: 20,
                stiffness: 300,
              }
            }}
            whileHover={{
              scale: 1.02,
              filter: "brightness(1)",
              transition: {
                duration: 0.2,
                ease: "easeOut"
              }
            }}
            drag
            dragConstraints={containerRef}
            dragElastic={0.1}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 20,
              power: 0.8
            }}
            onDragStart={() => handleCardHover(cardState.id)}
            onDragEnd={handleCardLeave}
            onHoverStart={() => handleCardHover(cardState.id)}
            onHoverEnd={handleCardLeave}
          >
            {cardData.content}
          </motion.div>
        )
      })}
    </div>
  )
}
