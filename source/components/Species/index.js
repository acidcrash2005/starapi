//Core
import React, {Component} from 'react';

export default ({list}) => {
    return (
        <>
            {
                list.map(
                    (species, index) => (
                        <dl
                            className = 'row'
                            key = { `persone-species-${index}` }>
                            <dt className = 'col-sm-6'>Name</dt>
                            <dd className = 'col-sm-6'>{species.get('name')}</dd>

                            <dt className = 'col-sm-6'>Classification</dt>
                            <dd className = 'col-sm-6'>{species.get('classification')}</dd>

                            <dt className = 'col-sm-6'>Average Height</dt>
                            <dd className = 'col-sm-6'>{species.get('average_height')}</dd>
                        </dl>
                    ),
                )
            }
        </>
    );
};
