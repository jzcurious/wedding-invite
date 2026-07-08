import React from "react";

interface DelimiterProps {
    className?: string;
}

const Delimiter = ({ className = "" }: DelimiterProps) => {
    return (
        <div
            className={`flex items-center justify-center gap-3 opacity-25 ${className}`}
        >
            {/* Левая линия */}
            <div className="w-12 h-px bg-wedding-red" />

            {/* Центральный ромбик */}
            <div className="w-1.5 h-1.5 border border-wedding-red rotate-45" />

            {/* Правая линия */}
            <div className="w-12 h-px bg-wedding-red" />
        </div>
    );
};

export default Delimiter;
