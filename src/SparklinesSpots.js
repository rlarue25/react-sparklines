import PropTypes from 'prop-types';
import React from 'react';
import min from './dataProcessing/min';

export default class SparklinesSpots extends React.Component {

    static propTypes = {
        size: PropTypes.number,
        style: PropTypes.object,
        spotColors: PropTypes.object
    };

    static defaultProps = {
        size: 2,
        spotColors: {
            '-1': 'red',
            '0': 'black',
            '1': 'green'
        }
    };

    lastDirection(points) {

        Math.sign = Math.sign || function(x) { return x > 0 ? 1 : -1; }

        return points.length < 2
            ? 0
            : Math.sign(points[points.length - 2].y - points[points.length - 1].y);
    }

    getIndex(data) {
        const minIndex = data.indexOf(Math.min.apply(Math, data))
        const maxIndex = data.indexOf(Math.max.apply(Math, data))
        return {minIndex, maxIndex}
    }

    render() {

        const { points, width, height, size, style, spotColors } = this.props;
        const {minIndex, maxIndex} = this.getIndex(data)
        const startSpot = <circle
                            cx={points[minIndex].x}
                            cy={points[minIndex].y}
                            r={size}
                            style={style} />

        const endSpot = <circle
                            cx={points[maxIndex].x}
                            cy={points[maxIndex].y}
                            r={size}
                            style={style || { fill: spotColors[this.lastDirection(points)] }} />

        return (
            <g>
                {style && startSpot}
                {endSpot}
            </g>
        )
    }
}