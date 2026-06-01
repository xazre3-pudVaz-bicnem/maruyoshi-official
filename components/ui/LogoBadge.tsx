import Image from 'next/image'

interface LogoBadgeProps {
  /** badge outer diameter in px */
  size?: number
  /** 'dark' = white logo on dark bg (filter invert), 'light' = black logo on light bg */
  variant?: 'dark' | 'light'
  /** additional className for wrapper */
  className?: string
  priority?: boolean
}

/**
 * Circular emblem badge using the transparent logo.
 * - dark variant: white mark visible on dark backgrounds (filter: brightness(0) invert(1))
 * - light variant: original black mark on light backgrounds
 * Both use elegant ring shadows for premium look.
 */
export default function LogoBadge({
  size = 52,
  variant = 'light',
  className = '',
  priority = false,
}: LogoBadgeProps) {
  const innerSize = Math.round(size * 0.72)

  const isDark = variant === 'dark'

  return (
    <div
      className={className}
      style={{
        width:  size,
        height: size,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        position: 'relative',
        /* Premium multi-layer ring */
        boxShadow: isDark
          ? [
              '0 0 0 1px rgba(255,255,255,0.45)',   /* tight white hairline */
              '0 0 0 4px rgba(255,255,255,0.08)',   /* soft glow gap */
              '0 6px 24px rgba(0,0,0,0.5)',         /* depth shadow */
            ].join(', ')
          : [
              '0 0 0 1px rgba(0,0,0,0.10)',         /* tight dark hairline */
              '0 0 0 4px rgba(0,0,0,0.03)',         /* faint outer ring */
              '0 2px 10px rgba(0,0,0,0.08)',        /* soft shadow */
            ].join(', '),
        /* Subtle background — gradient not flat color */
        background: isDark
          ? 'radial-gradient(circle at 44% 40%, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)'
          : 'transparent',
      }}
    >
      <Image
        src="/images/logo-transparent.png"
        alt="株式会社丸義"
        width={innerSize}
        height={innerSize}
        priority={priority}
        quality={95}
        style={{
          width:       innerSize,
          height:      innerSize,
          objectFit:   'contain',
          display:     'block',
          /* brightness(0) → all pixels black, invert(1) → all pixels white */
          filter:      isDark ? 'brightness(0) invert(1)' : 'none',
          transition:  'filter 0.4s ease',
        }}
      />
    </div>
  )
}
