import React from 'react'

function Header() {
  return (
    <header style={{ fontFamily: 'Roboto, Bangla259, sans-serif' }}>
      <div className="bg-surface-200 dark:bg-surfacedark-200 fixed left-0 right-0 top-0 z-50 flex h-16 w-full flex-row items-center justify-between gap-1.5 md:relative md:justify-center md:bg-transparent md:dark:bg-transparent">
        {/* <!-- logo --> */}
        <a
          href="https://aribudin.github.io/tailmater/"
          target="_blank"
          className="relative px-6 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            version="1.0"
            viewBox="0 0 317.000000 319.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,319.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="none"
            >
              <path
                className="fill-primary-200 dark:fill-primary-600"
                d="M285 3092 c-70 -34 -112 -72 -151 -139 -26 -43 -28 -57 -29 -143 0 -86 3 -100 28 -144 16 -27 45 -70 66 -95 46 -55 56 -75 64 -121 10 -54 -7 -107 -51 -158 -21 -26 -54 -74 -73 -107 -32 -56 -34 -66 -34 -150 0 -83 2 -94 33 -149 18 -33 50 -79 72 -103 74 -84 73 -187 -4 -278 -23 -27 -55 -72 -72 -100 -26 -45 -29 -58 -29 -140 0 -80 3 -96 29 -144 15 -30 50 -81 76 -114 78 -96 75 -172 -10 -282 -83 -107 -95 -137 -95 -240 0 -86 2 -93 35 -150 40 -68 114 -130 174 -146 125 -34 231 -6 345 93 85 74 179 76 268 5 83 -64 121 -87 172 -103 115 -35 220 -3 351 107 84 70 176 63 273 -21 32 -27 64 -50 70 -50 6 0 18 -6 26 -13 9 -8 35 -19 57 -25 151 -43 307 34 376 186 20 44 26 141 12 198 -10 44 -62 133 -105 182 -66 75 -65 174 1 252 94 113 123 197 108 311 -8 63 -50 143 -103 199 -79 82 -75 190 10 287 25 28 45 56 45 61 0 5 9 20 19 33 24 32 39 129 29 197 -11 73 -88 202 -121 202 -5 0 -21 8 -35 18 -71 49 -215 52 -297 5 -80 -44 -90 -54 -126 -118 -31 -57 -33 -65 -34 -160 0 -113 12 -145 92 -240 48 -58 63 -92 63 -139 0 -63 -13 -97 -55 -144 -23 -26 -55 -71 -71 -101 -26 -49 -29 -63 -29 -150 0 -110 13 -142 96 -245 53 -66 65 -107 54 -187 -6 -44 -14 -57 -70 -112 -71 -72 -120 -92 -195 -82 -36 5 -59 17 -98 51 -29 25 -78 60 -109 77 -53 28 -66 31 -148 32 -84 0 -94 -2 -150 -34 -33 -19 -81 -54 -108 -77 -36 -33 -58 -44 -96 -49 -79 -11 -124 8 -196 80 -54 54 -65 70 -70 110 -13 80 0 118 70 212 73 100 90 150 83 252 -6 80 -41 155 -103 222 -75 81 -74 181 2 275 86 105 98 136 98 249 0 98 -1 101 -38 163 -21 35 -51 78 -66 95 -41 47 -51 71 -51 119 0 67 15 105 64 159 73 82 91 128 91 239 0 86 -3 100 -28 145 -39 67 -61 90 -126 127 -47 26 -69 32 -136 35 -72 4 -86 1 -140 -25z"
              ></path>
              <path
                className="fill-primary-600 dark:fill-primary-200"
                d="M1098 3105 c-88 -24 -187 -128 -209 -219 -19 -77 -7 -168 30 -227 17 -28 31 -54 31 -58 0 -4 14 -20 31 -37 41 -38 59 -82 59 -143 0 -66 -12 -94 -65 -153 -25 -28 -45 -55 -45 -60 0 -5 -10 -24 -22 -41 -20 -28 -23 -44 -23 -127 0 -85 3 -100 27 -145 15 -27 49 -76 75 -108 43 -54 47 -64 51 -122 5 -72 -15 -124 -68 -180 -15 -16 -41 -52 -57 -80 -25 -45 -28 -60 -28 -140 0 -80 3 -96 29 -145 28 -55 72 -110 88 -110 5 0 21 -8 35 -17 68 -45 159 -55 241 -27 147 48 233 189 210 341 -9 55 -47 142 -73 163 -40 33 -78 106 -83 156 -6 67 9 108 59 169 61 73 87 124 96 185 17 111 -13 202 -103 304 -48 55 -61 103 -50 179 11 75 124 186 204 201 56 10 121 -11 176 -58 28 -23 74 -55 101 -72 46 -27 58 -29 145 -29 108 0 142 13 225 85 65 57 96 70 160 70 75 0 110 -17 172 -82 92 -99 98 -199 15 -293 -47 -53 -97 -147 -106 -197 -9 -51 10 -160 36 -205 12 -21 41 -62 66 -91 52 -62 66 -107 57 -178 -5 -44 -14 -61 -56 -109 -75 -86 -104 -154 -104 -245 0 -90 28 -156 105 -249 42 -49 51 -67 56 -113 8 -65 -14 -123 -68 -184 -86 -97 -114 -201 -83 -307 47 -163 192 -254 357 -225 168 29 271 178 247 356 -9 68 -32 111 -100 194 -87 105 -78 194 32 324 44 53 69 116 72 185 5 101 -26 176 -118 285 -39 45 -40 50 -40 119 0 70 1 73 45 129 25 31 50 65 55 74 6 9 18 28 27 42 17 26 37 125 33 170 -4 46 -24 105 -50 142 -14 20 -25 40 -25 43 0 4 -18 27 -39 51 -65 74 -67 170 -6 247 101 126 131 211 113 323 -15 100 -75 176 -174 225 -40 20 -64 24 -134 24 -95 -1 -129 -15 -245 -104 -32 -24 -76 -48 -97 -53 -74 -16 -110 -2 -245 99 -132 98 -284 80 -437 -53 -81 -70 -182 -71 -260 -3 -24 22 -47 39 -51 39 -3 0 -21 11 -39 25 -65 49 -168 65 -258 40z"
              ></path>
            </g>
          </svg>
        </a>
        {/* <!-- title --> */}
        <h2 className="text-[1.375rem] leading-7">Components</h2>
        {/* <!-- light dark --> */}
        <div
          className="relative px-4 md:hidden"
          aria-label="Brightness"
          data-microtip-position="bottom"
          role="tooltip"
        >
          {/* <!-- light & dark --> */}
          <button
            data-type="theme"
            id="lightdark"
            className="material-symbols-outlined hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400 relative !inline-flex h-12 w-12 !items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-center text-sm font-medium tracking-[.00714em]"
            style={{
              fontFamily: "'Material Symbols Outlined', Bangla259, sans-serif",
            }}
          >
            <span
              className="material-symbols-outlined dark-hidden"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla259, sans-serif",
              }}
            >
              light_mode
            </span>
            <span
              className="material-symbols-outlined dark-block"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla259, sans-serif",
              }}
            >
              dark_mode
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
