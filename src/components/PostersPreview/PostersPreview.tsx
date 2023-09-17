import React, {  useEffect } from 'react';

import styles from './PostersPreview.module.scss';


import { useAppDispatch, useAppSelector } from 'hooks';
import { creditsActions } from 'reduxRTK/slices';

import { PosterPreview } from './PosterPreview/PosterPreview';

export const PostersPreview = () => {
    const dispatch = useAppDispatch()
    const { credits } = useAppSelector(state => state.movie)

    const { current_credits, current_page, limit, total, prev, next } = useAppSelector(state => state.credits)
    
    useEffect(() => {
        const options = {
            current_credits: credits?.cast.slice(0, 5),
            current_page: 1,
            limit: 5,
            total: Math.ceil(credits?.cast?.length / 5),
            next: credits?.cast?.length > 5 ? 2 : null
        }
        dispatch(creditsActions.setCredits({
            ...options
        }))
    }, [credits?.cast, dispatch])

    const handlePrev = () => {
        if (current_page <= total) {
            dispatch(creditsActions.setPage({
                current_credits: credits?.cast.slice((current_page - 1) * limit - limit, (current_page - 1) * limit),
                current_page: current_page - 1,
                prev: current_page - 1,
                next: current_page + 1,
            }))
        }
    };

    const handleNext = () => {
        if (current_page < total) {
            dispatch(creditsActions.setPage({
                current_credits: credits?.cast.slice((current_page ) * limit, current_page * limit + limit),
                current_page: current_page + 1,
                prev: current_page,
                next: current_page + 2,
            }))
        }
    };

    if (!current_credits?.length) {
        return (
            <div>No actors</div>
        )
    }

    return (

        <div className={styles.posters}>
            <div className={styles.buttonContainer}>
                <button
                    className={styles.posters_button}
                    onClick={handlePrev}
                    disabled={current_page <= 1}
                >
                    prev
                </button>
                <button
                    className={styles.posters_button}
                    onClick={handleNext}
                    disabled={next > total}
                >
                    next
                </button>
            </div>
            <div className={styles.posters__carts} key={current_page}>
                {
                    current_credits && current_credits.map(item => <PosterPreview cast={item} key={item.id} />)
                }
            </div>
        </div>

    );
}
