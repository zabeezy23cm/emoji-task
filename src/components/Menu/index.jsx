import React from 'react';
import './Menu.css'
import NavBar from "../NavBar";
import TableInfo from "../TableInfo";

const Index = () => {
    return (
        <div className='parent'>
            <div className='firstChild'>
                <NavBar/>
            </div>
            <div className='secondChild'>
            <TableInfo/>
            {/* merge test */}
            </div>
        </div>
    );
};

export default Index;