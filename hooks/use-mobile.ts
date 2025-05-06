"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    const handleMatch = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    setMatches(mediaQuery.matches)

    mediaQuery.addEventListener("change", handleMatch)

    return () => {
      mediaQuery.removeEventListener("change", handleMatch)
    }
  }, [query])

  return matches
}

export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 768px)")
}
