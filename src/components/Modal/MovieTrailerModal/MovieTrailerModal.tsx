import React from 'react';

import './MovieTrailerModal.scss';

import { urls } from 'constants/';

interface IMovieTrailerModalProps {
    video: {
        key: string
        name: string
    }
    onClose: () => void
}

export const MovieTrailerModal = ({ video, onClose }: IMovieTrailerModalProps) => {
    const { key: trailerKey, name: trailerName } = video;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    X
                </button>
                <iframe
                    title={trailerName}
                    src={urls.youTube.base(trailerKey)}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};


