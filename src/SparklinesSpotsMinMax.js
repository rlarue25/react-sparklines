import PropTypes from 'prop-types';
import React from 'react';

export default class SparklinesSpotsMinMax extends React.Component {

    static propTypes = {
        size: PropTypes.number,
        style: PropTypes.object,
    };

    static defaultProps = {
        size: 2
    };

    getIndex(data) {
        const minIndex = data.indexOf(Math.min.apply(Math, data))
        const maxIndex = data.indexOf(Math.max.apply(Math, data))
        return {minIndex, maxIndex}
    }

    render() {

        const { data, points, width, height, size, style} = this.props;

        const {minIndex, maxIndex} = this.getIndex(data)
        console.log("Hello?")
        const maxSpot = <circle
                            cx={points[maxIndex].x}
                            cy={points[maxIndex].y}
                            r={size}
                            style={style || {fill: 'green'}} />

        const minSpot = <circle
                            cx={points[minIndex].x}
                            cy={points[minIndex].y}
                            r={size}
                            style={style || {fill: 'red'}} />

        return (
            <g>
                {maxSpot}
                {minSpot}
            </g>
        )
    }
}
