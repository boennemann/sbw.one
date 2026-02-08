import { NextResponse } from "next/server";

interface LocationData {
  city?: string;
  country: string;
  lat: number;
  lng: number;
}

const headers = {
  "Cache-Control": "public, s-maxage=604800, stale-while-revalidate=2592000",
  "Access-Control-Allow-Origin": "https://sbw.one",
};

export async function GET() {
  const token = process.env.FOURSQUARE_OAUTH_TOKEN;
  if (!token) {
    return NextResponse.json({ data: null }, { headers });
  }

  try {
    const res = await fetch(
      "https://api.foursquare.com/v2/users/self/checkins?limit=1&v=20231001",
      {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 604800 },
      },
    );
    if (!res.ok) {
      return NextResponse.json({ data: null }, { headers });
    }
    const json = await res.json();
    const checkin = json?.response?.checkins?.items?.[0];

    if (!checkin?.venue?.location) {
      return NextResponse.json({ data: null }, { headers });
    }

    const { city, country, lat, lng } = checkin.venue.location;
    const data: LocationData = { city, country, lat, lng };

    return NextResponse.json({ data }, { headers });
  } catch {
    return NextResponse.json({ data: null }, { headers });
  }
}
