export function CardFaculdade(){

    return (
    
        <div className="flex flex-col items-center text-center p-6 sm:p-10 rounded-xl border border-border bg-surface max-w-md mt-12 mx-4 sm:mx-auto">
            <div className="flex items-center justify-center gap-4">
                <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary sm:w-12 sm:h-12"
                >
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>

                <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary sm:w-10 sm:h-10"
                >
                <path d="M12 2c-2.7 0-5.4.4-8 1.2v16.5c2.6-.8 5.3-1.2 8-1.2s5.4.4 8 1.2V3.2C17.4 2.4 14.7 2 12 2zm-1 15.5c-2 0-4 .3-6 1V5.3c2-.7 4-1 6-1v13.2zm8 1c-2-.7-4-1-6-1s-.7 0-1 0V4.3c.3 0 .7 0 1 0 2 0 4 .3 6 1v13.2z" />
                </svg>
            </div>

            <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto text-center mt-12 px-6">
                Análise e Desenvolvimento de Sistemas pela Universidade de Caxias do Sul
                (UCS)
            </p>
        </div>
    )
}

