if( process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://admin:admin@ds241055.mlab.com:41055/vidjot-db'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}