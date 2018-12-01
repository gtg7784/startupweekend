import React, { Component } from 'react';
import * as classNames from 'classnames/bind';

import styles from './Noticerow.scss';
const cx = classNames.bind(styles);

export default class Noticerow extends Component {
    render() {
        return (
            <tr className={cx("Noticerow")}>
                <td>{this.props.contents.title}</td>
                <td>{this.props.contents.date}</td>
                <td>{this.props.contents.author}</td>
            </tr>
        );
    }
}