import React from 'react';
import { connect } from 'react-redux';

const detailStyles = {
    textAlign: 'center'
}

const ul_styles = {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
}

const footer_styles = {
    backgroundColor: 'gray',
    marginTop: 10 + 'px'
}

const SongDetail = ({ song }) => {
    if (!song) {
        return (
            <div style={detailStyles}>
                <h3>Please Select A Song</h3>
            </div>
        ) 
    } else {
        return (
            <div style={detailStyles}>
                <h3>SONG DETAIL</h3>
                <ul style={ul_styles}>
                    <li>Title: {song.title}</li>
                    <li>Duration: {song.duration} min</li>
                </ul>
                <div style={footer_styles}>
                    <h5>Course Taught By Stephen Grider</h5>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);