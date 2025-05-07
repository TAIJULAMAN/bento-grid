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
      <div className="group flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/95 via-white/90 to-white/80 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-800/80 rounded-3xl shadow-lg backdrop-blur-md border border-slate-100/50 dark:border-slate-700/50 transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:bg-white/100 dark:hover:bg-slate-800/100">
        <div className="w-16 h-16 bg-gradient-to-br from-[#0057ff] to-[#0040b3] rounded-2xl flex items-center justify-center text-white font-bold mb-5 shadow-lg text-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-blue-500/25">
          Be
        </div>
        <span className="text-base font-semibold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">Behance</span>
        <button className="mt-5 bg-gradient-to-r from-[#0057ff] to-[#0040b3] text-white text-sm px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:from-[#0040b3] hover:to-[#0057ff] hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95">Follow 5.5k</button>
      </div>
    ),
    width: 240,
    height: 220,
  },
  {
    id: "linkedin",
    type: "social",
    content: (
      <div className="group flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/95 via-white/90 to-white/80 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-800/80 rounded-3xl shadow-lg backdrop-blur-md border border-slate-100/50 dark:border-slate-700/50 transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:bg-white/100 dark:hover:bg-slate-800/100">
        <div className="w-16 h-16 bg-gradient-to-br from-[#0a66c2] to-[#004182] rounded-2xl flex items-center justify-center text-white font-bold mb-5 shadow-lg text-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-blue-500/25">
          in
        </div>
        <span className="text-base font-semibold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">LinkedIn</span>
        <button className="mt-5 border-2 border-[#0a66c2] text-[#0a66c2] dark:border-blue-400 dark:text-blue-400 text-sm px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-[#0a66c2] hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95">Connect</button>
      </div>
    ),
    width: 240,
    height: 220,
  },
  {
    id: "dribbble",
    type: "social",
    content: (
      <div className="group flex flex-col items-center justify-between p-8 bg-gradient-to-br from-white/95 via-white/90 to-white/80 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-800/80 rounded-3xl shadow-lg backdrop-blur-md border border-slate-100/50 dark:border-slate-700/50 transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:bg-white/100 dark:hover:bg-slate-800/100 h-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#ea4c89] to-[#d81b60] rounded-2xl flex items-center justify-center text-white font-bold mr-4 shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-pink-500/25">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" className="transition-transform duration-300 group-hover:scale-110">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <span className="text-base font-semibold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">Dribbble</span>
          </div>
          <button className="bg-gradient-to-r from-[#ea4c89] to-[#d81b60] text-white text-sm px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:from-[#d81b60] hover:to-[#ea4c89] hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 active:scale-95">Hire Me</button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-full h-24 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md hover:from-pink-100 hover:to-pink-200 dark:hover:from-slate-600 dark:hover:to-slate-500 group"
            >
              {i % 2 === 0 ? (
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#ea4c89" strokeWidth="2" fill="none" className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#ea4c89" strokeWidth="2" fill="none" className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
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
      <div className="group flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/95 via-white/90 to-white/80 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-800/80 rounded-3xl shadow-lg backdrop-blur-md border border-slate-100/50 dark:border-slate-700/50 transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:bg-white/100 dark:hover:bg-slate-800/100">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold mb-5 shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-blue-500/25">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <circle cx="15.5" cy="8.5" r="1.5" />
            <circle cx="15.5" cy="15.5" r="1.5" />
            <circle cx="8.5" cy="15.5" r="1.5" />
          </svg>
        </div>
        <span className="text-base font-semibold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">iOS UI Kit</span>
        <div className="flex mt-5 space-x-3">
          <button className="flex items-center border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="mr-2 transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            2.3k
          </button>
          <button className="flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm px-4 py-2 rounded-full font-medium transition-all duration-300 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="mr-2 transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-8l-4-4m0 0L8 8m4 4v12" />
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
      <div className="group flex flex-col items-center justify-between p-8 bg-gradient-to-br from-white/95 via-white/90 to-white/80 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-800/80 rounded-3xl shadow-lg backdrop-blur-md border border-slate-100/50 dark:border-slate-700/50 transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:bg-white/100 dark:hover:bg-slate-800/100 h-full">
        <div className="flex items-center">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white font-bold mr-4 shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-pink-500/25">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="white" strokeWidth="2" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1" fill="white" stroke="none" />
            </svg>
          </div>
          <span className="text-base font-semibold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">Instagram</span>
        </div>
        <div className="grid grid-cols-2 gap-4 my-6 w-full">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full h-32 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-md group">
              <div className="w-full h-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 dark:from-pink-500/20 dark:to-purple-500/20 transform transition-transform duration-300 group-hover:scale-110" />
            </div>
          ))}
        </div>
        <button className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-sm px-6 py-3 rounded-full font-medium transition-all duration-300 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 active:scale-95">Follow 1.2k</button>
      </div>
    ),
    width: 280,
    height: 320,
  },
  {
    id: "twitter",
    type: "social",
    content: (
      <div className="group flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/95 via-white/90 to-white/80 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-800/80 rounded-3xl shadow-lg backdrop-blur-md border border-slate-100/50 dark:border-slate-700/50 transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:bg-white/100 dark:hover:bg-slate-800/100">
        <div className="w-16 h-16 bg-gradient-to-br from-[#1DA1F2] to-[#0d8ecf] rounded-2xl flex items-center justify-center text-white font-bold mb-5 shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-blue-500/25">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </div>
        <span className="text-base font-semibold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">Twitter</span>
        <button className="mt-5 bg-gradient-to-r from-[#1DA1F2] to-[#0d8ecf] text-white text-sm px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:from-[#0d8ecf] hover:to-[#1DA1F2] hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95">Follow 12k</button>
      </div>
    ),
    width: 240,
    height: 220,
  }
]

// Physics constants
const REPULSION_STRENGTH = 0.15
const ATTRACTION_STRENGTH = 0.005
const DAMPING = 0.92
const MOUSE_INFLUENCE = 0.15
const COLLISION_DISTANCE = 150
const ROTATION_FACTOR = 0.08
const FLOAT_AMPLITUDE = 0.3
const VELOCITY_LIMIT = 5

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
  rotation: number
  rotationVelocity: number
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
    const padding = COLLISION_DISTANCE

    const initialCardStates = cards.map((card, index) => {
      const cols = Math.ceil(Math.sqrt(cards.length))
      const col = index % cols
      const row = Math.floor(index / cols)

      const gridX = (containerWidth / cols) * col + padding
      const gridY = (containerHeight / cols) * row + padding

      const x = gridX + (Math.random() - 0.5) * 100
      const y = gridY + (Math.random() - 0.5) * 100

      return {
        id: card.id,
        x: Math.min(Math.max(x, padding), containerWidth - card.width - padding),
        y: Math.min(Math.max(y, padding), containerHeight - card.height - padding),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        width: card.width,
        height: card.height,
        targetX: x,
        targetY: y,
        zIndex: index,
        rotation: Math.random() * 10 - 5,
        rotationVelocity: 0,
      }
    })

    setCardStates(initialCardStates)
  }, [])

  useEffect(() => {
    if (cardStates.length === 0 || !containerRef.current) return

    const animate = (time: number) => {
      const deltaTime = Math.min(time - lastTimeRef.current, 32)
      lastTimeRef.current = time

      const containerRect = containerRef.current!.getBoundingClientRect()

      setCardStates((prevStates) => {
        return prevStates.map((card, index) => {
          let { x, y, vx, vy, width, height, rotation, rotationVelocity } = card

          if (mousePosition.x && mousePosition.y) {
            const dx = mousePosition.x - containerRect.left - (x + width / 2)
            const dy = mousePosition.y - containerRect.top - (y + height / 2)
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < COLLISION_DISTANCE * 2) {
              const force = (COLLISION_DISTANCE * 2 - distance) / (COLLISION_DISTANCE * 2)
              const smoothForce = force * force
              vx -= (dx / distance) * smoothForce * MOUSE_INFLUENCE
              vy -= (dy / distance) * smoothForce * MOUSE_INFLUENCE
              rotationVelocity += smoothForce * ROTATION_FACTOR * (Math.random() - 0.5)
            }
          }

          const time = Date.now() * 0.0005
          const floatX = Math.sin(time + index) * FLOAT_AMPLITUDE
          const floatY = Math.cos(time * 1.2 + index) * FLOAT_AMPLITUDE

          vx += floatX * REPULSION_STRENGTH
          vy += floatY * REPULSION_STRENGTH

          cardStates.forEach((otherCard, otherIndex) => {
            if (index !== otherIndex) {
              const dx = x - otherCard.x
              const dy = y - otherCard.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < COLLISION_DISTANCE) {
                const force = (COLLISION_DISTANCE - distance) / COLLISION_DISTANCE
                const smoothForce = force * force
                const repulsionForce = smoothForce * REPULSION_STRENGTH

                vx += (dx / distance) * repulsionForce
                vy += (dy / distance) * repulsionForce

                rotationVelocity += smoothForce * ROTATION_FACTOR * (Math.random() - 0.5)
              }
            }
          })

          vx *= DAMPING
          vy *= DAMPING
          rotationVelocity *= DAMPING

          vx = Math.max(Math.min(vx, VELOCITY_LIMIT), -VELOCITY_LIMIT)
          vy = Math.max(Math.min(vy, VELOCITY_LIMIT), -VELOCITY_LIMIT)

          x += vx * (deltaTime / 16)
          y += vy * (deltaTime / 16)
          rotation += rotationVelocity * (deltaTime / 16)

          const bounce = 0.7
          const padding = COLLISION_DISTANCE * 0.5

          if (x < padding) {
            x = padding
            vx = Math.abs(vx) * bounce
          } else if (x + width > containerRect.width - padding) {
            x = containerRect.width - width - padding
            vx = -Math.abs(vx) * bounce
          }

          if (y < padding) {
            y = padding
            vy = Math.abs(vy) * bounce
          } else if (y + height > containerRect.height - padding) {
            y = containerRect.height - height - padding
            vy = -Math.abs(vy) * bounce
          }

          rotation = Math.max(Math.min(rotation, 12), -12)
          rotationVelocity = Math.max(Math.min(rotationVelocity, 1.5), -1.5)

          return {
            ...card,
            x,
            y,
            vx,
            vy,
            rotation,
            rotationVelocity,
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [cardStates.length, mousePosition])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[1000px] overflow-hidden"
    >
      {cardStates.map((cardState) => {
        const card = cards.find((c) => c.id === cardState.id)
        if (!card) return null

        return (
          <motion.div
            key={cardState.id}
            className="absolute touch-none"
            style={{
              width: cardState.width,
              height: cardState.height,
              zIndex: hoveredCard === cardState.id ? 50 : cardState.zIndex,
            }}
            animate={{
              x: cardState.x,
              y: cardState.y,
              rotate: cardState.rotation,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 80,
              mass: 1.2,
              velocity: 0,
            }}
            onHoverStart={() => setHoveredCard(cardState.id)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            {card.content}
          </motion.div>
        )
      })}
    </div>
  )
}
