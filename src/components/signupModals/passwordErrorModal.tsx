import React from 'react'

export default (props: any) => {
    let { setDisplayError, displayError, first, second } = props;
    return (
        <div className="flex justify-center py-5">
            <div className="bg-red-lightest border border-red-600 text-red-dark pl-4 pr-8 py-3 rounded absolute" role="alert">
                <strong className="font-bold text-red-600">{first}</strong>
                <span className="block sm:inline px-5 text-red-600">{second}</span>
                <span className="absolute pin-t pin-b pin-r pr-2 "
                    onClick={() => setDisplayError(false)}
                >
                    <svg className="h-6 w-6 text-red" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
            {/* } */}
            {/* {displayError.name &&
                <div className="bg-red-lightest border border-red-600 text-red-dark pl-4 pr-8 py-3 rounded absolute" role="alert">
                    <strong className="font-bold text-red-600">Required Field!</strong>
                    <span className="block sm:inline px-5 text-red-600">Name is Required</span>
                    <span className="absolute pin-t pin-b pin-r pr-2 "
                        onClick={() => setDisplayError(false)}
                    >
                        <svg className="h-6 w-6 text-red" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                    </span>
                </div>
            } */}

        </div>

    )
}