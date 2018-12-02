import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames/bind';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel, faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './Wiki.scss';
const cx = classNames.bind(styles);
library.add(faStroopwafel);

export default class Home extends React.Component {
     render() {
        return (
            <div className={cx('Wiki')}>
                <h2>#INSSAWIKI</h2>
                <input type="text"/>
                <button><FontAwesomeIcon icon={faSearch}/></button>
                <div className={cx('line')} />
                <table>
                    <thead>
                    <td>Rank</td>
                    <td>Buzzwords</td>
                    </thead>
                    <tbody>
                    <tr>
                        <td>TOP 1</td>
                        <td><Link to="/wiki/01">JMT</Link></td>
                    </tr>
                    <tr>
                        <td>TOP 2</td>
                        <td>TMI</td>
                    </tr>
                    <tr>
                        <td>TOP 3</td>
                        <td>존버</td>
                    </tr>
                    <tr>
                        <td>TOP 4</td>
                        <td>탈룰라</td>
                    </tr>
                    <tr>
                        <td>TOP 5</td>
                        <td>혼코노</td>
                    </tr>
                    <tr>
                        <td>TOP 6</td>
                        <td>괄도 네넴띤</td>
                    </tr>
                    <tr>
                        <td>TOP 7</td>
                        <td>갑분싸</td>
                    </tr>
                    <tr>
                        <td>TOP 8</td>
                        <td>누물보</td>
                    </tr>
                    <tr>
                        <td>TOP 9</td>
                        <td>번달번줌</td>
                    </tr>
                    <tr>
                        <td>TOP 10</td>
                        <td>팬아저</td>
                    </tr>
                    <tr>
                        <td>TOP 11</td>
                        <td>롬곡</td>
                    </tr>
                    <tr>
                        <td>TOP 12</td>
                        <td>이생망</td>
                    </tr>
                    <tr>
                        <td>TOP 13</td>
                        <td>법블레스유</td>
                    </tr>
                    <tr>
                        <td>TOP 14</td>
                        <td>롬곡옾높</td>
                    </tr>
                    <tr>
                        <td>TOP 15</td>
                        <td>별다줄</td>
                    </tr>
                    <tr>
                        <td>TOP 16</td>
                        <td>할많하않</td>
                    </tr>
                    <tr>
                        <td>TOP 17</td>
                        <td>아아</td>
                    </tr>
                    <tr>
                        <td>TOP 18</td>
                        <td>말넘심</td>
                    </tr>
                    <tr>
                        <td>TOP 19</td>
                        <td>인구론</td>
                    </tr>
                    <tr>
                        <td>TOP 20</td>
                        <td>떡락</td>
                    </tr>
                    <tr>
                        <td>TOP 21</td>
                        <td>떡상</td>
                    </tr>
                    <tr>
                        <td>TOP 22</td>
                        <td>프로불편러</td>
                    </tr>
                    <tr>
                        <td>TOP 23</td>
                        <td>명존쎄</td>
                    </tr>
                    <tr>
                        <td>TOP 24</td>
                        <td>기대가 됩니다</td>
                    </tr>
                    <tr>
                        <td>TOP 25</td>
                        <td>김칭</td>
                    </tr>
                    <tr>
                        <td>TOP 26</td>
                        <td>코와이네</td>
                    </tr>
                    <tr>
                        <td>TOP 27</td>
                        <td>갑봉싸</td>
                    </tr>
                    <tr>
                        <td>TOP 28</td>
                        <td>사장님임창정</td>
                    </tr>
                    <tr>
                        <td>TOP 29</td>
                        <td>싫존주의</td>
                    </tr>
                    <tr>
                        <td>TOP 30</td>
                        <td>내또일</td>
                    </tr>
                    <tr>
                        <td>TOP 31</td>
                        <td>워라벨</td>
                    </tr>
                    <tr>
                        <td>TOP 32</td>
                        <td>댕댕이</td>
                    </tr>
                    <tr>
                        <td>TOP 33</td>
                        <td>우유남</td>
                    </tr>
                    <tr>
                        <td>TOP 34</td>
                        <td>행복회로</td>
                    </tr>
                    <tr>
                        <td>TOP 35</td>
                        <td>전차스</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
