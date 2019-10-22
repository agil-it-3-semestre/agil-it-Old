import React from 'react';
import ReactDOM from 'react-dom';
import { SVGIcon, SelectField } from 'react-md';
import PropTypes from 'prop-types';

const C_SelectField = () => {

    const Users = [
        {
            name: 'Lucas',
            value: 'A',
        }, 
        {
            name: 'Márcio',
            value: 'B',
        }, 
        {
            name: 'Julio',
            value: 'C',
        }, 
    ];

    return (
        <div className="md-grid">
            <SelectField
                id="technical"
                label="Técnicos"
                placeholder="Selecionar Técnico"
                className="md-cell"
                menuItems={Users}
            />
        </div>
    );
}


export default C_SelectField;