import fetchJsonp from 'fetch-jsonp';
import { sprintf } from 'sprintf-js';
import config from '../config';

class FetchApi {

  /**
   * GET API
   *
   * @param  {String}  ressource
   * @param  {Object}  params
   * @param  {String}  format
   *
   * @return {Promise}
   */
  static get(resource, params, format = 'json') {
    const res = sprintf(config.api.routes[resource], params);
    const client_id = `?client_id=${config.api.key}`;
    const url = `${config.api.url}${res}${client_id}`;
    console.log(url);
    return fetchJsonp(url).then(function(response) {
      return response.json()
    }).then(function(json) {
      return json;
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    });
  }
}

export default FetchApi;