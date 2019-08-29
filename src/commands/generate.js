module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info, success, error }
    } = toolbox

    const commandType = parameters.first;

    const atributes = parameters.array;
    atributes.shift();

    success(atributes);

    const display = atributes.reduce((acc, curr) => {
      error(curr)
      let [name, type] = curr.split(":");
      
      success(name);
      success(type)

      return {...acc, 
        name: {
          type,
        }
      }[ { obj: true, } ]
    });

    console.log(display);

    /*await generate({
      template: './src/models/default-model.js.ejs',
      target: `models/${name}.js`,
      props: { name }
    })

    info(`Generated file at models/${name}-model.js`)*/
  }
}
