import * as React from 'react';

import * as classNames from 'classnames/bind';

import styles from './Top.scss';
const cx = classNames.bind(styles);

export default class Top extends React.Component {
    render() {
        return (
            <div className={cx('Top')}>
                <h2>#INSSAWIKI - JMT</h2>
                <div className={cx('line')} />
                <p>
                    존맛탱(Jhon Mat Thang) <br/>
                    존나 맛있다. (탱은 강조를 위함) <br/>

                    ex) This ramen is JMT!!! (This ramen is delicious!!!)
                </p>
            </div>
        );
    }
}
