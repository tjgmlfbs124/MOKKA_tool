import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import SideBar from './SideBar';
import SubMenu from './SubMenu';
import Selected from './Selected';
import Foot from './foot';
import { triggerEvent } from '@actions';
import { setUIParam } from '@actions/popup';
import { EMIT_TYPES } from '@constants';
import Theme from '@utils/Theme';

class Index extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle("popup");
        this.props.setUIParam(this.options);
        this.props.triggerEvent(EMIT_TYPES.fetch, this.options, false);
        this.drawItems = this.drawItems.bind(this);
        this.getMenus = this.getMenus.bind(this);
    }

    get options() {
        return {
            type: this.props.mainType,
            sidebar: Object.keys(this.props.sidebar)[0],
            //subMenu: 'all',
            subMenu: Object.keys(this.props.sidebar)[0] + '_MISSION',
        };
    }

    componentDidUpdate(prevProps) {
        const before = prevProps.popupReducer;
        const next = this.props.popupReducer;
        const isMenuChanged = before.sidebar && (before.sidebar !== next.sidebar || before.subMenu !== next.subMenu);
        if (isMenuChanged) {
            const elmnt = document.getElementById('popupList');
            if (elmnt) {
                elmnt.scrollTop = 0;
            }
            this.props.triggerEvent(
                EMIT_TYPES.fetch,
                { type: next.type, sidebar: next.sidebar, subMenu: next.subMenu },
                false,
            );
        }
    }

    componentWillUnmount() {
        // this.props.setUIParam({
        //     type: undefined,
        //     sidebar: undefined,
        //     subMenu: undefined
        // });
        this.props.setUIParam({
            type: 'story',
            sidebar: 'STORY_01',
            subMenu: 'STORY_01_first'
        });
    }

    drawItems() {
        return this.props.data.data.map((item, index) => (
            <Item key={index} item={item} multiSelect={this.props.multiSelect} type={this.props.popupReducer.type}/>
        ));
    }

    getMenus() {
        if (!this.props.sidebar) {
            return null;
        }
        const subTitle = this.props.popupReducer.sidebar;
        if (subTitle && this.props.educationBar[subTitle]) {
            return this.props.educationBar[subTitle].sub;
        }
        return this.props.educationBar[Object.keys(this.props.educationBar)[0]].sub;
    }

    drawListBox() {
        return (
            <div id="popupList" className={this.theme.list_area}>
                <ul className={this.theme.story_list}>{this.drawItems()}</ul>
            </div>
        );
    }

    render() {
        // @SEO educationBar : 스토리 창에서 상단메뉴는 각기 다른 SideBar를 가지기 때문에, 하나 더 추가함.
        // sidebar :  스토리 1~10 카테고리
        // educationbar : Weeemake, 기타 교육게임 카테고리
        // Story의 명세는 popup/Contents/index.jsx에서 정해준다.
        return (
            <React.Fragment>
                <div className={this.theme.pop_content}>
                    <SideBar type={this.props.mainType} sidebar={this.props.sidebar} educationBar={this.props.educationBar}/>
                    <div className={this.theme.section_cont}>
                        <SubMenu type={this.props.mainType} menus={this.getMenus()}/>
                        {this.drawListBox()}
                        {this.props.multiSelect && <Selected type={this.props.mainType}/>}
                    </div>
                </div>
                <Foot/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    triggerEvent: (event, data, hidden) => dispatch(triggerEvent(event, data, hidden)),
    setUIParam: (data) => dispatch(setUIParam(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);
