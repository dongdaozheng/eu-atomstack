//该文件用来修复网站中出现的bug
window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('store-header');
  const announcementBar = document.querySelector('announcement-bar');
  //设置滚动距离浏览器顶部的偏移量
  document.documentElement.style.scrollPaddingTop = `${header.clientHeight + announcementBar.clientHeight}px`;
  //修复网站中产品页面侧边栏的bug
  const sidebar = document.querySelector('#sidebar');
  const sidebarItem = sidebar?.querySelectorAll('li');
  sidebarItem?.forEach((item) => {
    item.addEventListener('click', () => {
      const data = item.getAttribute('data-to-section');
      const section = document.querySelector(`[data-section-id=${data}]`);
      console.log('section', section);
      //滚动到指定位置
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
