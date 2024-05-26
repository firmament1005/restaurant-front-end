import React from 'react';
import Table from '../../components/Table';


const ByCastData = {
    header: [],
    data: []
}


const SalesCastTable: React.FC = () => {
    return (
        <div>
            <Table header={ByCastData.header} data={ByCastData.data} style='mt-5' />
        </div>
    )
}


export default SalesCastTable;