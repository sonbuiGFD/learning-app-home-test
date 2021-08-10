import React, { useState } from 'react';
import { connect } from 'react-redux';

import { updateJobAction } from 'pages/home/action';
import { ReactComponent as Suitcase } from 'assets/svg/suitcase.svg';
import { ReactComponent as Pen } from 'assets/svg/pen.svg';

import './style.scss';

export const JobItem = ({ data, index, updateJob }) => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleEdit = (e) => {
    const { value } = e.target;
    const key = e.target.getAttribute('name');
    updateJob({
      index,
      data: {
        [key]: value,
      },
    });
  };

  const handleSave = () => {
    toggleEdit();
    updateJob({
      index,
      data: {
        ...data,
        name: data.editName,
        title: data.editTitle,
      },
    });
  };

  return (
    <div className="job__item">
      <div className={`job__header ${edit && 'hide'}`}>
        <div className="job__left">
          <div className="job__icon">
            <Suitcase width="20px" height="20px" />
          </div>
          <div className="job__title">
            <div className="job__name">{data.name}</div>
            <div className="job__major">{data.title}</div>
          </div>
        </div>

        <div className="job__right">
          <button type="button" className="job__edit btn btn__main" onClick={toggleEdit}>
            <Pen width="16px" height="16px" />
          </button>
        </div>
      </div>

      <div className={`job__content ${!edit && 'hide'}`}>
        <div className="job__form">
          <div className="job__control">
            <div className="job__label">Công ty</div>
            <input
              type="text"
              className="job__input form-control"
              value={data.editName}
              name="editName"
              onChange={handleEdit}
            />
          </div>
          <div className="job__control">
            <div className="job__label">Vị trí</div>
            <input
              type="text"
              className="job__input form-control"
              value={data.editTitle}
              name="editTitle"
              onChange={handleEdit}
            />
          </div>
        </div>

        <div className="job__actions">
          <button type="button" className="job__action job__save btn btn__main" onClick={handleSave}>
            Xác nhận
          </button>

          <button type="button" className="job__action job__cancel" onClick={toggleEdit}>
            Huỷ bỏ
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  updateJob: updateJobAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobItem);
