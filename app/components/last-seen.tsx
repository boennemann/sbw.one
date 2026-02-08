"use client";

import { useEffect, useState } from "react";

interface LocationData {
  city?: string;
  country: string;
  lat: number;
  lng: number;
}

export default function LastSeen() {
  const [location, setLocation] = useState<LocationData | null>(null);

  useEffect(() => {
    fetch("/api/location")
      .then((res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((json) => {
        if (json?.data) setLocation(json.data);
      })
      .catch(() => {});
  }, []);

  if (!location) return null;

  const place =
    (location.city ? location.city + ", " : "") + location.country;

  return (
    <span className="animate-fade-up inline-block">
      Last seen in{" "}
      <a
        href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
        className="text-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${place} on Google Maps`}
      >
        {place}
      </a>
    </span>
  );
}
