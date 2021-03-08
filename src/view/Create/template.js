import blog from '../../api/blog'

export default {
  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false
    }
  },
  methods: {
    onCreated () {
      blog.cerateBlog({ title: this.title, description: this.description, content: this.content, atIndex: this.atIndex })
        .then((res) => {
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}` })
        })
    }
  },
}