
    // 全局状态变量
    let currentCity = "北京";
    let currentCategory = "全部";
    let searchKeyword = "";

    // 获取DOM元素
    const citySelect = document.querySelector('.city-select');
    const cityDropdown = document.querySelector('.city-dropdown');
    const currentCityEl = document.querySelector('.current-city');
    const cityItems = document.querySelectorAll('.city-item');
    const categoryItems = document.querySelectorAll('.category-item');
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const shopListEl = document.getElementById('shopList');
    const emptyTipEl = document.getElementById('emptyTip');
    const resultTitleEl = document.querySelector('.result-title span:first-child');
    const clearFilterEl = document.querySelector('.clear-filter');

    // 城市选择交互
    citySelect.addEventListener('click', (e) => {
    e.stopPropagation();
    cityDropdown.classList.toggle('show');
});
    document.addEventListener('click', () => {
    cityDropdown.classList.remove('show');
});
    cityItems.forEach(item => {
    item.addEventListener('click', () => {
        currentCity = item.dataset.city;
        currentCityEl.textContent = currentCity;
        cityDropdown.classList.remove('show');
        renderShopList();
        updateResultTitle();
    });
});

    // 分类筛选交互
    categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        categoryItems.forEach(ci => ci.classList.remove('active'));
        item.classList.add('active');
        currentCategory = item.dataset.category;
        renderShopList();
        updateResultTitle();
        clearFilterEl.style.display = currentCategory !== "全部" || searchKeyword ? "inline" : "none";
    });
});

    // 搜索功能交互
    searchBtn.addEventListener('click', () => {
    searchKeyword = searchInput.value.trim();
    renderShopList();
    updateResultTitle();
    clearFilterEl.style.display = currentCategory !== "全部" || searchKeyword ? "inline" : "none";
});
    searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchBtn.click();
});

    // 清除筛选功能
    clearFilterEl.addEventListener('click', () => {
    currentCategory = "全部";
    searchKeyword = "";
    categoryItems.forEach(ci => ci.classList.remove('active'));
    categoryItems[0].classList.add('active');
    searchInput.value = "";
    clearFilterEl.style.display = "none";
    renderShopList();
    updateResultTitle();
});

    // 渲染商家列表
    function renderShopList() {
    // 筛选逻辑：城市+分类+关键词
    let filteredShops = shopData.filter(shop => {
    const cityMatch = shop.city === currentCity;
    const categoryMatch = currentCategory === "全部" || shop.category === currentCategory;
    const keywordMatch = !searchKeyword ||
    shop.name.includes(searchKeyword) ||
    shop.tags.some(tag => tag.includes(searchKeyword)) ||
    shop.address.includes(searchKeyword);
    return cityMatch && categoryMatch && keywordMatch;
});

    // 清空列表
    shopListEl.innerHTML = "";

    // 无结果显示提示
    if (filteredShops.length === 0) {
    emptyTipEl.style.display = "block";
    return;
}
    emptyTipEl.style.display = "none";

    // 生成商家卡片
    filteredShops.forEach(shop => {
    const card = document.createElement('div');
    card.className = "shop-card";
    card.innerHTML = `
                <img src="${shop.img}" alt="${shop.name}" class="shop-img">
                <div class="shop-info">
                    <div class="shop-name">${shop.name}</div>
                    <div class="shop-score">${shop.score}分</div>
                    ${shop.tags.map(t=>`<div class="shop-tag">${t}</div>`).join('')}
                    <div class="shop-address">${shop.address}</div>
                </div>`;
    shopListEl.appendChild(card);
});
}

    // 更新结果标题
    function updateResultTitle() {
    let title = `${currentCity} - `;
    if (searchKeyword) {
    title += `搜索“${searchKeyword}”`;
} else if (currentCategory !== "全部") {
    title += currentCategory;
} else {
    title = "猜你喜欢";
}
    resultTitleEl.innerText = title;
}

    // 页面初始化
    window.onload = () => {
    categoryItems[0].classList.add('active');
    renderShopList();
};
