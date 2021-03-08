import blog from '../../api/blog'
import marked from 'marked'

export default {
  data () {
    return {
      title: '',
      content: '',
      user: {},
      createdAt: ''
    }
  },
  created () {
    blog.getDetail({ blogId: this.$route.params.blogId })
      .then(res => {
        this.title = res.data.title
        this.content = res.data.content
        this.user = res.data.user
        this.createdAt = res.data.createdAt
      })
  },
  computed: {
    markdown () {
      return marked(this.content)
    }
  }
}