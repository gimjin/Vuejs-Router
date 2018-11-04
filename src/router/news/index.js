const NewsComponent = {
  props: ['title'],
  template: `
    <div>
      <h2>News Title: {{title}}</h2>
      <p>Today new is ...</p>
    </div>
  `
}

export default {
  path: 'news/:title',
  components: {
    default: NewsComponent
  },
  props: {
    default: true
  }
}
