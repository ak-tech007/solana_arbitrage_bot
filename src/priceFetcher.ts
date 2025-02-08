import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export async function getPrice( tokenAddress: string): Promise<number> {


    const config: AxiosRequestConfig = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.jup.ag/price/v2?ids=${tokenAddress}`,
        headers: {},
      };
      
      try {
        const response: AxiosResponse = await axios.request(config);
        // console.log('API Response:', JSON.stringify(response.data, null, 2));

        // Extract the price from the response data
        const priceString: string = response.data.data[tokenAddress].price; // Access the price field
        const price: number = parseFloat(priceString); // Convert the price string to a number
        return price; // Return the price as a number
    } catch (error) {
        console.error('Error fetching price:', (error as AxiosError).message);
        throw error; // Re-throw the error to handle it elsewhere
    }
    
}
