
import ArrowIcon from './svg/button-arrow-icon';

const Button = ({ text, className }) => {
    return (
        <div className='flex items-stretch'>
            <button
                className={`px-8 py-2 bg-primary rounded-full cursor-pointer ${className}`}
            >
                <div className="text-black text-[16px] font-satoshi">{text}</div>

            </button>
            <div className="flex items-center justify-center bg-primary px-3 py-3 cursor-pointer rounded-full">
                <ArrowIcon />
            </div>
        </div>
    );
}

export default Button;