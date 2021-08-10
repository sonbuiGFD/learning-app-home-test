import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { ICON_AFTER_POSITION } from 'react-dates/constants';
// import moment from 'moment';

import { updateInfoAction } from 'pages/home/action';

import './style.scss';

export const Info = ({ info, updateInfo }) => {
  const [forcused, setForcused] = useState(false);

  const isMobile = window.innerWidth < 768;
  let orientation = 'horizontal';
  if (isMobile) {
    orientation = 'vertical';
  }

  const handleChangeInput = (e) => {
    const { value } = e.target;
    const key = e.target.getAttribute('name');
    updateInfo({
      [key]: value,
    });
  };

  const handleChangeDate = (date) => {
    updateInfo({
      dob: date,
    });
  };

  return (
    <div className="profile__info">
      <div className="info__form row">
        <div className="col-md-6">
          <div className="info__item">
            <div className="info__label">Tên hiển thị</div>
            <input
              type="text"
              value={info.name}
              name="name"
              onChange={handleChangeInput}
              className="info__input form-control"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="info__item">
            <div className="info__label">Email</div>
            <input
              type="email"
              value={info.email}
              name="email"
              onChange={handleChangeInput}
              className="info__input form-control"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="info__item">
            <div className="info__label">Ngày tháng năm sinh</div>
            <SingleDatePicker
              date={info.dob}
              onDateChange={handleChangeDate}
              focused={forcused}
              onFocusChange={({ focused }) => setForcused(focused)}
              id="your_unique_id"
              noBorder
              showDefaultInputIcon={true}
              inputIconPosition={ICON_AFTER_POSITION}
              placeholder="DD/MM/YY"
              orientation={orientation}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="info__item">
            <div className="info__label">Số chứng minh thư</div>
            <input
              type="text"
              value={info.cccd}
              name="cccd"
              onChange={handleChangeInput}
              className="info__input form-control"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ home }) => ({
  info: home.data.info,
});

const mapDispatchToProps = {
  updateInfo: updateInfoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
