import * as React from 'react';
import * as classNames from 'classnames/bind';
import styles from './Homebox.scss';
const cx = classNames.bind(styles);

export default class Homebox extends React.Component {
    render() {
        return (
            <div className={cx('homebox')}>
                <p>{this.props.title}</p>
                <div className={cx("row")}>
                    <div className={cx("boxes")}>
                        <p>공지사항</p>
                        <hr />
                        <ul>
                            <li>{this.props.title}에 관한</li>
                            <li>금주 활동보고서 작성</li>
                        </ul>
                    </div>
                    <div className={cx("boxes")}>
                        <p>일정</p>
                        <hr />
                        <ul>
                            <li>8/06 프로그램 1 오프라인 모임</li>
                            <li>8/06 프로그램 1 오프라인 모임</li>
                            <li>8/06 프로그램 1 오프라인 모임</li>
                        </ul>
                    </div>
                    <div className={cx("boxes")}>
                        <p>활동보고서</p>
                        <hr />
                        <ul>
                            <li>3주차 활동보고서</li>
                            <li>2주차 활동보고서</li>
                            <li>1주차 활동보고서</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
