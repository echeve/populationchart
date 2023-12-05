class DataFilter {
    static filterAndGroupByContinent(data, population){
        const groupedContinents = data
        .reduce((result, item) => {
            if (!result[item.region]) {
                result[item.region] = item.population;
            } else {
                result[item.region] += item.population;
            }
            return result;
            }, {});
            console.log('groupedContinents');

        const filteredContinents = Object.keys(groupedContinents).reduce((acc, region) => {
            if (groupedContinents[region] >= population) {
              acc[region] = groupedContinents[region];
            }
            return acc;
          }, {});
        return filteredContinents;
    }
    
    static filerByRegion(data, continent, population){
        const filteredRegions = data
        .filter(region => region.region === continent)
        .filter(region => region.population >= population)
        .reduce((result, region) => {
            result[region.name] = region.population;
            return result;
        }, {});
        return filteredRegions;
    }

    static filterData(data, continent, population)
    {
        if (!continent)
        {
            return this.filterAndGroupByContinent(data, population);
        } else {
            return this.filerByRegion(data, continent, population)
        }
    }
}


export default DataFilter