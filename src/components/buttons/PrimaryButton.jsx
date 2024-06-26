export default function PrimaryButton({ className = '', children, ...props }) {
    return (
        <button
            {...props}
            className={
                `` + className
            }
        >
            {children}
        </button>
    );
}
