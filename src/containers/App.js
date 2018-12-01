import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Link, Route } from 'react-router-dom';
import * as classNames from 'classnames/bind';
import styles from './App.scss';

import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Wiki from '../containers/1.Wiki/Wiki';
import Net from '../containers/2. Net/Net';
import Music from "./3.Music/Music";

const cx = classNames.bind(styles);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowSubMenu: false
        };
    }
  render() {
    return (
      <div className={cx("App")}>
        <nav>
            <div><Link to="/wiki">#INSSANOTE</Link></div>
            <div>#Between insider and ouiser.</div>
            {this.state.isShowSubMenu && <div className={cx('submenu-bg')} />}
            <div className={cx('menu-box')}>
                <Menu title="INSSA WIKI" to="/wiki"/>
                <Menu title="INSSA NET" to="/net"/>
                <Menu title="INSSA MUSIC" to="/music"/>
            </div>
        </nav>
          <main>
              <Header user={{ name: '고태건', position: '장학샘' }}/>
              <div className={cx("main")}>
                  <Switch>
                      <Route path="/" exact component={Wiki}/>
                      <Route path="/wiki" exact component={Wiki}/>
                      <Route path="/net" exact component={Net}/>
                      <Route path="/music" exact component={Music}/>
                  </Switch>
              </div>
          </main>
      </div>
    );
  }
}

export default hot(module)(App);