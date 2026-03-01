interface WaveDividerProps {
    from?: string; // background color of section above
    to?: string;   // background color of section below
    flip?: boolean;
    className?: string;
}

export const WaveDivider = ({ from = "#ffffff", to = "#EAEEFE", flip = false, className = "" }: WaveDividerProps) => (
    <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ background: from }}>
        <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="block w-full"
            style={{ height: "60px", transform: flip ? "scaleY(-1)" : "none" }}
        >
            <path
                d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
                fill={to}
            />
        </svg>
    </div>
);
