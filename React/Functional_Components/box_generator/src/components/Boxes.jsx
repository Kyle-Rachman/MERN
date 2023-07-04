import React from 'react';
import styles from './Boxes.module.css';

const boxStyle = (color,size) => {
    return {
        backgroundColor : color,
        height: `${size}px`,
        width: `${size}px`,
        margin: '20px'
    }
}

const Boxes = (props) => {
    let boxes = props.boxInfoList.map( (info, index) => <div key={index} style={boxStyle(info['color'],info['size'])}></div>);
    return (
        <div className={styles.boxes}>
            {boxes}
        </div>
    );
};

export default Boxes;