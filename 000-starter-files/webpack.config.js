module.exports = {
     entry: './source/client.js',
     output: {
         path: './',
         filename: 'index.js',
     },
     devServer:{
        inline:true,
        contentBase:'./public',
        port:3000
     },

     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
 }