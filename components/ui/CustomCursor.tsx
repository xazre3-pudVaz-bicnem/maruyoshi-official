'use client'
import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

function isDesktopPointer(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(hover: hover)').matches &&
    window.matchMedia('(pointer: fine)').matches &&
    window.innerWidth >= 1024
  )
}

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  const spring = { damping: 28, stiffness: 280, mass: 0.5 }
  const dotX = useSpring(cursorX, { damping: 40, stiffness: 500 })
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 500 })
  const ringX = useSpring(cursorX, spring)
  const ringY = useSpring(cursorY, spring)

  useEffect(() => {
    const check = () => setActive(isDesktopPointer())
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (!active) return
    const move = (e: MouseEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY) }
    const enter = () => setHovered(true)
    const leave = () => setHovered(false)
    window.addEventListener('mousemove', move)
    const els = document.querySelectorAll('a,button,[data-cursor]')
    els.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave) })
    return () => {
      window.removeEventListener('mousemove', move)
      els.forEach(el => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave) })
    }
  }, [active, cursorX, cursorY])

  if (!active) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{ width: hovered ? 8 : 5, height: hovered ? 8 : 5 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: hovered ? 52 : 32,
            height: hovered ? 52 : 32,
            opacity: hovered ? 1 : 0.5,
            borderColor: hovered ? 'rgba(13,13,13,0.9)' : 'rgba(13,13,13,0.35)',
            borderWidth: '1px',
            borderStyle: 'solid',
          }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>
    </>
  )
}
