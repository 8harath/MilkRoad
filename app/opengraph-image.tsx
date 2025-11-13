import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Milk Road Pro Reports';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffeb3b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '20px solid black',
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: 'black',
            marginBottom: 20,
          }}
        >
          🥛 MILK ROAD
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: 'black',
            background: 'white',
            padding: '20px 60px',
            border: '8px solid black',
            boxShadow: '12px 12px 0px 0px black',
          }}
        >
          PRO REPORTS
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: 'black',
            marginTop: 40,
          }}
        >
          126+ Professional Crypto Research Reports
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
