

 new Vue({
   el:    '#gallery',

  data: {
         isActive: '',
         elementsQuantity : 8,
         x:-1
  },
  methods: {
    addShowClass: function (event) {
      targetId = event;
        this.isActive=event.target.getAttribute('data-index');
        console.log("isActive = "+ this.isActive)
    },

    removeShowClass: function () {
      this.isActive= ''
    },

   



  }
});

