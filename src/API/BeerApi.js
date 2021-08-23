import axios from 'axios'

export default class BeerApi {
  static async getAllBeer() {
    const response = await axios.get(
      'https://api.punkapi.com/v2/beers?per_page=80'
    )
    return response.data
  }
}
