// app.js
/*
new Vue({

    // We want to target the div with an id of 'events'
    el: '#events',

    // Here we can register any values or collections that hold data
    // for the application
    data: {
        event: { name: '', description: '', date: '' },
        events: []
    },

    // Anything within the ready function will run when the application loads
    ready: function() {
        // When the application loads, we want to call the method that initializes
        // some data
        this.fetchEvents();
    },

    // Methods we want to use in our application are registered here
    methods: {

        // We dedicate a method to retrieving and setting some data
        fetchEvents: function() {
            var events = [];
      // this.$set('events', events);
	      this.$http.get('/api/events')
	        .success(function (events) {
	          this.$set('events', events);
	          console.log(events);
	        })
	        .error(function (err) {
	          console.log(err);
	        });
        },

        // Adds an event to the existing events array
        addEvent: function() {
            if (this.event.title.trim()) {
		        // this.events.push(this.event);
		        // this.event = { title: '', detail: '', date: '' };
		        this.$http.post('/api/events', this.event)
		          .success(function (res) {
		            this.events.push(this.event);
		            console.log('Event added!');
		          })
		          .error(function (err) {
		            console.log(err);
		          });
		      }
        }，

         deleteEvent: function(index) {
            if (confirm('確定要移除此項事件？')) {
	        // this.events.splice(index, 1);
	        this.$http.delete('api/events/' + event.id)
	          .success(function (res) {
	            console.log(res);
	            this.events.splice(index, 1);
	          })
	          .error(function (err) {
	            console.log(err);
	          });
            }
        }
    }
});
*/


new Vue({
  el: '#events',

  data: {
    event: { title: '', detail: '', date: '' },
    events: []
  },

  ready: function () {
    this.fetchEvents();
  },

  methods: {

    fetchEvents: function () {
      var events = [];
      // this.$set('events', events);
      this.$http.get('/api/events')
        .success(function (events) {
          this.$set('events', events);
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });
    },

    addEvent: function () {
      if (this.event.title.trim()) {
        // this.events.push(this.event);
        // this.event = { title: '', detail: '', date: '' };
        this.$http.post('/api/events', this.event)
          .success(function (res) {
            this.events.push(this.event);
            console.log('Event added!');
          })
          .error(function (err) {
            console.log(err);
          });
      }
    },

    deleteEvent: function (index) {
      if (confirm('確定要移除此項事件？')) {
        // this.events.splice(index, 1);
        this.$http.delete('api/events/' + event.id)
          .success(function (res) {
            console.log(res);
            this.events.splice(index, 1);
          })
          .error(function (err) {
            console.log(err);
          });
      }
    }
  }
});