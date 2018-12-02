import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Link, Route } from 'react-router-dom';
import * as classNames from 'classnames/bind';
import styles from './App.scss';

import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Wiki from './1.Wiki/';
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
                <Menu title="INSSA WIKI" onMouseOut={() => this.setState({ isShowSubMenu: false })} onMouseOver={() => this.setState({ isShowSubMenu: true })}>
                    <Link to="/wiki">Wiki</Link>
                    <Link to="/vote">Vote</Link>
                </Menu>
                <Menu title="INSSA NET" to="/net"/>
                <Menu title="INSSA MUSIC" to="/music"/>
            </div>
        </nav>
          <main>
              <Header user={{ name: '고태건', position: '@ta3g30n' }}/>
              <div className={cx("main")}>
                  <Switch>
                      <Route path="/" exact component={Wiki}/>
                      <Route path="/wiki" exact component={Wiki.Wiki}/>
                      <Route path="/wiki/01" exact component={Wiki.Top}/>
                      <Route path="/vote" exact component={Wiki.Vote}/>
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