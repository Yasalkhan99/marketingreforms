
const Star = ({className, ...props}) => (
    <svg
        className={`max-lg:w-[30px] ${className}`}
        width={52}
        height={52}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M26 0L33.0224 18.9776L52 26L33.0224 33.0224L26 52L18.9776 33.0224L0 26L18.9776 18.9776L26 0Z"
            fill="#8865FA"
        />
    </svg>

)

export default Star;