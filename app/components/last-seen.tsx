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
      .then((res) => res.json())
      .then(({ data }) => {
        if (data) setLocation(data);
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
      >
        {place}
      </a>
    </span>
  );
}
