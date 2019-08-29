module.exports = {
  name: 'ndd',
  run: async toolbox => {
    const { print } = toolbox


    print.info('Welcome to nodebox.');
    print.info("Try running 'ndb new <PROJECT_NAME>' on your terminal!")
  }
}