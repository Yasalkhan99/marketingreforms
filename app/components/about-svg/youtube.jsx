
const YoutubeLogo = ({ className, ...props }) => (
    <svg
        className={className}
        width={86}
        height={86}
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g filter="url(#filter0_d_575_4636)">
            <circle cx="38.6001" cy="45.6" r="37.5" fill="white" />
            <circle cx="38.6001" cy="45.6" r={35} stroke="#EE3124" strokeWidth={5} />
        </g>
        <path
            d="M56.7297 37.1665C56.2984 35.5646 55.0353 34.3015 53.4334 33.8702C50.5067 33.1 38.8 33.1 38.8 33.1C38.8 33.1 27.0933 33.1 24.1666 33.8702C22.5647 34.3015 21.3016 35.5646 20.8703 37.1665C20.1001 40.0932 20.1001 46.1622 20.1001 46.1622C20.1001 46.1622 20.1001 52.262 20.8703 55.1579C21.3016 56.7598 22.5647 58.0229 24.1666 58.4542C27.0933 59.2244 38.8 59.2244 38.8 59.2244C38.8 59.2244 50.5067 59.2244 53.4334 58.4542C55.0353 58.0229 56.2984 56.7598 56.7297 55.1579C57.4999 52.2312 57.4999 46.1622 57.4999 46.1622C57.4999 46.1622 57.4999 40.0932 56.7297 37.1665Z"
            fill="#EE3124"
        />
        <path
            d="M35.0415 51.7999L44.7765 46.193L35.0415 40.5553V51.7999Z"
            fill="white"
        />
        <defs>
            <filter
                id="filter0_d_575_4636"
                x="9.77516e-05"
                y="6.19888e-06"
                width="85.2"
                height="85.2"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dx={4} dy={-3} />
                <feGaussianBlur stdDeviation="2.55" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_575_4636"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_575_4636"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>

)

export default YoutubeLogo;