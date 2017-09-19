module.exports={
    entry:[
        './src/index.jsx'
    ],
    output:{
        path:__dirname,
        publicPath: '/',
        filename: 'src/out.js'
    },
    module:{
        loaders:[{
            test: /\.(js|jsx)$/, exclude: /node_modules/,
            loader:'babel-loader',
            query: {
                presets: ['es2015', 'stage-1', 'react']
            }
        }]
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    devServer:{
        historyApiFallback:true,
        contentBase: './',
        inline: true,
        port:3000
    }
};