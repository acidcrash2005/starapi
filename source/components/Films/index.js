//Core
import React, {Component} from 'react';

export default ({list}) => {
    return (
        <>
            <h2>Films list</h2>
            {
                list.map(
                    (film, index) => (
                        <div
                            key = { `persone-film-${index}` }>
                            <ul>
                                <li><strong>Title</strong> {film.get('title')}</li>
                                <li><strong>Episode</strong> {film.get('episode_id')}</li>
                                <li><strong>Director</strong> {film.get('director')}</li>
                                <li><strong>Producer</strong> {film.get('producer')}</li>
                                <li><strong>Release</strong> {film.get('release_date')}</li>
                                <li>
                                    <p> {film.get('opening_crawl')}</p>
                                </li>
                            </ul>
                        </div>
                    ),
                )
            }

        </>
    );
};
