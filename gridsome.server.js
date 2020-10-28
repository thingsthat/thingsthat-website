const fs = require('fs');
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

        // Add schema for home content.
        addSchemaTypes(`
            type Home implements Node {
                id: String
                data: HomeData
            }

            type HomeData {
                title: String
                header: String
                body: String
                projects: [Project]
            }

            type Project {
                name: String
                title: String
                summary: String
                url: String
                label: String
                loadingimage: String
                slides: [ProjectSlide]
            }

            type ProjectSlide {
                type: String
                src: ProjectSlideSrc
            }

            type ProjectSlideSrc {
                webm: String
                mp4: String
            }
        `);

        // Different document types
        const homeDocs = addCollection('Home');
        
        const contents = JSON.parse(fs.readFileSync('content.json'));

        for (const content of Object.values(contents)) {
                
            switch (content.type) {
                case 'home':
        
                    const node = {
                        id: content.id,
                        path: `/home`, 
                        uid: content.id,
                        data: content.data,
                    };
        
                    homeDocs.addNode(node);
                    
                    break;

            }
        }
 
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
