import Annotation from '@/components/Predictions/Annotation'

export default function Prediction({ file = false }) {
    if (!file) return;

    return (
        <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${file.width} ${file.height}`}>

            <image href={URL.createObjectURL(file.file)}  width={file.width} height={file.height} />

            {file.predictions.map((prediction, idx) => (
                <Annotation 
                    key={idx} 
                    coords={prediction.bbox} 
                    label={`${prediction.label} (${(prediction.score * 100).toFixed()}%)`} 
                />
            ))}
            
        </svg>
    )
}