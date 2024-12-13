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