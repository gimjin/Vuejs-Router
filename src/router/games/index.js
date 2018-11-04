function myProps(route) {
  return {
    title: route.params.name + '- tencent game.'
  }
}

const GamesComponent = {
  props: {
    title: {
      type: String,
      default: 'Games!'
    }
  },
  template: `
    <div>
      <h2>Games Title: {{title}}</h2>
      <p>My lovely game is ...</p>
    </div>
  `
}

export default {
  path: 'games/:name',
  component: GamesComponent,
  props: myProps
}
