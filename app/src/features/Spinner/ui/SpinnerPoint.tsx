import React from 'react';


interface SpinnerPointProps {
    isActive: boolean

    pointsCount: number
    pointNumber: number
    pointTitle: string

    pointAngle: number

    handleClick: (arg1: number, arg2: number) => void
}


 
const SpinnerPoint: React.FunctionComponent<SpinnerPointProps> = ({
    isActive,

    pointsCount,
    pointNumber,
    pointTitle,

    pointAngle,

    handleClick,
}) => {

    const [rotate, setRotate] = React.useState((360 / pointsCount) * pointNumber - pointAngle)

    React.useEffect(() => {
        setRotate((360 / pointsCount) * pointNumber - pointAngle)
    }, [pointAngle, pointsCount, pointNumber])


    return (<>
        <div className={`interval-slider_spinner__point`}
            style={{
                transform: `rotate(${rotate}deg)`
            }}
        >
            <div className={`interval-slider_spinner__point-wrapper ${isActive ? '--active' : ''}`}
                style={{
                    transform: `rotate(${-rotate}deg)`,
                }}
            >
                <div className={`interval-slider_spinner__point--index ${isActive ? '--active' : ''}`}
                    onClick={() => handleClick(pointNumber, 360 / pointsCount * pointNumber - pointAngle)}
                >
                    {pointNumber}
                </div>

                <div className={`interval-slider_spinner__point--title ${isActive ? '--active' : ''}`}>
                    {pointTitle}
                </div>
            </div>
        </div>
    </>);
}
 
export default SpinnerPoint;