import React from 'react';
import type { SelectProps } from 'antd';
import { Select } from 'antd';

const options: SelectProps['options'] = [];

for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    label: value,
    value,
    disabled: i === 10,
  });
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};
type Props = {
    buyers: string;
  };

export function RecordBuyersFilters(props: Props){
    const { buyers } = props;

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
  

