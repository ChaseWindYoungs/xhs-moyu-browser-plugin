
// 配置观察器选项
const config = { attributes: false, childList: true, subtree: true };

// // 当检测到变化时调用的回调函数
// const callback = function(mutationsList) {
//     for(const mutation of mutationsList) {

//         // if (mutation.type === 'childList') {
//         //     console.log('节点变化被发现！');
//         //     // 在这里处理节点变化，比如更新UI，发送网络请求等
//         //     // mutation.addedNodes 包含添加的节点
//         //     // mutation.removedNodes 包含移除的节点
//         // }
//     }
// };

// 开始观察目标节点

export function observerChange(node, callback) {
  // 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver((mutationsList) => {
      for(const mutation of mutationsList) {
        callback()
      }
  });
  observer.observe(targetNode, config);
}
