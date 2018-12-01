import * as React from 'react';

import * as classNames from 'classnames/bind';
import styles from './Wiki.scss';
const cx = classNames.bind(styles);

export default class Home extends React.Component {
     render() {
        return (
            <div className={cx('Wiki')}>
                <h2>#INSSAWIKI</h2>
            </div>
        );
    }
}
