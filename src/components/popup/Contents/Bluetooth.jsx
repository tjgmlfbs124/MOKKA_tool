import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions';
import { EMIT_TYPES } from '@constants';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
var Noble = require('noble');

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
        this.theme = Theme.getStyle("popup");
        this.handleSubmit = this.handleSubmit.bind(this);
        this.webBleScanStart = this.webBleScanStart.bind(this);
        this.webBleScanStop = this.webBleScanStop.bind(this);
        this.onApplyItemClicked = this.onApplyItemClicked.bind(this);
        this.onItemClick = this.onItemClick.bind(this);

        this.state = {
            isUploading: false,
            excluded: []
        };

        Noble.on('discover', function(peripheral){
          const localName = peripheral.advertisement.localName;
          const uuid = peripheral.uuid;
          if(localName){
              _this.props.popupReducer.ble.push({
                dimention : {
                  height:290,
                  type:"png",
                  width:380
                },
                extension:".png",
                filename: localName,
                fileurl:"./src/uploads/story_img/0000Mr.moo.png",
                id:uuid,
                name:localName,
                type:"user",
                _id:uuid
              });
              const excluded = _this.state.excluded;
              _this.setState({ excluded });
          }
        })

    }

    handleSubmit(data) {
        this.props.triggerEvent(data);
    }

    onItemClick(item) {
      const index = this.getExcludedIndex(item);
      const excluded = this.state.excluded;

      if (this.props.options.multiSelect) {
          if (index >= 0) {
              excluded.splice(index, 1);
          } else {
              excluded.push(item);
          }
          this.setState({ excluded });
      } else {
          this.setState({ excluded: [item] });
      }
    }

    getExcludedIndex(item) {
        return this.state.excluded.findIndex((element) => element._id === item._id);
    }

    onApplyItemClicked(e) {
        e.preventDefault();
        const _this = this;
        let selected = [];
        if (this.props.options.multiSelect) {
            selected = this.props.popupReducer.ble.filter(
                (item) => !this.state.excluded.includes(item),
            );
        } else {
            selected = this.state.excluded;
        }
        this.props.triggerEvent('bluetooth', { uploads: selected }, true);
        selected.forEach((item, i) => {
          const _peripherals = Noble._peripherals[item.id] ;
          if(_peripherals){
            _peripherals.connect(function (err){
              if(err) console.log("connect err : " , err);
              else{
                _peripherals.discoverSomeServicesAndCharacteristics(['ffe0'], ['ffe1'], _this.onServicesAndCharacteristicsDiscovered);
              }

            });
          }
        });

    }

    onServicesAndCharacteristicsDiscovered(error, services, characteristics) {
        const _characteristics = characteristics[0];

        _characteristics.on('data', (data, isNotification) => {
          console.log("Received: " + data);
        });

        _characteristics.on('write', (err) => {
          if(err) console.log("write err : " , err)
        });
    }

    getWarnMsg() {
        return '';
    }

    webBleScanStart(e) {
        e.preventDefault();
        console.log("[BLE] StartScan");
        Noble.startScanning();
    }

    webBleScanStop(e) {
        e.preventDefault();
        Noble.stopScanning();
    }

    drawItems(uuid, localName) {
      return this.props.popupReducer.ble.map((item, index) => {
          let isExcluded = this.getExcludedIndex(item) >= 0;
          if (!this.props.options.multiSelect) {
              isExcluded = !isExcluded;
          }
          return (
              <Item
                  key={index}
                  item={item}
                  type={this.props.type}
                  baseUrl={this.props.popupReducer.baseUrl}
                  clickHandler={this.onItemClick}
                  excluded={isExcluded}
              />
          );
      });
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
                          {this.drawItems()}
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
const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
  triggerEvent: (event, data, hidden) => dispatch(triggerEvent(event, data, hidden))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bluetooth);
