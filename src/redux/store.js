import { configureStore } from '@reduxjs/toolkit';
import userLoginSlice from './slices/userLoginSlice';
import userRegisterSlice from './slices/userRegisterSlice';
import videoDetailSlice from './slices/videoDetailSlice';
import youtubeIdSlice from './slices/youtubeIdSlice';
import relatedVideosSlice from './slices/relatedVideosSlice';
import videoCreditSlice from './slices/videoCreditSlice';

export default configureStore({
    reducer: {
        userLogin: userLoginSlice,
        userRegister: userRegisterSlice,
        videoDetail: videoDetailSlice,
        youtubeId: youtubeIdSlice,
        relatedVideos: relatedVideosSlice,
        videoCredit: videoCreditSlice,
    },
});
