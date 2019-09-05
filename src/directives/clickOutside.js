const lister = (el, bindings, vnode, e) => {
  if (e.target === el || el.contains(e.target)) {
    return;
  }
  bindings.value();
};

export default {
  clickOutside: {
    inserted(el, bindings, vnode) {
      document.addEventListener("click", lister.bind(this, el, bindings, vnode));
    },
    unbind(el, bindings, vnode) {
      document.removeEventListener("click", lister.bind(this, el, bindings, vnode));
    }
  }
};
