import React, { SFC, MouseEvent } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';
import Time from '../Time';
import Button from '../Button';
import AddButton from '../../../images/buttons/addPlayListButton.svg';
import { MusicType } from '../../redux/modules/music/types';

interface IProps {
    title : string;
    url : string;
    isSearching : boolean;
    addMusic? : (e : MouseEvent<HTMLDivElement>) => void;
    playMusic? : () => void;
    duration? : string;
    currentPlay : MusicType;
    idx : string;
};

const ItemPresenter : SFC<IProps> = ({ title, url, isSearching, addMusic, playMusic, duration, currentPlay, idx }) => (
    <div className={ styles.item } onClick={ playMusic }>
        <div className={ styles.musicInfo }>
            <Thumbnail className={ styles.thumbnail } thumbnail={ url } />
            <div className={ styles.musicTitleBox } title={ title }>
                <span className={ `${ styles.musicTitle } ${ !isSearching && currentPlay && currentPlay.id.videoId === idx ? styles.currentPlay : '' }` }>
                    { title }
                </span>
            </div>
        </div>
        {
            isSearching ? (
                <Button className={ styles.addMusicBtn } buttonName={ AddButton } clickEvent={ addMusic } />
            ) : (
                <Time duration={ duration } />
            )
        }
    </div>
);

export default ItemPresenter;