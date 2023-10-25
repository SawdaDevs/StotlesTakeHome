import React from 'react';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { Buyer } from './Api';

const options: SelectProps['options'] = [];

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};
type Props = {
    buyers: Buyer[];
  };

export function RecordBuyersFilters(props: Props){
    const { buyers } = props;
    buyers.forEach((buyer =>{
      options.push({
            label:buyer.name,
            value: buyer.id
        })
    }));
    return (
        <>
            <Select
            mode="multiple"
            style={{ width: '50%' }}
            placeholder="Filter Buyer..."
            defaultValue={[]}
            onChange={handleChange}
            options={options}
            />
        </>
    );
}
  

