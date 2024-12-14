const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const scrollToTop = document.getElementById("scrollToTop")
const openNav = document.getElementById("openNav")
const resNav = document.getElementById("resNav")
const closeNav = document.getElementById("closeNav")
const searchPopup = document.getElementById("searchPopup")
const openSearch = document.getElementById("openSearch")
const closeSearch = document.getElementById("closeSearch")
const wheelPopup = document.getElementById("wheelPopup")
const openwheel = document.getElementById("openwheel")
const closewheel = document.getElementById("closewheel")

openNav.addEventListener('click', () => {
  resNav.style.width = "100%"
})
closeNav.addEventListener('click', () => {
  resNav.style.width = "0%"
})

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

document.addEventListener('alpine:init', () => {
  Alpine.store('accordion', {
    tab: 0
  });

  Alpine.data('accordion', (idx) => ({
    init() {
      this.idx = idx;
    },
    idx: -1,
    handleClick() {
      this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
    },
    handleRotate() {
      return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
    },
    handleToggle() {
      return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
    }
  }));
})

openSearch.addEventListener('click',()=>{
  searchPopup.style.width = "100%"
  searchPopup.style.opacity = "1"
})
closeSearch.addEventListener('click',()=>{
  searchPopup.style.width = "0"
  searchPopup.style.opacity = "0"
})
openwheel.addEventListener('click',()=>{
  wheelPopup.style.width = "100%"
  wheelPopup.style.opacity = "1"
})
closewheel.addEventListener('click',()=>{
  wheelPopup.style.width = "0"
  wheelPopup.style.opacity = "0"
})