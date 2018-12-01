import React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames/bind';
import styles from './Menu.scss';

const cx = classNames.bind(styles);

export default function Menu(props){
    return (
        <div className={cx("Menu")} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
            {props.to ? <Link to={props.to}>{props.title}</Link> : <span>{props.title}</span>}
            <div className={cx('sub-menu')}>{props.children}</div>
        </div>
    );
}