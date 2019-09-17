module.exports = [{
    module: {
        rules: [
            {
                use: {
                    options: {
                        presets: [
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }
}];
