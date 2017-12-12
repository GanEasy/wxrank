<template>
  <div>
    <div class="weui-search-bar"  :class="{'weui-search-bar_focusing': isActive || currentValue}">
      <form class="weui-search-bar__form"  @submit.prevent="$emit('on-submit', value)" >
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input class="weui-search-bar__input" :placeholder="placeholder" v-model="currentValue" ref="searchInput">
          <a class="weui-icon-clear" @click="searchClear"></a>
        </div>
        <label class="weui-search-bar__label" @click="textClick" v-show="!isActive">
          <i class="weui-icon-search"></i>
          <span v-text="placeholder"></span>
        </label>
      </form>
      <a class="weui-search-bar__cancel-btn" @click="searchCancel" v-show="isActive" v-text="cancelText"></a>
    </div>

     <slot>
        <div class="weui-cells searchbar-result" v-show="show || currentValue &&result.length>0">
          <div class="weui-cell weui-cell_access" v-for="(item, key, index)  in result" :key="key" @click="handleResultClick(item)" >
            
            <!-- <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div> -->
            <div class="weui-cell__bd weui-cell_primary">
              <p>{{item.Title}}</p>
            </div>
            <div class="weui-cell__ft">
              {{item.Type|filterCategory}}
              
            </div>
          </div>
          <!-- <weui-cell v-for="(item, key, index) in result" :key="key" :title="item.Title" :isLink="true"  ></weui-cell> -->
        </div>
    </slot>
  </div>
</template>

<script>
  import WeuiCell from './Cell.vue'
  export default {
    name: 'weui-search',
    components: {
      WeuiCell
    },
    props: {
      value: String,
      autofocus: Boolean,
      show: Boolean,
      placeholder: {
        type: String,
        default: '搜索'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      result: Array
    },
    data () {
      return {
        isActive: false,
        currentValue: this.value
      }
    },
    mounted () {
      if (this.autofocus) {
        this.$refs.searchInput.focus()
        this.isActive = true
      }
    },
    methods: {
      textClick (e) {
        // focus the input
        this.$refs.searchInput.focus()
        this.isActive = true
      },
      handleResultClick (item) {
        
        this.searchCancel()
        this.$router.push({ name: 'cate', params: { id: item.ID }})

        // this.$emit('result-click', item) // just for compatibility
        // this.$emit('on-result-click', item)
      },
      // 清除输入
      searchClear () {
        this.currentValue = ''
        this.$refs.searchInput.focus()
      },
      // 取消搜索
      searchCancel () {
        this.currentValue = ''
        this.isActive = false
      }
    },
     filters: {
      filterCategory (t) {
        var ret = 'wxid'
        switch(t)
          {
          case 'wxid':
            ret = ''
            break;
          case 'cate':
            ret = '进入分类频道'
        return ret;
            break;
          case 'area':
            ret = '进入区域频道'
            break;
          default:
            ret = '??'
          }
        return ret;
      }
    },
    watch: {
      currentValue (val) {
        this.$emit('input', val)
      },   
      // result () {
      //   console.log('result',this.result)
      // },
      value (val) {
        this.currentValue = val
      }
    }
  }
</script>
