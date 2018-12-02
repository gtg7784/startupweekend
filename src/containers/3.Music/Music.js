import * as React from 'react';

import * as classNames from 'classnames/bind';
import styles from './Music.scss';
const cx = classNames.bind(styles);

export default class Music extends React.Component {
    render() {
        return (
            <div className={cx('Music')}>
                <h2>#INSSAMUSIC</h2>
            </div>
        );
    }
}
