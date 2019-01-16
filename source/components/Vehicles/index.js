//Core
import React, {Component} from 'react';

export default ({list}) => {
    return (
        <>
            <h2>Vehicles list</h2>
            {
                list.map(
                    (vehicle, index) => (
                        <div
                            key = { `persone-vehicle-${index}` }>
                            <ul>
                                <li><strong>Name</strong> {vehicle.get('name')}</li>
                                <li><strong>Model</strong> {vehicle.get('model')}</li>
                                <li><strong>Manufacturer</strong> {vehicle.get('manufacturer')}</li>
                                <li><strong>Cost in credits</strong> {vehicle.get('cost_in_credits')}</li>
                                <li><strong>Length</strong> {vehicle.get('length')}</li>
                                <li><strong>Max atmosphering speed</strong> {vehicle.get('max_atmosphering_speed')}</li>
                            </ul>
                        </div>
                    ),
                )
            }

        </>
    );
};
