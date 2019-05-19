import React, { SFC, Ref } from 'react';
import styles from './styles.scss';
import Item from '../Item';
import Loading from '../Loading';
import { MusicType, IDType } from '../../redux/modules/music/types';

interface IProps {
    searchMusicList : [MusicType];
    musicList : [MusicType];
    isSearching : boolean;
    addMusic : (music : MusicType) => void;
    listBoxRef : Ref<HTMLDivElement>;
    listRef : Ref<HTMLDivElement>;
};

const returnId = (idObj : IDType) : string => {
    if(idObj.videoId) return idObj.videoId;

    if(idObj.channelId) return idObj.channelId;

    if(idObj.playlistId) return idObj.playlistId;
};

const ListPresenter : SFC<IProps> = ({ searchMusicList, musicList, isSearching, addMusic, listBoxRef, listRef }) => (
    <div className={ styles.listBox } ref={ listBoxRef }>
        <div className={ styles.list } ref={ listRef }>
            {
                isSearching ? (
                    <>
                        {
                            searchMusicList.map(music => 
                                <Item key={ `${ music.snippet.channelId }_${ returnId(music.id) }` } title={ music.snippet.title } 
                                    url={ music.snippet.thumbnails.medium.url ? music.snippet.thumbnails.medium.url : music.snippet.thumbnails.default.url } 
                                    addMusic={ () => addMusic(music) } />
                            )
                        }
                        <Loading />
                    </>
                ) : (
                    musicList.map(music => 
                        <Item key={ returnId(music.id) } title={ music.snippet.title } url={ music.snippet.thumbnails.medium.url } />
                    )
                )
            }
            <div className={ styles.listBackground }></div>
        </div>
    </div>
);

export default ListPresenter;