
import ArrowIcon from './svg/button-arrow-icon';

const Button = ({ text, className }) => {
    return (
        <div className='flex items-stretch'>
            <button
                className={`px-8 py-2 max-lg:py-1.5 bg-primary rounded-full cursor-pointer max-lg:px-4 ${className}`}
            >
                <div className="text-black text-[16px] max-lg:text-[14px] font-satoshi">{text}</div>

            </button>
            <div className="flex items-center justify-center bg-primary px-3  py-3 max-lg:py-1 cursor-pointer rounded-full">
                <ArrowIcon className="max-lg:w-[10px]"/>
            </div>
        </div>
    );
}

export default Button;