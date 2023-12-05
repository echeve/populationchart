import DataFilter from "./DataFilter";

describe('DataFilter', () => {
    const data = [
        { region: 'Europe', population: 100, name: 'Spain' },
        { region: 'Asia', population: 150, name: 'Japan' },
        { region: 'Europe', population: 200, name: 'Germany' },
        { region: 'Asia', population: 120, name: 'India' },
        { region: 'Africa', population: 80, name: 'Kenya' },
    ];

    const dataCounties = 
  
    describe('filterAndGroupByContinent', () => {
      it('should filter continents by population', () => {
        const result = DataFilter.filterAndGroupByContinent(data, 130);
        expect(result).toEqual({
          Europe: 300,
          Asia: 270,
        });
      });
  
      it('should return an empty object if population is too high', () => {
        const result = DataFilter.filterAndGroupByContinent(data, 600);
        expect(result).toEqual({});
      });
    });
  
    describe('filerByRegion', () => {
      it('should filter regions by continent and population', () => {
        const result = DataFilter.filerByRegion(data, 'Europe', 150);
        expect(result).toEqual({
          Germany: 200,
        });
      });
  
      it('should return an empty object if no regions match criteria', () => {
        const result = DataFilter.filerByRegion(data, 'Africa', 100);
        expect(result).toEqual({});
      });
    });
  
    describe('filterData', () => {
      it('should call filterByContinent if continent is falsy', () => {
        const spy = jest.spyOn(DataFilter, 'filterAndGroupByContinent');
        DataFilter.filterData(data, null, 100);
        expect(spy).toHaveBeenCalledWith(data, 100);
      });
  
      it('should call filerByContinentAhoraSiEsEspecial if continent is provided', () => {
        const spy = jest.spyOn(DataFilter, 'filerByRegion');
        DataFilter.filterData(data, 'Asia', 120);
        expect(spy).toHaveBeenCalledWith(data, 'Asia', 120);
      });
    });
  });