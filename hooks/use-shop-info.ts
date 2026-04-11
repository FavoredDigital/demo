"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ShopInfo {
  shopName: string;
  city: string;
  phone: string;
}

const STORAGE_KEYS = {
  shopName: "shop",
  city: "city",
  phone: "phone",
};

const DEFAULTS: ShopInfo = {
  shopName: "Your Shop Name",
  city: "Your City",
  phone: "Your Phone Number",
};

export function useShopInfo(): ShopInfo {
  const searchParams = useSearchParams();
  const [shopInfo, setShopInfo] = useState<ShopInfo>(DEFAULTS);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Get URL params
    const shopParam = searchParams.get("shop");
    const cityParam = searchParams.get("city");
    const phoneParam = searchParams.get("phone");

    // If URL params exist, store them in sessionStorage
    if (shopParam) {
      sessionStorage.setItem(STORAGE_KEYS.shopName, shopParam);
    }
    if (cityParam) {
      sessionStorage.setItem(STORAGE_KEYS.city, cityParam);
    }
    if (phoneParam) {
      sessionStorage.setItem(STORAGE_KEYS.phone, phoneParam);
    }

    // Read from sessionStorage first, fallback to URL params, then defaults
    const shopName =
      sessionStorage.getItem(STORAGE_KEYS.shopName) ||
      shopParam ||
      DEFAULTS.shopName;
    const city =
      sessionStorage.getItem(STORAGE_KEYS.city) || cityParam || DEFAULTS.city;
    const phone =
      sessionStorage.getItem(STORAGE_KEYS.phone) ||
      phoneParam ||
      DEFAULTS.phone;

    setShopInfo({ shopName, city, phone });
    setIsInitialized(true);
  }, [searchParams]);

  // Return defaults during SSR, actual values after hydration
  if (!isInitialized) {
    return DEFAULTS;
  }

  return shopInfo;
}
