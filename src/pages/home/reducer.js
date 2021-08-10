import update from 'immutability-helper';

import { UPDATE_INFO_ACTION, UPDATE_EDU_ACTION, UPDATE_JOB_ACTION, ADD_EDU_ACTION, ADD_JOB_ACTION } from './action';

const initialState = {
  ui: {
    loading: false,
  },

  data: {
    info: {
      name: 'Nguyễn Văn A',
      email: 'anguyen@gmail.com',
      dob: null,
      cccd: '272172928',
    },
    edus: [
      {
        id: 0,
        name: 'Đại học Bách Khoa TP.Hồ Chí Minh',
        editName: 'Đại học Bách Khoa TP.Hồ Chí Minh',
        major: 'Công Nghệ Thông Tin',
        editMajor: 'Công Nghệ Thông Tin',
      },
      {
        id: 1,
        name: 'Trường Đại Học Tôn Đức Thắng',
        editName: 'Trường Đại Học Tôn Đức Thắng',
        major: 'Công Nghệ Thông Tin',
        editMajor: 'Công Nghệ Thông Tin',
      },
    ],
    jobs: [
      {
        id: 0,
        name: 'Đại học Bách Khoa TP.Hồ Chí Minh',
        editName: 'Đại học Bách Khoa TP.Hồ Chí Minh',
        title: 'Công Nghệ Thông Tin',
        editTitle: 'Công Nghệ Thông Tin',
      },
    ],
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_INFO_ACTION:
      return update(state, {
        data: {
          info: {
            $merge: payload,
          },
        },
      });
    case UPDATE_EDU_ACTION:
      return update(state, {
        data: {
          edus: {
            [payload.index]: { $merge: payload.data },
          },
        },
      });
    case UPDATE_JOB_ACTION:
      return update(state, {
        data: {
          jobs: {
            [payload.index]: { $merge: payload.data },
          },
        },
      });
    case ADD_EDU_ACTION:
      return update(state, {
        data: {
          edus: {
            $push: [payload],
          },
        },
      });
    case ADD_JOB_ACTION:
      return update(state, {
        data: {
          jobs: {
            $push: [payload],
          },
        },
      });
    default:
      return state;
  }
};

export default reducer;
