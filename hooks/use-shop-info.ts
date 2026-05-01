"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

interface ShopHours {
  Monday: string
  Tuesday: string
  Wednesday: string
  Thursday: string
  Friday: string
  Saturday: string
  Sunday: string
}

interface ShopInfo {
  name: string
  city: string
  phone: string
  email: string
  address: string
  state: string
  zip: string
  established: number
  tagline: string
  hours: ShopHours
}

const DEFAULT_HOURS: ShopHours = {
  Monday: "8:00 AM - 6:00 PM",
  Tuesday: "8:00 AM - 6:00 PM",
  Wednesday: "8:00 AM - 6:00 PM",
  Thursday: "8:00 AM - 6:00 PM",
  Friday: "8:00 AM - 6:00 PM",
  Saturday: "9:00 AM - 3:00 PM",
  Sunday: "Closed",
}

const DEFAULTS: ShopInfo = {
  name: "Heritage Auto Works",
  city: "Austin",
  phone: "(512) 555-0147",
  email: "service@heritageautoworks.com",
  address: "4521 Vintage Lane",
  state: "TX",
  zip: "78745",
  established: 1987,
  tagline: "Where Craftsmanship Meets Performance",
  hours: DEFAULT_HOURS,
}

const STORAGE_KEY = "shop_info"

export function useShopInfo(): ShopInfo {
  const searchParams = useSearchParams()
  const [shopInfo, setShopInfo] = useState<ShopInfo>(DEFAULTS)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Check for URL params first
    const nameParam = searchParams.get("name")
    const cityParam = searchParams.get("city")
    const phoneParam = searchParams.get("phone")

    let newShopInfo: ShopInfo | null = null

    if (nameParam || cityParam || phoneParam) {
      // Build shop info from URL params
      newShopInfo = {
        ...DEFAULTS,
        name: nameParam || DEFAULTS.name,
        city: cityParam || DEFAULTS.city,
        phone: phoneParam || DEFAULTS.phone,
      }
      // Store in sessionStorage
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newShopInfo))
    }

    // If no URL params, try to get from sessionStorage
    if (!newShopInfo) {
      const storedData = sessionStorage.getItem(STORAGE_KEY)
      if (storedData) {
        try {
          newShopInfo = JSON.parse(storedData) as ShopInfo
        } catch {
          newShopInfo = null
        }
      }
    }

    // Use shop info if found, otherwise use defaults
    if (newShopInfo) {
      setShopInfo(newShopInfo)
    } else {
      setShopInfo(DEFAULTS)
    }

    setIsInitialized(true)
  }, [searchParams])

  // Return defaults during SSR, actual values after hydration
  if (!isInitialized) {
    return DEFAULTS
  }

  return shopInfo
}
