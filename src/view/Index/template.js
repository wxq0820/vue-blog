import blog from '../../api/blog'

export default {
  data () {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },
  created () {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndexBlog()
      .then(res => {
        this.blogs = res.data
        this.total = res.totalPage
        this.page = res.page
      })
  },
  methods: {
    onPageChange (newPage) {
      blog.getIndexBlog({ page: newPage })
        .then(res => {
          this.blogs = res.data
          this.total = res.totalPage
          this.page = res.page
          this.$router.push({ path: '/', query: newPage })
        })
    }
  },
}