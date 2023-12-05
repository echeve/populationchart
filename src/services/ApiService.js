import axiosInstance from './AxiosInstance';
import {RegionModel} from '../models/Index';

const ApiService = {
  async fetchData() {
    try {
    const response = await axiosInstance.get('/all?fields=region,name,population');
    const regionModel = response.data.map(item => new RegionModel ({
        region: item.region,
        name: item.name.common,
        population: item.population
    }));
    return regionModel;
    } catch (error) {
        console.log(error);
      throw new Error('Error fetching data');
    }
  },
};

export default ApiService;