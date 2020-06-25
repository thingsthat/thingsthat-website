function addStyleResource(rule) {
    rule.use('style-resource')
            .loader('style-resources-loader')
            .options({
                patterns: [
                    './node_modules/@thingsthat/thingsthatsass/dist/_mixins.scss',
                    './src/scss/fonts.scss',
                    './src/scss/mixins.scss',
                ],
            });
}

module.exports = {
    siteName: 'ThingsThat',
    titleTemplate: '%s',
    chainWebpack(config) {
        
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        
        types.forEach((type) => {
            addStyleResource(config.module.rule('scss').oneOf(type));
        });

    },
};
