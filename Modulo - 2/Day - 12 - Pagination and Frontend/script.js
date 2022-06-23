function populateList() {
 const data = Array.from({ length: 100 }).map((_, index) => 
   `<div class="item">Item ${(1 + index)}</div>`)

   const list = document.querySelector('#paginate .list')
   list.innerHTML = data.join("");
   
  return data;
};
const data = populateList();
// ============================

let perPage = 10;
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage)
}
const html = {
    get(element) {
        return document.querySelector(element)
    }
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
 
    if(page < 1) {
        page = 1;
    }

    state.page = page

    if(page > state.totalPage) {
        state.page = state.totalPage
    }


  },
  createListeners() {
    html.get('.first').addEventListener('click', () => {
        controls.goTo(1)
        
     })

     html.get('.last').addEventListener('click', () => {
        controls.goTo(state.totalPage)

        html.get('.next').addEventListener('click', () => {
            controls.next()
         })

         html.get('.prev').addEventListener('click', () => {
            controls.prev()
         })
     })
  }
}

const list = {
    create() {},
    update() {}
 }

controls.createListeners();

function init() {
    controls.createListeners()
}