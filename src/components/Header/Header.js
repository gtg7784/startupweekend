import React, { Component } from 'react';
import * as classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

export default class Header extends Component {
    render() {
        return (
            <div className={cx("Header")}>
                <div/>
                <span className={cx('info-box')}>
                    <div className={cx('user-info')}>
                        <span>{this.props.user.name}님</span>
                        <span>( {this.props.user.position} )</span>
                    </div>
                    <button>로그아웃</button>
			    </span>
            </div>
        );
    }
}

