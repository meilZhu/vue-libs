<template>
  <div>
    <!--使用draggable组件-->
    <div class="itxst">
      <div style="padding-left:6px">clone例子,左边往右边拖动试试看</div>
      <div class="col">
        <draggable
          v-model="arr1"
          @end="end1"
          :options="{ group: { name: 'itxst', pull: 'clone' }, sort: true }"
          animation="300"
          :move="onMove"
        >
          <transition-group>
            <div
              :class="item.id == 1 ? 'item forbid' : 'item'"
              v-for="item in arr1"
              :key="item.id"
            >
              {{ item.name }}
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="col">
        <draggable
          v-model="arr2"
          @end="end2"
          group="itxst"
          animation="300"
          :move="onMove"
        >
          <transition-group>
            <div
              :class="item.id == 12 ? 'item2 forbid' : 'item2'"
              v-for="item in arr2"
              :key="item.id"
            >
              {{ item.name }}
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
//导入draggable组件
import draggable from 'vuedraggable'
export default {
  //注册draggable组件
  components: {
    draggable,
  },
  data() {
    return {
      //定义要被拖拽对象的数组
      arr1: [
        { id: 1, name: 'www.itxst.com（不允许停靠）' },
        { id: 2, name: 'www.jd.com' },
        { id: 3, name: 'www.baidu.com' },
        { id: 5, name: 'www.google.com' },
        { id: 4, name: 'www.taobao.com（不允许拖拽）' },
      ],
      arr2: [{ id: 11, name: '常用菜单' }],
      moveId: -1,
    }
  },
  methods: {
    //左边往右边拖动时的事件
    end1(e) {
      console.log(e)
      var that = this
      var items = this.arr2.filter(function(m) {
        return m.id == that.moveId
      })
      //如果左边
      if (items.length < 2) return
      this.arr2.splice(e.newDraggableIndex, 1)
    },
    //右边往左边拖动时的事件
    end2(e) {
      console.log(e)
      var that = this
      var items = this.arr1.filter(function(m) {
        return m.id == that.moveId
      })
      //如果左边
      if (items.length < 2) return
      this.arr1.splice(e.newDraggableIndex, 1)
    },
    //move回调方法
    onMove(e) {
      this.moveId = e.relatedContext.element.id
      //不允许停靠
      if (e.relatedContext.element.id == 1) return false
      //不允许拖拽
      if (e.draggedContext.element.id == 4) return false
      if (e.draggedContext.element.id == 11) return false
      return true
    },
  },
}
Array.prototype.filter =
  Array.prototype.filter ||
  function(func) {
    var arr = this
    var r = []
    for (var i = 0; i < arr.length; i++) {
      if (func(arr[i], i, arr)) {
        r.push(arr[i])
      }
    }
    return r
  }
</script>
<style scoped>
.itxst {
  margin: 10px;
  text-align: left;
}
.col {
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}
.col + .col {
  margin-left: 10px;
}
.item {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: #f1f1f1;
  text-align: left;
}
.item + .item {
  border-top: none;
  margin-top: 6px;
}

.item:hover {
  background-color: #fdfdfd;
  cursor: move;
}
.item2 {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: pink;
  text-align: left;
}
.item2 + .item2 {
  border-top: none;
  margin-top: 6px;
}

.item2:hover {
  outline: solid 1px #ddd;
  cursor: move;
}
</style>
