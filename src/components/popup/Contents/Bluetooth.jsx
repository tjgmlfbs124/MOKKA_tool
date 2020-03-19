import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions';
import { EMIT_TYPES } from '@constants';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
var Noble = require('noble');
console.log("noBle : " , Noble);

// stateChange 바인딩
Noble.on('stateChange', function(state){
  console.log("state : ", state);
})
class Item extends Component {
    constructor(props) {
        super(props);
        this.theme = Theme.getStyle('popup');
        this.onClickItem = this.onClickItem.bind(this);
    }

    drawImage() {
        if (this.props.type && this.props.type === 'sound') {
            return <div className={`${this.theme.thmb} ${this.theme.imico_pop_sound_thmb}`}>&nbsp;</div>;
        }
        const { filename, fileurl } = this.props.item;
        let thumb;
        if (fileurl) {
            thumb = fileurl.thumb || fileurl;
        }
        return (
            <div className={this.theme.thmb}>
                <img src={thumb || CommonUtils.createImageUrl(filename, this.props.baseUrl)} alt=""/>
            </div>
        );
    }

    onClickItem(e) {
        e.preventDefault();
        this.props.clickHandler(this.props.item);
    }

    render() {
        return (
            <li className={CommonUtils.toggleClass(this.props.excluded, '', this.theme.on)}>
                <a href="#NULL" className={this.theme.link} onClick={this.onClickItem}>
                    {this.drawImage()}
                    <em className={this.theme.sjt}>{this.props.item.name}</em>
                </a>
            </li>
        );
    }
}

class Bluetooth extends Component {
    constructor(props) {
        super(props);
        const _this = this;
        console.log("props : " , props);
        this.theme = Theme.getStyle("popup");
        this.handleSubmit = this.handleSubmit.bind(this);
        this.webBleScanStart = this.webBleScanStart.bind(this);
        this.webBleScanStop = this.webBleScanStop.bind(this);
        this.onApplyItemClicked = this.onApplyItemClicked.bind(this);
        this.onItemClick = this.onItemClick.bind(this);

        this.state = {
            isUploading: false,
            excluded: [],
            bleList:[],
        };

        Noble.on('discover', function(peripheral){
          if(peripheral.advertisement.localName){
            var item = _this.drawItems(peripheral.uuid, peripheral.advertisement.localName);
            const excluded = _this.state.excluded;

            _this.state.bleList.push(item);
            _this.state.bleList.map((list) =>
              <Item>list</Item>
            );
            _this.setState({ excluded });
            _this.state.bleList.push(this.drawItems());
            _this.state.bleList.map((list) =>
              <Item>list</Item>
            );
          }
        })

    }

    handleSubmit(data) {
        this.props.triggerEvent(data);
    }

    onItemClick(item) {
        console.log("item : " , item);
        const index = this.getExcludedIndex(item);
        const excluded = this.state.excluded;
        const bleList = this.state.bleList;

        if (this.props.options.multiSelect) {
            if (index >= 0) {
                excluded.splice(index, 1);
                console.log("[1] excluded : " , excluded );
            } else {
                excluded.push(item);
                console.log("[2] excluded : " , excluded);
            }
            this.setState({ excluded, bleList });
        } else {
            this.setState({ excluded: [item] });
            console.log("excluded: [item]  : " , [item] );
        }

    }

    getExcludedIndex(item) {
        return this.state.excluded.findIndex((element) => element._id === item._id);
    }

    onApplyItemClicked(e) {
        e.preventDefault();
        let selected = [];
        selected.push({
          dimension :{
            height:1,
            type:"png",
            width:1
          },
          extension : ".png",
          filename : "fe1qusijk7jz6ai60nfc12c01c378367",
          fileurl : "./uploads/story_img/00001x1.png",
          objectType: 'bluetooth', //@SEO type을 정해주고, Entry.playgorund에서 type에 따른 분류를 처리.
          name:"블루투스",
          type:"user",
          _id:"gooz"
        });
        // Entry.EntryModalHelper에서 'bluetooth' key 값
        this.props.triggerEvent('bluetooth', { uploads: selected }, true);
    }

    getWarnMsg() {
        return '';
    }


    webBleScanStart(e) {
        e.preventDefault();
        console.log("startScan@@@@");
        Noble.startScanning();
    }

    drawItems(item, uuid, localName) {
      console.log("!!!!");
      var _item = item;
      console.log("_item : " , _item);
      var id = Math.random().toString(36).substr(2, 4);
      if(!_item){
        _item = {
            dimension : {
              height: 283,
              type:"png",
              width:425
            },
            extension : ".png",
            filename : "j3a3advak7vg1m1905lo12c01cb28ikz",
            fileurl : "./src/uploads/story_img/0000Mr.moo.png",
            id: id,
            name: id,
            type:"user",
            _id: id
        }
      }
      let isExcluded = this.getExcludedIndex(item) >= 0;
      if (!this.props.options.multiSelect) {
          isExcluded = !isExcluded;
      }

      return (
          <Item
              key={_item._id}
              item={_item}
              type={_item.type}
              baseUrl={_item.fileurl}
              clickHandler={this.onItemClick}
              excluded={isExcluded}
          />
      );
    }

    webBleScanStop(e) {
        e.preventDefault();
        Noble.stopScanning();
        // this.drawItems();
        var item = this.drawItems(null, Math.random().toString(36) .substr(2, 8), (Math.random().toString(36) .substr(2, 4)));
        const excluded = this.state.excluded;
        this.state.bleList.push(item);
        this.state.bleList.map((list) =>
          <Item>list</Item>
        );
        this.setState({ excluded });
        console.log("this : " , this);
        console.log("this.props.popupReducer.uploads : " , this.props.popupReducer.uploads);
        console.log("this.state.bleList : " , this.state.bleList);
    }

    render() {
        return (
          <React.Fragment>
              <section className={`${this.theme.pop_content} ${this.theme.file_add_list_content}`}>
              <div className={this.theme.section_cont}>
                  <p className={`${this.theme.caution} ${this.theme.imico_pop_caution}`}>
                      {this.getWarnMsg()}
                  </p>

                  <div
                      className={`${this.theme.list_area} ${CommonUtils.toggleClass(
                          this.props.type === 'sound',
                          this.theme.sound_type,
                      )}`}>
                      <ul className={this.theme.obj_list}>
                          {this.state.bleList}
                          {/* [D] 오브젝트 링크가 클릭되면 li에 on  추가 */}
                      </ul>
                  </div>
              </div>
              </section>

              <div className={this.theme.pop_btn_box}>
                  <a href="#NULL" className={this.theme.active} onClick={this.webBleScanStart}>
                      {CommonUtils.getLang('Buttons.scanStart')}
                  </a>
                  <a href="#NULL" onClick={(e) => {
                      e.preventDefault();
                      this.props.triggerEvent('close', null, true);
                  }}>
                      {CommonUtils.getLang('Buttons.cancel')}
                  </a>
                  <a href="#NULL" className={this.theme.active} onClick={this.onApplyItemClicked}>
                      {CommonUtils.getLang('Buttons.add')}
                  </a>
                  <a href="#NULL" className={this.theme.active} onClick={this.webBleScanStop}>
                      {CommonUtils.getLang('Buttons.scanStop')}
                  </a>
              </div>
          </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  triggerEvent: (event, data, hidden) => dispatch(triggerEvent(event, data, hidden))
});

export default connect(
    null,
    mapDispatchToProps
)(Bluetooth);
