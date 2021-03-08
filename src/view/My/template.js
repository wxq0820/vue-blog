import blog from '../../api/blog'
import { mapGetters } from 'vuex';


export default {
  data () {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },
  created () {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id, { page: this.page })
      .then(res => {
        this.page = res.page
        this.total = res.totalPage
        this.blogs = res.data
      })
  },
  computed: {
    ...mapGetters([
      'user',
    ])
  },
  methods: {
    onPageChange (newPage) {
      blog.getBlogsByUserId(this.user.id, { page: newPage })
        .then(res => {
          this.blogs = res.data
          this.total = res.totalPage
          this.page = res.page
          this.$router.push({ path: '/my', query: newPage })
        })
    },
    onDelete (blogId) {
      this.$confirm('此操作将永久删除该文章，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return blog.deleteBlog({ blogId })
      }).then(() => {
        this.$message.success('删除成功')
        this.blogs = this.blogs.filter(blog => blog.id != blogId)
      })
    },
    splitDate (dateStr) {
      let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    }
  },
}