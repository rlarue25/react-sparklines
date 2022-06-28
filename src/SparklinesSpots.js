import PropTypes from 'prop-types';
import React from 'react';

export default class SparklinesSpots extends React.Component {

    static propTypes = {
        size: PropTypes.number,
        style: PropTypes.object,
        spotColors: PropTypes.object
    };

    static defaultProps = {
        size: 2,
        spotColors: {
            'max': 'green',
            'min': 'red'
        }
    };

    getIndex(points) {
        const temp = points.map(p => p.y)
        const minIndex = temp.indexOf(Math.max(temp))
        const maxIndex = temp.indexOf(Math.min(temp))
        return {minIndex, maxIndex}
    }

    render() {

        const { points, width, height, size, style, spotColors } = this.props;

        const {minIndex, maxIndex} = this.getIndex(points)

        const maxSpot = <circle
                            cx={points[maxIndex].x}
                            cy={points[maxIndex].y}
                            r={size}
                            style={{fill: spotColors['max']}} />

        const minSpot = <circle
                            cx={points[minIndex].x}
                            cy={points[minIndex].y}
                            r={size}
                            style={{fill: spotColors['min']}} />

        return (
            <g>
                {style && maxSpot}
                {minSpot}
            </g>
        )
    }
}
