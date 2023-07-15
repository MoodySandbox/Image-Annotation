export default function Modal({ 
    id, 
    className = '', 
    active = false, 
    onClose = () => {}, 
    title = '',
    footer = false, 
    children
}) {
    return (
        <div id={id} tabIndex="-1" aria-hidden="true" className={`${active ? 'flex' : 'hidden'} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-gray-900/40  dark:bg-slate-900/75  ${className}`} onClick={onClose}>

            <div className="relative w-full max-w-2xl max-h-full m-auto" onClick={e => e.stopPropagation()}>

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={onClose}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        {children}
                    </div>

                    <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        {footer}
                    </div>

                </div>

            </div>

        </div>
    );
}
