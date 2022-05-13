import { useCallback, useEffect, useState } from 'react'
import { theme } from '../styles'
import { GenericObject } from '../types'

export function useWindowValues() {
  const [windowValues, setWindowValues] = useState<GenericObject>({
    windowXS    : true,
    windowWidth : 475,
    windowHeight: 810,
  })

  /**
   * Calculate browser "window" values
   */
  const calcWindowValues = useCallback(() => {
    try {
      const {
        innerWidth : windowWidth,
        innerHeight: windowHeight,
      } = window || {}

      const windowXS = windowWidth < theme.breakpoints.values.sm

      setWindowValues((previousValues) => ({
        ...previousValues,
        windowXS,
        windowWidth,
        windowHeight,
      }))
    } catch (error) {
      console.error('"useWindowValues" hook error', error)
    }
  }, [])

  /**
   * Trigger to calculate browser "window" sizes
   */
  useEffect(() => {
    calcWindowValues()
    window.addEventListener('resize', calcWindowValues)

    return () => {
      window.removeEventListener('resize', calcWindowValues)
    }
  }, [calcWindowValues])

  return windowValues
}