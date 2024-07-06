document.addEventListener('DOMContentLoaded', (event) => {
  console.log('start')
  const elements = document.querySelectorAll('.header-logo');  
  elements.forEach((element) => {  
    element.style.display = 'none';  
  });
  const app = document.getElementById('app');  
  app.classList.add('xhs-moyu-plugin');
  hideImgs()
  // watchChange()
  containerContentChange()
});

function hideImgs() {
  let timer = setTimeout(() => {
    let exploreFeeds = document.getElementsByClassName('feeds-container')
    let imgsList = exploreFeeds[0]
    let imgs = imgsList.getElementsByClassName('note-item')
    if(imgs.length > 0) {
      [...imgs].forEach(i => {
        let imgContainer = i.getElementsByClassName('cover');
        imgContainer[0].classList.add('xhs-m-p_imgContainer');
        let img = imgContainer[0].getElementsByTagName('img')
        opacity0(img[0])
        addBorder(imgContainer[0])
        // imgContainer[0].style.height = '150px';  
      })
      clearTimeout(timer)
    }
  }, 100)
}





function containerContentChange() {
  const content = document.getElementById('mfContainer')
  console.log(content)
  observerChange(
    content,
    hideImgs
  )
}

function addBorder(nnde) {
  nnde.style.border = '1px solid rgb(15 15 15 / 11%)'
}

function opacity0(nnde) {
  nnde.style.opacity = '0'
}


function watchChange() {
  function callback(mutationList, observer) {
    mutationList.forEach((mutation) => {
      switch (mutation.type) {
        case "childList":
          hideImgs()
          break;
        case "attributes":
          // hideImgs()
          break;
        case "subtree":
          hideImgs()
          break;
      }
    });
  }
  var observerOptions = {
    childList: true, // 观察目标子节点的变化，是否有添加或者删除
    attributes: true, // 观察属性变动
    subtree: true, // 观察后代节点，默认为 false
  };
  
  var observer = new MutationObserver(callback);
  let timer = setTimeout(() => {
    let exploreFeeds = document.getElementsByClassName('feeds-container')
    let imgsList = exploreFeeds[0]
    let imgs = imgsList.getElementsByClassName('note-item')
    if(imgs.length > 0) {
      observer.observe(exploreFeeds, observerOptions);
      clearTimeout(timer)
    }
  }, 100)
}

// 配置观察器选项
const config = { attributes: false, childList: true, subtree: true };

// 开始观察目标节点
function observerChange(targetNode, callback) {
  // 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver((mutationsList) => {
    console.log(444)
      for(const mutation of mutationsList) {
        callback()
      }
  });
  observer.observe(targetNode, config);
}
