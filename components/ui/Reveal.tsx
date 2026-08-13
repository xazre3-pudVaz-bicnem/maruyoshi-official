'use client'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

/**
 * 軽量なフェードアップ。transform / opacity のみを使いレイアウト計算を発生させない。
 * 子要素はサーバーコンポーネントのまま渡せるため、本文テキストは初期HTMLに含まれる。
 * prefers-reduced-motion は globals.css 側で無効化する。
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay, duration: 0.7, ease }}
    >
      {children}
    </Tag>
  )
}
