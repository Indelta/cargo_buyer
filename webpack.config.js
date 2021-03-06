const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        // splitChunks: {
        //     chunks: 'all'
        // }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].${ext}`

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            },
        },
        'css-loader',                    
    ]

    if(extra) {
        loaders.push(extra)
    }
    return loaders
}

const optimizationImg = () => {
    let config = {
        loader: 'image-webpack-loader',
        options: {
        }
    }
    if (isProd) {
        config = {
            loader: 'image-webpack-loader',
            options: {
                mozjpeg: {
                    progressive: true,
                    quality: 70
                }
            }
        }
    }
    return config
}


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    optimization: optimization(),
    devServer: {
        port: 8081,
        hot: isDev,
        contentBase: path.join(__dirname, 'src'),
        proxy: {
            '/send.php': {
                target: 'http://localhost/cargo_buyer/dist/send.php'
            }
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
               collapseWhitespace: isProd 
            },
            favicon: './favicon.ico',
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/assets'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/leads.php'),
                to: path.resolve(__dirname, 'dist/')
            },
            {
                from: path.resolve(__dirname, 'src/send.php'),
                to: path.resolve(__dirname, 'dist/')
            },
        ]),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        // new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: './assets/img',
                                useRelativePath: true
                            }
                            
                        },
                        optimizationImg()
                    ]
            },
            {                
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: './assets/fonts/',
                    },
                  },
                ],
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,                
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }                               
            }            
        ]
    }
}