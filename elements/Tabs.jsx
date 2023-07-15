export default function Tabs({ 
    className = '', 
    items = [], 
    active = false, 
    onTabClick = () => {}, 
    ...props 
}) {
    return (
        <ul className="w-full text-sm font-medium text-center text-slate-500 divide-x divide-slate-200 rounded-lg shadow sm:flex dark:divide-slate-700 dark:text-slate-400 overflow-hidden">
            {items.map((item, key) => (
                <li key={key} className="w-full">
                    <a
                        {...props}
                        href="#"
                        className={
                            `inline-block w-full p-4 active focus:outline-none ${className ?? ''}` +
                            (active === item.key ? ' text-slate-700 bg-gray-200 dark:bg-slate-700 dark:text-white font-bold' : ' bg-white hover:text-slate-700 dark:hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700')
                        }
                        onClick={() => onTabClick(item.key)}
                    >
                        {item.value}
                    </a>
                </li>
            ))}
      </ul>
    );
}
