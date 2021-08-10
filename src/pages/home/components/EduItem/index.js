import React, { useState } from 'react';
import { connect } from 'react-redux';

import { updateEduAction } from 'pages/home/action';

import { ReactComponent as Books } from 'assets/svg/books.svg';
import { ReactComponent as Pen } from 'assets/svg/pen.svg';

import './style.scss';

export const EduItem = ({ data, index, updateEdu }) => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleEdit = (e) => {
    const { value } = e.target;
    const key = e.target.getAttribute('name');
    updateEdu({
      index,
      data: {
        [key]: value,
      },
    });
  };

  const handleSave = () => {
    toggleEdit();
    updateEdu({
      index,
      data: {
        ...data,
        name: data.editName,
        major: data.editMajor,
      },
    });
  };

  return (
    <div className="edu__item">
      <div className={`edu__header ${edit && 'hide'}`}>
        <div className="edu__left">
          <div className="edu__icon">
            <Books width="20px" height="20px" />
          </div>
          <div className="edu__title">
            <div className="edu__name">{data.name}</div>
            <div className="edu__major">{data.major}</div>
          </div>
        </div>

        <div className="edu__right">
          <button type="button" className="edu__edit btn btn__main" onClick={toggleEdit}>
            <Pen width="16px" height="16px" />
          </button>
        </div>
      </div>

      <div className={`edu__content ${!edit && 'hide'}`}>
        <div className="edu__form">
          <div className="edu__control">
            <div className="edu__label">Trường</div>
            <input
              type="text"
              className="edu__input form-control"
              value={data.editName}
              name="editName"
              onChange={handleEdit}
            />
          </div>
          <div className="edu__control">
            <div className="edu__label">Ngành nghề</div>
            <input
              type="text"
              className="edu__input form-control"
              value={data.editMajor}
              name="editMajor"
              onChange={handleEdit}
            />
          </div>
        </div>

        <div className="edu__actions">
          <button type="button" className="edu__action edu__save btn btn__main" onClick={handleSave}>
            Xác nhận
          </button>

          <button type="button" className="edu__action edu__cancel" onClick={toggleEdit}>
            Huỷ bỏ
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  updateEdu: updateEduAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EduItem);
