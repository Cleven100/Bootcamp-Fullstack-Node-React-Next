function populateList() {
 const data = Array.from({ length: 100 }).map((_, index) => 
   `<div class="item">Item ${(1 + index)}</div>`)

   const list = document.querySelector('#paginate .list')
   list.innerHTML = data.join("");
   
  return data;
};

const data = populateList();

let perPage = 10

const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage)
}

const controls = {
  next() {
    state.page++

    const lastPage = state.page > state.totalPage
    if(lastPage) {
      state.page--
    }
  },
  prev() {
    state.page--
    if(state.page < 1) {
        state.page++
    }
  },
  goTo() {
    state.page = page
  }
}