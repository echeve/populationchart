import axiosInstance from './AxiosInstance';
import ApiService from './ApiService';

jest.mock('./AxiosInstance', () => ({
    get: jest.fn(),
  }));


describe('ApiService', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('should fetch data correctly', async () => {
    const mockedResponse = {
      data: [
        { region: 'Europe', name: { common: 'France' }, population: 67000000 },
        { region: 'Asia', name: { common: 'Iran' }, population: 77000000 },
        { region: 'Africa', name: { common: 'Niger' }, population: 87000000 },
        { region: 'America', name: { common: 'Argentina' }, population: 97000000 },
    ],
    };

    axiosInstance.get.mockResolvedValueOnce(mockedResponse); 
    const result = await ApiService.fetchData();

    expect(axiosInstance.get).toHaveBeenCalledWith('/all?fields=region,name,population');
    expect(result).toEqual([
        {
          region: 'Europe',
          name: 'France',
          population: 67000000,
        },
        {
            region: 'Asia',
            name: 'Iran',
            population: 77000000,
          },
          {
            region: 'Africa',
            name: 'Niger',
            population: 87000000,
          },
          {
            region: 'America',
            name: 'Argentina',
            population: 97000000,
          },    
        ]);
  });

  it('should handle fetch error', async () => {
    const errorMessage = 'Error fetching data';
    axiosInstance.get.mockRejectedValueOnce(new Error(errorMessage)); 

    await expect(ApiService.fetchData()).rejects.toThrow(errorMessage);
  });
});