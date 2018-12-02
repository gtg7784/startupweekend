import * as React from 'react';

import * as classNames from 'classnames/bind';
import styles from './Net.scss';
import Profile from './profile.jpg';
const cx = classNames.bind(styles);

export default class Net extends React.Component {
    render() {
        return (
            <div className={cx('Net')}>
                <h2>#INNSANET</h2>
                <div>
                    <img src={Profile}/>
                </div>
                <div className={cx('name')}>@ta3g30n</div>
                <div>INSSA POWER: 68!</div>
                <div className={cx('posts')}>
                    <div>323 POSTs</div>
                    <div className={cx("sadf")}>34 BESTs</div>
                </div>
                <div>School Rank: 32</div>
            </div>
        );
    }
}
