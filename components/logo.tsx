'use client'

import { useId } from 'react'

interface LogoProps {
  size?: number
  animated?: boolean
  className?: string
}

export default function Logo({
  size = 40,
  animated = true,
  className = '',
}: LogoProps) {
  const id = useId().replace(/:/g, '')

  const gradA = `grad-a-${id}`
  const gradB = `grad-b-${id}`
  const gradN = `grad-n-${id}`
  const gradShimmer = `grad-shimmer-${id}`
  const clip = `clip-${id}`
  const filter = `filter-${id}`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label="N logo"
      className={className}
      style={{ display: 'block', flexShrink: 0 }}>
      <defs>
        {/* Card background gradient — deep warm brown */}
        <linearGradient
          id={gradA}
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e1410" />
          <stop offset="100%" stopColor="#0e0906" />
        </linearGradient>
        <linearGradient
          id={gradB}
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d4b290" stopOpacity="0.35" />
          <stop offset="40%" stopColor="#d4b290" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#d4b290" stopOpacity="0.0" />
        </linearGradient>
        <linearGradient
          id={gradN}
          x1="28"
          y1="22"
          x2="72"
          y2="78"
          gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e8cfa8" />
          <stop offset="45%" stopColor="#d4b290" />
          <stop offset="100%" stopColor="#a07850" />
        </linearGradient>
        <linearGradient id={gradShimmer} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
          {animated && (
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0"
              to="2 0"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1"
            />
          )}
        </linearGradient>
        <clipPath id={clip}>
          <rect x="4" y="4" width="92" height="92" rx="22" ry="22" />
        </clipPath>
        <filter id={filter} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="22"
        ry="22"
        fill={`url(#${gradA})`}
      />
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="22"
        ry="22"
        fill={`url(#${gradB})`}
      />
      <rect
        x="4.5"
        y="4.5"
        width="91"
        height="91"
        rx="21.5"
        ry="21.5"
        stroke="#d4b290"
        strokeOpacity="0.18"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="22"
        ry="22"
        fill={`url(#${gradShimmer})`}
        clipPath={`url(#${clip})`}
      />
      <path
        d="M 28 22 L 28 78 L 38 78 L 38 42 L 62 78 L 72 78 L 72 22 L 62 22 L 62 58 L 38 22 Z"
        fill={`url(#${gradN})`}
        filter={`url(#${filter})`}
      />
      <path
        d="M 28 22 L 28 78 L 31 78 L 31 28 L 35 35 L 38 42 L 38 22 Z"
        fill="white"
        fillOpacity="0.07"
      />
    </svg>
  )
}
