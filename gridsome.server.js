const _ = require('lodash');

module.exports = function(api) {
    
    api.loadSource(async ({addCollection, addSchemaTypes, schema}) => {

        // Replace variables
        const newTemplate = templateReplace(api._app.config.htmlTemplate, {
            env: process.env,
        });
        
        const newConfig = Object.assign({}, api._app.config, {
            htmlTemplate: newTemplate,
        });

        api._app.config = newConfig;
 
    });

    api.afterBuild(() => {

        console.log('Woohoo, it built!');
        
    });

};

const tokenMatch = /\${([0-9a-zA-Z_.]+)\}/g;

function templateReplace(template, values) {

    const tokens = template.match(tokenMatch) || [];
    
    for (const token of tokens) {
        
        const path = token.substr(2, token.length - 3);
        const value = _.get(values, path);

        if (value !== undefined) {
            template = template.replace(token, value);
        }

    }

    return template;

}
