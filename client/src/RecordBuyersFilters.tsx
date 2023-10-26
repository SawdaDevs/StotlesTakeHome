import React from 'react';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { Buyer } from './Api';

const options: SelectProps['options'] = [];

type Props = {
    buyers: Buyer[];
    onChange: (newBuyerFilter:string[])=>void,
  };

export function RecordBuyersFilters(props: Props){
    const { buyers, onChange } = props;

    buyers.forEach((buyer =>{
      options.push({
            label:buyer.name,
            value: buyer.id
        })
    }));

    const handleSearchChange = (value: string[]) => {
        console.log(`selected ${value}`);
        onChange(value)
    
    };

    return (
        <>
            <Select
            mode="multiple"
            style={{ width: '50%' }}
            placeholder="Filter Buyer..."
            defaultValue={[]}
            onChange={handleSearchChange}
            options={options}
            />
        </>
    );
}
  

