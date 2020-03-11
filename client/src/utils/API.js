import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getNews: function (query) {
    return axios.get(`
      http://newsapi.org/v2/top-headlines?country=us${query}&pageSize=100&apiKey=762b66aa0a224c9784f486b5e8720eff
     `);
  },
  getHeadlines: function(){
    return axios.get(`http://newsapi.org/v2/sources?apiKey=762b66aa0a224c9784f486b5e8720eff`)
  },
  logIn: function(params){
    return axios.post('/api/login')
  },
  signUp: function(params){
    return axios.post('/api/signup')
  }
};
