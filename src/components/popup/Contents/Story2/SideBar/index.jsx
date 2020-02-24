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
            subMenu: 'STORY_01_first',
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
        // @SEO STORY->EDUCATION 으로 상위메뉴가 바뀔때 호출됨..
        this.props.setUIParam({
            type: 'story',
            sidebar: 'EDUCATION_01',
            subMenu: 'EDUCATION_01_MISSION'
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
        if (subTitle && this.props.sidebar2[subTitle]) {
            return this.props.sidebar2[subTitle].sub;
        }
        return this.props.sidebar2[Object.keys(this.props.sidebar2)[0]].sub;
    }

    drawListBox() {
        return (
            <div id="popupList" className={this.theme.list_area}>
                <ul className={this.theme.story_list}>{this.drawItems()}</ul>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.theme.pop_content}>
                    <SideBar type={this.props.mainType} sidebar={this.props.sidebar}
                    sidebar2={this.props.sidebar2} />
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
