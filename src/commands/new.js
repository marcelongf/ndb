module.exports = {
    name: 'new',
    run: async toolbox => {
      const {
        parameters,
        template: { generate },
        print: { info, success, error }
      } = toolbox

      const projectName = parameters.first;

      if(!projectName){
        error('A new node project needs a name, dude!');
        error(`Try 'ndb new project_name'...`)
        return
      }

      toolbox.setProjectName(projectName);

      //Generates the server.js file
      info(`Generating a 'server.js' file in ${projectName}/src...`);
      await generate({
        template: 'src/server_template.js.ejs',
        target: `${projectName}/src/server.js`,
      })
      success('File server.js created')

      //Generates the router.js
      info(`Generating a 'router.js' file in ${projectName}/src...`);
      await generate({
        template: 'src/router_template.js.ejs',
        target: `${projectName}/src/routes.js`,
      })
      success('File router.js created')

      //Generates the package.json with all the needed dependencies
      info(`Generating a 'package.json' file in ./${projectName}...`);
      await generate({
        template: 'package-json.js.ejs',
        target: `${projectName}/package.json`,
        props: { projectName }
      })
      success('File router.js created')

      //This code generates the HelloWorld for the first project
      if(parameters.second != 'clean'){
        info(`Generating a controller file in ./${projectName}/src/controllers...`);
        await generate({
          template: 'src/controllers/help_controller.js.ejs',
          target: `${projectName}/src/controllers/HelpController.js`,
        })
        success('Controller file created')

        info(`Generating a model file in ./${projectName}/src/models...`);
        await generate({
          template: 'src/models/animal_model.js.ejs',
          target: `${projectName}/src/models/Animal.js`,
        })
        success('Model file created')

        info(`Generating a controller file in ./${projectName}/src/controllers...`);
        await generate({
          template: 'src/controllers/animal_controller.js.ejs',
          target: `${projectName}/src/controllers/AnimalController.js`,
        })
        success('Controller file created')
      }
  
      info('A new node.js dev enviroment is being created...')
    }
  }
  