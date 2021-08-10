import React from 'react';
import { connect } from 'react-redux';

import {} from 'pages/home/action';

import { ReactComponent as Plus } from 'assets/svg/plus.svg';

import './style.scss';

import EduItem from 'pages/home/components/EduItem';
import JobItem from 'pages/home/components/JobItem';
import Info from 'pages/home/components/Info';

import { addJobAction, addEduAction } from 'pages/home/action';

const Home = ({ edus, jobs, addJob, addEdu }) => {
  const handleAddJob = () => {
    addJob({
      id: jobs.length + 1,
      name: '',
      editName: '',
      title: '',
      editTitle: '',
    });
  };

  const handleAddEdu = () => {
    addEdu({
      id: edus + 1,
      name: '',
      editName: '',
      major: '',
      editMajor: '',
    });
  };

  return (
    <div className="profile__page">
      <div className="container profile__container">
        <h2 className="profile__title">Thông tin cá nhân</h2>
        <Info />

        <h2 className="profile__title">Học vấn</h2>
        <div className="profile__edus">
          {edus.map((item, index) => (
            <EduItem key={`edu__item__${item.id}`} data={item} index={index} />
          ))}

          <button type="button" className="profile__add" onClick={handleAddEdu}>
            <span className="icon">
              <Plus width="20px" height="20px" />
            </span>
            <span className="text">Thêm học vấn mới</span>
          </button>
        </div>
        <h2 className="profile__title">Công việc</h2>
        <div className="profile__edus">
          {jobs.map((item, index) => (
            <JobItem key={`job__item__${item.id}`} data={item} index={index} />
          ))}

          <button type="button" className="profile__add" onClick={handleAddJob}>
            <span className="icon">
              <Plus width="20px" height="20px" />
            </span>
            <span className="text">Thêm công việc mới</span>
          </button>
        </div>

        <div className="profile__actions">
          <button type="button" className="profile__save btn__main">
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ home }) => ({
  edus: home.data.edus,
  jobs: home.data.jobs,
});
const mapDispatchToProps = {
  addJob: addJobAction,
  addEdu: addEduAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
