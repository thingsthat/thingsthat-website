const fs = require('fs');

module.exports = function(api) {

    let homeDocs;
    
    api.loadSource(async ({addCollection, addSchemaTypes, schema}) => {

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
        homeDocs = addCollection('Home');

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
        
                    if (homeDocs.getNodeById(node.id)) {
                        homeDocs.updateNode(node);
                    } else {
                        homeDocs.addNode(node);
                    }

                    break;

            }
        }
 
    });

    api.afterBuild(() => {

        console.log('Woohoo, it built!');
        
    });

};

