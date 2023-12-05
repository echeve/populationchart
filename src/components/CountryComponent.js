import BarChart from "./BarChart";
import styled from 'styled-components';
import DataFilter from "../utils/DataFilter";
import React, { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';


const ChartWrapper = styled.div`
  margin: 2.25em; 
  height: 40em;
`;

const H2Wrapper = styled.h2`
    color:white;
`;

const InputWrapper = styled(NumericFormat)`
  width: 12.5em;
  padding: 0.5em;
  font-size: 1em;
  border: 0.1em solid #ccc;
  border-radius: 0.2em;
  margin:2em;
  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 0 0.2em rgba(0, 0, 255, 0.5);
  }
`;

function CountryComponent({globalData, continent, population}){
    const [filteredData, setFilteredData] = useState([]);
    const [populationFilter, setPopulationFilter] = useState(population);
    
    useEffect(() => {
        setPopulationFilter(population);
      }, [population]);

    useEffect(() => {
        const filtered = DataFilter.filterData(globalData, continent, populationFilter);
        setFilteredData(filtered);
      }, [globalData, continent, populationFilter]);

      const handleInputChange = (newValue) => {
        setPopulationFilter(newValue);
      };

    return (
    <ChartWrapper>
        {continent ? <H2Wrapper>{continent}</H2Wrapper> : <H2Wrapper>Global</H2Wrapper>}
        <InputWrapper 
                thousandSeparator={true}
                allowNegative={false}
                allowLeadingZeros={false}
                onValueChange={({ value }) => handleInputChange(value)}
                placeholder="Enter minimum population"
                value={populationFilter}
                defaultValue={''}
                />
    <BarChart regionData={filteredData}/>
    </ChartWrapper>
        );
}
 
export default CountryComponent;