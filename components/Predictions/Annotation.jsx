export default function Annotation(props) {

    const { 
        coords = false,
        label = false
    } = props,
    { x1, y1, x2, y2 } = coords;

    if (!coords) return;

    return (
        <>
            <rect 
                x={x1} 
                y={y1} 
                width={x2 - x1} 
                height={y2 - y1} 
                fill='blue'
                fillOpacity={.1}
                stroke='white'
                strokeWidth={5}
            />
            {label && 
                <text 
                    x={x2} 
                    y={y2} 
                    dominantBaseline="text-after-edge"
                    textAnchor="end"
                    fill="white"
                    stoke="black"
                    strokeWidth={3}
                    fontSize={'2rem'}
                >
                    {label}
                </text>
            }
        </>
    )
}