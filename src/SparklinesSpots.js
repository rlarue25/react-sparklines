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

    getIndex(data) {
        const minIndex = data.indexOf(Math.min.apply(Math, data))
        const maxIndex = data.indexOf(Math.max.apply(Math, data))
        return {minIndex, maxIndex}
    }

    render() {

        const { data, points, width, height, size, style, spotColors } = this.props;

        const {minIndex, maxIndex} = this.getIndex(data)
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
