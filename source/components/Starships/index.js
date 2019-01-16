//Core
import React, {Component} from 'react';

export default ({list}) => {
    return (
        <>
            <h2>Starships list</h2>
            {
                list.map(
                    (starship, index) => (
                        <div
                            key = { `persone-starships-${index}` }>
                            <ul>
                                <li><strong>Name</strong> {starship.get('name')}</li>
                                <li><strong>Model</strong> {starship.get('model')}</li>
                                <li><strong>Manufacturer</strong> {starship.get('manufacturer')}</li>
                                <li><strong>Cost in credits</strong> {starship.get('cost_in_credits')}</li>
                                <li><strong>Length</strong> {starship.get('length')}</li>
                                <li><strong>Max atmosphering speed</strong> {starship.get('max_atmosphering_speed')}</li>
                            </ul>
                        </div>
                    ),
                )
            }

        </>
    );
};
