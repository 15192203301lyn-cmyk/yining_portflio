// 全站共用的轻量脚本入口。
document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
