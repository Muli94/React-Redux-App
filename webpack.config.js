module.exports={
    entry:[
        './src/app.js'
    ],
    output:{
        path:__dirname,
        publicPath: '/',
        filename: 'src/out.js'
    },
    module:{
        loaders:[{
            exclude: /node_modules/,
            loader:'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    devServer:{
        historyApiFallback:true,
        contentBase: './',
        inline: true,
        port:3000
    }
};