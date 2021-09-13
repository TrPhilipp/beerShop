import axios from 'axios'

const BEER_URl = 'https://api.punkapi.com/v2/beers?per_page=80'

export default class BeerApi {
  static async getAllBeer() {
    const response = await axios.get(BEER_URl)
    return response.data
  }
}
