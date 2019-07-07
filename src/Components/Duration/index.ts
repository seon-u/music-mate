import Duration from './DurationContainer';
import { connect } from 'react-redux';
import { MusicState, MusicType, SetCurrentPlayDurationAction, SetPlayerStateAction, SetCurrentPlayAction, SetCurrentIndexAction } from '../../redux/modules/music/types';
import { Dispatch } from 'redux';
import { setPlayerState, setCurrentPlay, setCurrentIndex, getCurrentPlayDuration } from '../../redux/modules/music/music';
import withMusic from '../../HoC/withMusic';
import { ThunkDispatch } from 'redux-thunk';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    currentPlayDuration : string;
    playerState : number;
    musicList : MusicType[];
    currentIndex : number;
    isRepeatAll : boolean;
};

interface IMapDispatchToProps {
    setPlayerState : (playerState : number) => void;
    setCurrentPlay : (music : MusicType) => void;
    getCurrentPlayDuration : (id : string) => void;
    setCurrentIndex : (index : number) => void;
}

type DispatchActions = SetPlayerStateAction | SetCurrentPlayDurationAction | SetCurrentPlayAction | SetCurrentIndexAction;

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    currentPlayDuration : state.music.currentPlayDuration,
    playerState : state.music.playerState,
    musicList : state.music.musicList,
    currentIndex : state.music.currentIndex,
    isRepeatAll : state.music.isRepeatAll
});

const mapDispatchToProps = (dispatch : ThunkDispatch<{}, {}, DispatchActions>) : IMapDispatchToProps => ({
    setPlayerState : (playerState : number) => dispatch(setPlayerState(playerState)),
    setCurrentPlay : (music : MusicType) => dispatch(setCurrentPlay(music)),
    getCurrentPlayDuration : (id : string) => dispatch(getCurrentPlayDuration(id)),
    setCurrentIndex : (index : number) => dispatch(setCurrentIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(withMusic(Duration));